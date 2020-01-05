package id.co.roxas.security.core;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("/request")
public class UserGranterCtl {

	@PostMapping("/authentication/v1")
	public BasePrincipalUserSession authenticationManagement(
			@RequestBody BeanAuthentication machineId){
		BasePrincipalUserSession map = new BasePrincipalUserSession();

//		if(!machineId.getUserId().equals("india")) {
//			
//			map.setIsAccountNonLocked(false);
//			
//			//map.setUserName("bodo amat");
//			//map.setPassword("******************************");  //--> bad credential
//			
//			
//			//map.setIsEnabled(false); // --> unsupported grant type;
//			return map;
//		}
		
		map.setIsAccountNonLocked(true);
		map.setIsAccountNonExpired(true);
		map.setIsEnabled(true);
		map.setIsCredentialsNonExpired(true);
		map.setLastActivity(new Date());
		map.setLoginDate(new Date());
		map.setPassword(machineId.getPassword());
		map.setUserAccess(machineId.getAccessType());
		map.setUserId(machineId.getUserId());
		map.setUserName("TESTID");
		return map;
	}
	
}
