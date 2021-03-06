package id.co.roxas.deep.learning.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;

import id.co.roxas.common.bean.auth.BasePrincipalUserSession;
import id.co.roxas.common.bean.auth.BeanAuthentication;
import id.co.roxas.common.bean.response.HttpRestResponse;
import id.co.roxas.deep.learning.CommonConnector;


@Service
@Component
public class AuthenticationSvc extends CommonConnector{

	
      public BasePrincipalUserSession getUserSession(BeanAuthentication authentication) {
    	  
    	  HttpRestResponse response  = wsBody
    			  (webSecurityCoreUrl+"/request/authentication/v1", 
    					  authentication, HttpMethod.POST, null);
    	  
    	  BasePrincipalUserSession basePrincipalUserSession = null;
    	  
    	  
    	  try {
			basePrincipalUserSession = mapperJsonToSingleDto(response.getBody(), 
					  BasePrincipalUserSession.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	  
    	  return basePrincipalUserSession;
    	  
      }      	
	
}
