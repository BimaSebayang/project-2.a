package id.co.roxas.deep.learning.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

	
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		System.err.println("lewat sini kagak sih");
		http.authorizeRequests()
		
		.antMatchers("/oauth/token/v2/password-granter","/admin-login-ctl/login-to-admin","/shared/**","/registeration/**",
				"/tester/**","/web-request/ticket/**","/database-init/**", "/images/*", "/css/*", "/swagger-ui.js",
				"/swagger-ui.min.js", "/api-docs", "/swagger-ui.html", "/fonts/*", "/api-docs/*",
				"/api-docs/default/*", "/o2c.html", "index.html", "/webjars/**", "/hystrix/**",
				"**/swagger-resources/**", "/swagger-ui.html", "/v2/api-docs", "/webjars/**",
				//swgger needed start
				"/web-request/ticket/**","/database-init/**", "/images/*", "/css/*", "/swagger-ui.js",
				"/swagger-ui.min.js", "/api-docs/**", "/swagger-ui.html", "/fonts/*", "/o2c.html", "index.html",
				"/webjars/**", "/hystrix/**","/configuration/security",
				"/swagger-resources/**", "/swagger-ui.html", "/v2/**", "/webjars/**"
				//swagger needed end
				)
		.permitAll().anyRequest().authenticated();
	}

}
