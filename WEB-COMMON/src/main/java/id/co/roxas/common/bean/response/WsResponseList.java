package id.co.roxas.common.bean.response;

import java.util.Date;
import java.util.List;

public class WsResponseList <T> extends BaseResponse{

	private List<T> response;
	

	public WsResponseList() {
		super();
	}

	public WsResponseList(Date accessedDate, String reasonCode, Integer responseCode, List<T> response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public List<T> getResponse() {
		return response;
	}

	public void setResponse(List<T> response) {
		this.response = response;
	}
	
	
	

}
