package id.co.roxas.common.bean.response;

import org.springframework.http.HttpStatus;

public class HttpResponseClass<T> {
	 private HttpStatus status;
     private T body;
     
	public HttpResponseClass(HttpStatus status, T body) {
		super();
		this.status = status;
		this.body = body;
	}
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	public T getBody() {
		return body;
	}
	public void setBody(T body) {
		this.body = body;
	}
     
     
}
