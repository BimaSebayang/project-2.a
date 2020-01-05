package id.co.roxas.deep.learning.bean.response;

import java.util.Date;
import java.util.Map;

import id.co.roxas.deep.learning.bean.BaseResponse;

public class WsResponseHashMap<K,V> extends BaseResponse {

	private Map<K, V> response;
	
	public WsResponseHashMap(Date accessedDate, String reasonCode, Integer responseCode, Map<K, V> response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public Map<K, V> getResponse() {
		return response;
	}
      
	
}
