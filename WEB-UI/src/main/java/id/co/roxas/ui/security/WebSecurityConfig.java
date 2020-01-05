package id.co.roxas.ui.security;

import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	public void configure(WebSecurity web) {
	    web.ignoring().antMatchers("/ui/**","/shared-ui/**","/shared/**");
	}

	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
             .authorizeRequests()
                .antMatchers("/ui/**",
                		  "/esbn-web/bootstrap/**", 
                		  "/esbn-web/dist/**", 
                		  "/esbn-web/plugins/**",
                		  "/esbn-web/script/**",
                		  "/esbn-web/style/**",
                		  "/esbn-web/file/**",
                		  "/esbn-web/assets/**",
                		  "/bootstrap/**", "/dist/**", "/plugins/**","/style/**",
                		  "/script/**","/file/**","/master-wording/**","/esbn-web/master-wording/**","/esbn-web/registration/**","/registration/**","/assets/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().accessDeniedPage("/login?denied")
                .and()
            .formLogin()
                .failureUrl("/login?error")
                .loginPage("/login")
                .defaultSuccessUrl("/shared-ui/test-doang")
                .permitAll()
                .and()
                .logout()	
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login")
                .permitAll()
                .and()
                .sessionManagement()
            	.maximumSessions(1)               //(1)
            	.maxSessionsPreventsLogin(false)    //(2)
            	.expiredUrl("/auth/login")          //(3)
            	.sessionRegistry(sessionRegistry()); //(4)
        
    }
    
    @Bean
    SessionRegistry sessionRegistry() {			
        return new SessionRegistryImpl();
    }
    
    @Bean
	public AuthenticationManager customAuthenticationManager() throws Exception {
	  return authenticationManager();
	}

//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        //Use Spring Boots User detailsMAnager
//        JdbcUserDetailsManager userDetailsService = new JdbcUserDetailsManager();
//
//        //Set our Datasource to use the one defined in application.properties
//        userDetailsService.setDataSource(datasource);
//
//        //Create BCryptPassword encoder
//        PasswordEncoder encoder = new BCryptPasswordEncoder();
//
//        //add components
//        auth.userDetailsService(userDetailsService).passwordEncoder(encoder);
//        auth.jdbcAuthentication().dataSource(datasource);
//
//        // add new user "user" with password "password" - password will be encrypted
//        if (!userDetailsService.userExists("naruto")) {
//            List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
//            authorities.add(new SimpleGrantedAuthority("USER"));
//            User userDetails = new User("naruto", encoder.encode("1234"), authorities);
//            userDetailsService.createUser(userDetails);
//        }
//    }

}
