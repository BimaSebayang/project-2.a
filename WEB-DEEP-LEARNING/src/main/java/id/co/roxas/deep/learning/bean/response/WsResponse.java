package id.co.roxas.deep.learning.bean.response;

import java.util.Date;

import id.co.roxas.deep.learning.bean.BaseResponse;

public class WsResponse<T> extends BaseResponse {

	private T response;
	
	public WsResponse(Date accessedDate, String reasonCode, Integer responseCode, T response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public T getResponse() {
		return response;
	}
	

}
