package id.co.roxas.ui.security;

import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import id.co.roxas.ui.UltimateBase;

public class AngularReturn {

	private Object response;
	private Date accessedDate = new Date();
	private String keyAccess;
	private String reasonResponse;
	private int codeResponse;


	public AngularReturn(Object response, String keyAccess, HttpSession session, HttpServletResponse servletResponse) {
		String KEY = "KEY_ACCESS";
		String sessionKey = (String) session.getAttribute(KEY);
		System.err.println("session key : " + sessionKey);
		System.err.println("key Access : " + keyAccess);
		System.err.println("result equality : " + sessionKey.equals(keyAccess));

			if (sessionKey != null && keyAccess != null && sessionKey.equals(keyAccess)) {
				this.response = response;
				this.keyAccess = keyAccess;
				this.reasonResponse = "Retrieve Success";
				this.codeResponse = 200;
				String nextKeyAccess = UUID.randomUUID().toString();
				servletResponse.addCookie(UltimateBase.cookieEncryptor(KEY, nextKeyAccess, session));		
			}
			else {
				this.reasonResponse = "Invalid Key Access";
				this.codeResponse = 403;
			}
		
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
