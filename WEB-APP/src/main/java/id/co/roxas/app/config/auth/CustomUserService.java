package id.co.roxas.app.config.auth;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.google.gson.Gson;

import id.co.roxas.common.bean.auth.BasePrincipalUserSession;


public class CustomUserService implements UserDetails{

	private static final long serialVersionUID = -9188121920928787798L;
	
	private BasePrincipalUserSession session;
	
	Collection<? extends GrantedAuthority> authorities;

	public CustomUserService(BasePrincipalUserSession session) {
		System.err.println("this session : " + new Gson().toJson(session));
		this.session = session;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return "{noop}"+session.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return session.getUserName();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return session.getIsCredentialsNonExpired();
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return session.getIsAccountNonLocked();
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return session.getIsCredentialsNonExpired();
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return session.getIsEnabled();
	}

}
