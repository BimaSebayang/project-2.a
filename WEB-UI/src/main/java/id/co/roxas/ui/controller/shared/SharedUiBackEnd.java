package id.co.roxas.ui.controller.shared;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;
import com.sun.mail.iap.Response;

import id.co.roxas.common.bean.angular.AngularRestReturn;
import id.co.roxas.common.bean.graph.GraphBean;
import id.co.roxas.common.bean.response.HttpRestResponse;
import id.co.roxas.common.bean.response.WsResponse;
import id.co.roxas.common.bean.response.WsResponseHashMap;
import id.co.roxas.common.bean.structureData.GraphData;
import id.co.roxas.common.bean.tictactoe.*;
import id.co.roxas.ui.CommonConnector;
import id.co.roxas.ui.robot.MachineLearning;
import id.co.roxas.ui.ruler.TicTacToeBoardRuler;
import id.co.roxas.ui.security.AngularReturn;

@RestController	
@RequestMapping("/shared")
public class SharedUiBackEnd extends CommonConnector{

//	@GetMapping("/access-key/{ddMMyyyyHH}")
//	public String accessKey(@PathVariable("ddMMyyyyHH") String ddMMyyyyHH) {
//		if(isInvalidTimeStamp(ddMMyyyyHH)==null) {
//			return "Invalid Date";
//		}
//		
//		
//	}
	
	
	@GetMapping("/test-get")
	public ResponseEntity<AngularReturn> getData(@RequestHeader(name=KEY_ACCESS, required=true) String keyAccess, 
			HttpSession session, HttpServletResponse servletResponse) {
		keyAccess = decryptCookiesBean(keyAccess).getCookiesValue();
		AngularReturn angularReturn = new AngularReturn("Testing Doang", keyAccess, session,servletResponse);
	    return new ResponseEntity<AngularReturn>(angularReturn, angularReturn.getHttpStatus());
	}

	@GetMapping("/test-get2")
	public AngularReturn getData2(@RequestParam(name=KEY_ACCESS, required=true) String keyAccess, 
			HttpSession session,HttpServletResponse servletResponse) {
		return new AngularReturn("Testing Doang 2", keyAccess, session,servletResponse);
	}
	
