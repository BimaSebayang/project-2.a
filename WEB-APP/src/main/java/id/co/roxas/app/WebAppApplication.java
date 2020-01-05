package id.co.roxas.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.google.gson.Gson;

import id.co.roxas.app.config.auth.CustomUserService;
import id.co.roxas.app.service.AuthenticationSvc;
import id.co.roxas.common.bean.auth.BasePrincipalUserSession;
import id.co.roxas.common.bean.auth.BeanAuthentication;
import id.co.roxas.common.bean.oauth.encryptorv1;
import id.co.roxas.common.lib.encryptor.SecurityData;
import id.co.roxas.common.lib.ultimate.UltimateBase;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@SpringBootApplication
@EnableSwagger2
public class WebAppApplication {
    
	private static final String ACCESS_FROM = "WEB-APP";
	
	public static void main(String[] args) {
		SpringApplication.run(WebAppApplication.class, args);
	}
	

	 @Bean
	    public Docket api() {
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select() 
	          .apis(RequestHandlerSelectors.basePackage("id.co.roxas.app.controller"))
	          .paths(PathSelectors.regex("/.*"))                         
	          .build().apiInfo(new ApiInfo("Account Service Api Documentation", 
	        		  "Documentation automatically generated",
	        		  "1.1.1",
	        		  null, new Contact("Bima Satrya Sebayang", 
	        				    "bimasebayang11@gmail.com", "bimasebayang11@gmail.com"),
	        		  "no license needed", "no license needed"))
	          .globalOperationParameters(
	        	        Arrays.asList(new ParameterBuilder()
	        	            .name("Authorization")
	        	            .description("Description of header")
	        	            .modelRef(new ModelRef("string"))
	        	            .parameterType("header")
	        	            .required(false)
	        	            .build()));                                           
	    }
	

	private String getRequestBody(final HttpServletRequest request) {
		final StringBuilder builder = new StringBuilder();
		try (BufferedReader reader = request.getReader()) {
			if (reader == null) {
				return null;
			}
			String line;
			while ((line = reader.readLine()) != null) {
				builder.append(line);
			}
			return builder.toString();
		} catch (final Exception e) {
			return null;
		}
	}
	
	public encryptorv1 getEncryptorV1(String streamEncrypt) {
		encryptorv1 v1 = new encryptorv1();
		try {
			String decrypProses = new SecurityData().decrypt(streamEncrypt);
			System.err.println("proses : " + decrypProses);
			UltimateBase base = new UltimateBase();
			v1 = base.mapperJsonToSingleDto(decrypProses, encryptorv1.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return v1;
	}

	@Autowired
	public void authenticationManager(AuthenticationManagerBuilder builder,
			HttpServletRequest request, AuthenticationSvc authenticationSvc) throws Exception {
		builder.userDetailsService(new UserDetailsService() {
			
			@Override
			public UserDetails loadUserByUsername(String userValidation) throws UsernameNotFoundException {                
				System.err.println("body : " + getRequestBody(request));
				String password = request.getParameter("password");
				String access = request.getParameter("access");
				BeanAuthentication authentication = new BeanAuthentication();
				authentication.setAccessFrom(ACCESS_FROM);
				authentication.setAccessType(access);
				authentication.setPassword(password);
				authentication.setUserId(userValidation);
				BasePrincipalUserSession bean = authenticationSvc.getUserSession(authentication);
				return new CustomUserService(bean);
			}
		});
	}
}
