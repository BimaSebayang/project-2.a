package id.co.roxas.app.controller.authorized;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.roxas.app.bean.authorized.UnauthorizedUrlHdrBean;
import id.co.roxas.app.controller.BaseCtl;
import id.co.roxas.app.service.AuthenticationSvc;

@RestController
@RequestMapping("/unauthorized")
public class CreateUnauthorizedUrl extends BaseCtl{

	@Autowired
	private AuthenticationSvc authenticationSvc;
	
	@PostMapping("/create")
	public ResponseEntity<Object> createBean(@RequestBody UnauthorizedUrlHdrBean bean) {
		return authenticationSvc.saveUrl(bean);
	}
	
	@GetMapping("/inquiry/all/{userId}")
	public ResponseEntity<Object> createBean(@PathVariable("userId")String userId){
		return authenticationSvc.getAllUrlUnauthorized(userId);
	}
	
	
}