	@PostMapping("/test-graph")
	public ResponseEntity<AngularReturn>  generateGraphData(
			@RequestParam(name=KEY_ACCESS, required=true) String keyAccess,
			@RequestBody GraphBean bean, HttpSession httpSession,HttpServletResponse servletResponse) {
		HttpRestResponse response = wsBody
				(WDL_APP_URL+"/graph-detail-ctl/generate", bean, 
						HttpMethod.POST, null);
		
		WsResponse<GraphData> wsResponse = new WsResponse<>();
		try {
			wsResponse = mapperJsonToSingleResponse(response.getBody(), GraphData.class);
			//wsResponse = mapperJsonToSingleDto(response.getBody(), WsResponse.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		AngularReturn angularReturn = new AngularReturn(wsResponse.getResponse(), keyAccess, httpSession,servletResponse);
		return new ResponseEntity<AngularReturn>(angularReturn, angularReturn.getHttpStatus());
	}
	
	@PostMapping("/test-graph-new")
	public <K,V> AngularReturn generateGraphDataNew(
			@RequestParam(name=KEY_ACCESS, required=true) String keyAccess,	
		@RequestBody GraphBean bean, HttpSession httpSession,HttpServletResponse servletResponse) {
		HttpRestResponse response = wsBody
				(WDL_APP_URL+"/graph-detail-ctl/generate", bean, 
						HttpMethod.POST, null);
		WsResponseHashMap<K, V> wsResponse = new WsResponseHashMap<>();
		try {
			wsResponse = mapperJsonToMapResponse(response.getBody());
			//wsResponse = mapperJsonToSingleDto(response.getBody(), WsResponse.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new AngularReturn(wsResponse.getResponse(), keyAccess, httpSession, servletResponse);
	}
	
	@GetMapping("/initial/{row}/{column}")
	public AngularRestReturn<Object, TicTacToeRule> generateGame(
			@PathVariable("row") int row, @PathVariable("column") int column,
			HttpServletRequest request) {
		
		AngularRestReturn<Object, TicTacToeRule> angularRestReturn = new AngularRestReturn<>();
		
		TicTacToeRule rule = new TicTacToeRule();
		List<List<TicTacToeBoard>> listListticTacToeBoards = new ArrayList<>();
	
		
		for(int i=1;i<=row;i++) {
			List<TicTacToeBoard> listTicTacToeBoard = new ArrayList<>();
			for(int j=1;j<=column;j++) {
				TicTacToeBoard tacToeBoard = new TicTacToeBoard();
				tacToeBoard.setColumn(i);
				tacToeBoard.setRow(j);
				tacToeBoard.setOwnerBoard("");
				listTicTacToeBoard.add(tacToeBoard);
			}
			listListticTacToeBoards.add(listTicTacToeBoard);
		}
		rule.setOwnerTurned("");
		rule.setListListTicTacToeBoard(listListticTacToeBoards);
		rule.setReasonInvalidMove("");
		rule.setValidMove(true);
		
		
		angularRestReturn.setBody(null);
		angularRestReturn.setContent(rule);
		angularRestReturn.setHeader(null);
		angularRestReturn.setUrl(getUrlAccessing(request));
		return angularRestReturn;
	}
	
	@PostMapping("/selectBox/{ownerTurned}/{column}/{row}")
	public  AngularRestReturn<TicTacToeRule, TicTacToeRule> selectedTurned( @RequestBody
			TicTacToeRule rule, 
			@PathVariable("ownerTurned") String ownerTurned,
			@PathVariable("row") int row, @PathVariable("column") int column,
			HttpServletRequest request) {
		
		AngularRestReturn<TicTacToeRule, TicTacToeRule> angularRestReturn = new AngularRestReturn<>();

		angularRestReturn.setBody(rule);
		angularRestReturn.setContent(ruleTheTicTacToe(rule, ownerTurned, column, row));
		angularRestReturn.setHeader(null);
		angularRestReturn.setUrl(getUrlAccessing(request));
		return angularRestReturn;
	}
	
	
	@PostMapping("/robotTurn/{row}/{column}")
	public  AngularRestReturn<TicTacToeRule, TicTacToeRule> selectedRobotReturn(@RequestBody
			TicTacToeRule rule, @PathVariable("row") int rowT, @PathVariable("column") int columnT,
			HttpServletRequest request) {
		String ownerTurned = "v2";
		TicTacToeBoardRuler ruler = MachineLearning.getWhichBoardCondition3(rule, columnT, rowT, 3);
		System.err.println(new Gson().toJson(ruler));
		int column = ruler.column;
		int row = ruler.row;
		AngularRestReturn<TicTacToeRule, TicTacToeRule> angularRestReturn = new AngularRestReturn<>();
		
	
		angularRestReturn.setBody(rule);
		angularRestReturn.setContent(ruleTheTicTacToe(rule, ownerTurned, column, row));
		angularRestReturn.setHeader(null);
		angularRestReturn.setUrl(getUrlAccessing(request));
		return angularRestReturn;
	}
	
	
	private TicTacToeRule ruleTheTicTacToe(TicTacToeRule rule, String ownerTurned, int column, int row) {
		TicTacToeRule ticTacToeRule = new TicTacToeRule();
		
		List<List<TicTacToeBoard>> lust = new ArrayList<>();
		
		String reasonInvalid = "";
		boolean isValid =true;
		

		for (List<TicTacToeBoard> list : rule.listListTicTacToeBoard) {
			List<TicTacToeBoard> listing = new ArrayList<>();
			for (TicTacToeBoard list2 : list) {
			    TicTacToeBoard board = list2;
			    if(board.getColumn()==column&&board.getRow()==row) {
			    	if(board.getOwnerBoard()==null||board.getOwnerBoard().equals("")) {
			    	board.setOwnerBoard(ownerTurned);
			    	}
			    	else
			    	{
			    		isValid = false;
			    		reasonInvalid = "Board Already Filled By Player";
			    	}	
			    }
			    listing.add(board);
			}
			lust.add(listing);
		}
		
		ticTacToeRule.setListListTicTacToeBoard(lust);
		ticTacToeRule.setOwnerTurned(ownerTurned);
		ticTacToeRule.setReasonInvalidMove(reasonInvalid);
		ticTacToeRule.setValidMove(isValid);
		
		return ticTacToeRule;
	}
	
}
