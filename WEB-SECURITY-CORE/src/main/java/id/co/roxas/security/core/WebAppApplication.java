package id.co.roxas.security.core;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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

	public static void main(String[] args) {
		SpringApplication.run(WebAppApplication.class, args);
	}
	
	 @Bean
	    public Docket api() {
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select() 
	          .apis(RequestHandlerSelectors.basePackage("id.co.roxas.security.core"))
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
}
