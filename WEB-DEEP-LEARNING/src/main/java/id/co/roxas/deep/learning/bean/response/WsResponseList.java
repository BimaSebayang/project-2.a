package id.co.roxas.deep.learning.bean.response;

import java.util.Date;
import java.util.List;

import id.co.roxas.deep.learning.bean.BaseResponse;

public class WsResponseList <T> extends BaseResponse{

	private List<T> response;
	
	public WsResponseList(Date accessedDate, String reasonCode, Integer responseCode, List<T> response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public List<T> getResponse() {
		return response;
	}
	
	

}
