package id.co.roxas.ui.bean.response;

import java.util.Date;

import id.co.roxas.ui.bean.BaseResponse;


public class WsResponse<T> extends BaseResponse {

	private T response;

	public T getResponse() {
		return response;
	}

	public void setResponse(T response) {
		this.response = response;
	}
	
	

	

}
