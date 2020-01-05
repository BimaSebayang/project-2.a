package id.co.roxas.common.bean.response;

import java.util.Date;
import java.util.Map;
public class WsResponseHashMap<K,V> extends BaseResponse {

	private Map<K, V> response;
	
	
	
	public WsResponseHashMap() {
		super();
	}

	public WsResponseHashMap(Date accessedDate, String reasonCode, Integer responseCode, Map<K, V> response) {
		super(accessedDate, reasonCode, responseCode);
		this.response = response;
	}

	public Map<K, V> getResponse() {
		return response;
	}

	public void setResponse(Map<K, V> response) {
		this.response = response;
	}
      
	
	
}
