package id.co.roxas.app.controller.share;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import javax.transaction.Transactional;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import id.co.roxas.app.CommonConnector;
import id.co.roxas.common.bean.auth.BeanAuthentication;
import id.co.roxas.common.bean.response.HttpRestResponse;

@RestController
@RequestMapping("/shared")
public class ShareSomethingOutsideCtl extends CommonConnector {
   
	private static final String URL = "/shared";
	private final static String SALT_URL = "http://localhost:"; 
	private final static String USER_ABILIFY = "bXktdHJ1c3RlZC13ZWJzaXRlOmxhY2tpbmcwMzA5V2ViU2l0ZQ";
	
    
	@PostMapping("/oauth/token/v2/password-granter")
	public Map<String, Object> passwordGranter(
			@RequestHeader(value="secret-method",required = true) String secretMethod,
			@RequestBody String hashIdentity){
		//System.err.println("user : " + noticeUser(hashIdentity) + " password : " + noticePassword(hashIdentity));
//		String granterType = "grant_type="+secretMethod+
//				"&username="+noticeUser(hashIdentity)+
//				"&password="+noticePassword(hashIdentity)+
//				"&access="+noticeAccessType(hashIdentity);
//		Map<String, String> header = new HashMap<>();
//		header.put("Authorization",
//				"Basic ".concat(USER_ABILIFY));
//		HttpRestResponse httpRestResponse = wsBody
//				(SALT_URL+serverPort+"/oauth/token?"+granterType, null, HttpMethod.POST,header);
//		
//		System.err.println("error result " + new Gson().toJson(httpRestResponse));
//		
//		Map<String, Object> map = mapperJsonToHashMap(httpRestResponse.getBody());
//		
//		
//		map = tokenSvc.getMyToken(map, noticeUser(hashIdentity));
//		
		return null;
	}
	
	@PostMapping("/oauth/token/v3/password-granter")
	public Map<String, Object> passwordGranterV3(
			@RequestBody BeanAuthentication beanAuthentication){
		
		if(!isConnectWithSomeUrl(commonWebSecurityCoreUrl)) {
			Map<String, Object> map = new HashMap<>();
			map.put("code", 501);
			map.put("reason", "Connection Refused For URL : " + commonWebSecurityCoreUrl);
			return map;
		}
		
		//System.err.println("user : " + noticeUser(hashIdentity) + " password : " + noticePassword(hashIdentity));
		String granterType = "grant_type=password"+
				"&username="+beanAuthentication.getUserId()+
				"&password="+beanAuthentication.getPassword()+
				"&access="+beanAuthentication.getAccessType();
		Map<String, String> header = new HashMap<>();
		header.put("Authorization",
				"Basic ".concat(USER_ABILIFY));
		HttpRestResponse httpRestResponse = wsBody
				(SALT_URL+appServerPort+contextPath+"/oauth/token?"+granterType, null, HttpMethod.POST,header);
		
		System.err.println("error result " + new Gson().toJson(httpRestResponse));
		
		Map<String, Object> map = mapperJsonToHashMap(httpRestResponse.getBody());
		
		return map;
	}
	
	
}
