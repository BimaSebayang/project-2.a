package id.co.roxas.security.core;

import java.util.Date;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.roxas.common.bean.TestBean;
import id.co.roxas.common.bean.auth.BasePrincipalUserSession;
import id.co.roxas.common.bean.auth.BeanAuthentication;

@RestController
@RequestMapping("/request")
public class UserGranterCtl {

	@GetMapping("/testcommon")
	public TestBean getTestBean() {
		TestBean bean = new TestBean();
		bean.setTester("hahahah");
		return bean;
	}
	
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
