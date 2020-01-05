package id.co.roxas.common.bean.auth;

public class BeanAuthentication {
	
	private String userId;
	private String password;
	private String accessType;
	private String accessFrom;

	
	
	public String getAccessFrom() {
		return accessFrom;
	}

	public void setAccessFrom(String accessFrom) {
		this.accessFrom = accessFrom;
	}


	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAccessType() {
		return accessType;
	}

	public void setAccessType(String accessType) {
		this.accessType = accessType;
	}

	
	

}
