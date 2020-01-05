package id.co.roxas.common.bean.errorHandler;

public class ErrorResponseHandler {
	private int code;
	private String reason;
	

	

	public void setCode(int code) {
		this.code = code;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public int getCode() {
		return code;
	}

	public String getReason() {
		return reason;
	}

}
