package id.co.roxas.ui.security;

import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;

import id.co.roxas.ui.CommonConnector;

public class AngularReturn {

	private Object response;
	private Date accessedDate = new Date();
	private String keyAccess;
	private String reasonResponse;
	private int codeResponse;
	private HttpStatus httpStatus;


	public AngularReturn(Object response, String keyAccess, HttpSession session, HttpServletResponse servletResponse) {
		String KEY = "KEY_ACCESS";
		String sessionKey = (String) session.getAttribute(KEY);

			if (sessionKey != null && keyAccess != null && sessionKey.equals(keyAccess)) {
				this.response = response;
				this.keyAccess = keyAccess;
				this.reasonResponse = "Retrieve Success";
				this.codeResponse = HttpStatus.OK.value();
				this.httpStatus = HttpStatus.OK;
				String nextKeyAccess = UUID.randomUUID().toString();
				servletResponse.addCookie(CommonConnector.cookieEncryptor(KEY, nextKeyAccess, session));		
			}
			else {
				this.reasonResponse = "Invalid Key Access";
				this.codeResponse = HttpStatus.FORBIDDEN.value();
				this.httpStatus = HttpStatus.FORBIDDEN;
			}
		
	}
	
	

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}



	public String getReasonResponse() {
		return reasonResponse;
	}

	public void setReasonResponse(String reasonResponse) {
		this.reasonResponse = reasonResponse;
	}

	public int getCodeResponse() {
		return codeResponse;
	}

	public void setCodeResponse(int codeResponse) {
		this.codeResponse = codeResponse;
	}

	public Object getResponse() {
		return response;
	}

	public Date getAccessedDate() {
		return accessedDate;
	}

	public String getKeyAccess() {
		return keyAccess;
	}

}
