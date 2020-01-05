package id.co.roxas.ui.bean.response;

import java.util.Date;
import java.util.Map;

import id.co.roxas.ui.bean.BaseResponse;


public class WsResponseHashMap<K,V> extends BaseResponse {

	private Map<K, V> response;

	public Map<K, V> getResponse() {
		return response;
	}

	public void setResponse(Map<K, V> response) {
		this.response = response;
	}
	
	
}
