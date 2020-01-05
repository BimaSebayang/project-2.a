package id.co.roxas.ui;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import id.co.roxas.common.bean.auth.BasePrincipalUserSession;
import id.co.roxas.ui.security.CustomUserService;

@SpringBootApplication
public class WebUiApplication {

	private static final String USER_ACCESS = "user";
	private static final String ADMIN_ACCESS = "admin";
	private static final String VISITOR_ACCESS = "visitor";
	
	public static void main(String[] args) {
		SpringApplication.run(WebUiApplication.class, args);
	}

	@Autowired
	public void authenticationManager(AuthenticationManagerBuilder builder,
			HttpServletRequest request) throws Exception {
		builder.userDetailsService(new UserDetailsService() {
			
			@Override
			public UserDetails loadUserByUsername(String userValidation) throws UsernameNotFoundException {
				
                
				//System.err.println("body : " + getRequestBody(request));
				//String password = request.getParameter("password");
				
				BasePrincipalUserSession bean = new BasePrincipalUserSession();

				
				
				bean.setLastActivity(new Date());
				bean.setLoginDate(new Date());
				bean.setPassword("test");
				bean.setUserId("Bima Satrya Sebayang");
				bean.setUserName(userValidation);
				bean.setUserAccess("");
				return new CustomUserService(bean);
			}
		});
	}
	
}
