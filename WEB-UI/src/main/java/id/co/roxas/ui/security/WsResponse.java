package id.co.roxas.ui.security;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class WsResponse {
	private String wsContent;
	private String message;
	private static final Gson gson = new GsonBuilder()
			   .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
	
	
	
	public WsResponse() {
	
	}
	public WsResponse(Object wsContent, String message) {
	
		this.wsContent = gson.toJson(wsContent);
		this.message = message;
	}
	public String getWsContent() {
		return wsContent;
	}
	public void setWsContent(String wsContent) {
		this.wsContent = wsContent;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
