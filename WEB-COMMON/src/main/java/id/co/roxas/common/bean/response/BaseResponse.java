package id.co.roxas.common.bean.response;

import java.util.Date;

public class BaseResponse {
	
	private Date accessedDate;
	private String reasonCode;
	private Integer responseCode;

	
	
	public BaseResponse() {
		super();
	}

	public BaseResponse(Date accessedDate, String reasonCode, Integer responseCode) {
		this.accessedDate = accessedDate;
		this.reasonCode = reasonCode;
		this.responseCode = responseCode;
	}

	public Date getAccessedDate() {
		return accessedDate;
	}

	public void setAccessedDate(Date accessedDate) {
		this.accessedDate = accessedDate;
	}

	public String getReasonCode() {
		return reasonCode;
	}

	public void setReasonCode(String reasonCode) {
		this.reasonCode = reasonCode;
	}

	public Integer getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(Integer responseCode) {
		this.responseCode = responseCode;
	}

}
