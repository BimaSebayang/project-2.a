package id.co.roxas.ui.security;

import java.util.List;
import java.util.Map;

public class PrincipalSecurityData {
     private String userName;
     private String password;
     private String isActive;
     private List<Map<String, String>>authorities;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	public List<Map<String, String>> getAuthorities() {
		return authorities;
	}
	public void setAuthorities(List<Map<String, String>> authorities) {
		this.authorities = authorities;
	}
     
}
