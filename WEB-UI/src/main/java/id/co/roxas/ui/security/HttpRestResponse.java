package id.co.roxas.ui.security;

import org.springframework.http.HttpStatus;

public class HttpRestResponse {
      private HttpStatus status;
      private String body;
    
    
 
	public HttpRestResponse() {
		super();
	}



	public HttpRestResponse(HttpStatus status, String body) {
		this.status = status;
		this.body = body;
	}

	
	
	public HttpStatus getStatus() {
		return status;
	}



	public String getBody() {
		return body;
	}
      
      
}
