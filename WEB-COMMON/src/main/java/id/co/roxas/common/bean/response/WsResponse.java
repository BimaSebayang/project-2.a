package id.co.roxas.common.bean.response;

import java.util.Date;


public class WsResponse<T> extends BaseResponse {

	private T response;
	
	
	
	public WsResponse() {
		super();
	}

	public WsResponse(Date accessedDate, String reasonCode, Integer responseCode, T response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public T getResponse() {
		return response;
	}

	public void setResponse(T response) {
		this.response = response;
	}
	
	
	

}
