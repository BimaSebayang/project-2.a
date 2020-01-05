package id.co.roxas.ui.bean.response;

import java.util.Date;
import java.util.List;

import id.co.roxas.ui.bean.BaseResponse;


public class WsResponseList <T> extends BaseResponse{

	private List<T> response;

	public List<T> getResponse() {
		return response;
	}

	public void setResponse(List<T> response) {
		this.response = response;
	}
	
	
}
