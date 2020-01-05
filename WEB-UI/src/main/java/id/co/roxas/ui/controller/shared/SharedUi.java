package id.co.roxas.ui.controller.shared;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import id.co.roxas.ui.controller.BaseController;

@Controller
@RequestMapping("/shared-ui")
public class SharedUi extends BaseController{

	@RequestMapping("/test-doang")
	public String test() {
		return "/shared/test";
	}
	
	@RequestMapping("/test-session")
	public ModelAndView testSession(
			@RequestParam(name=KEY_ACCESS, required=true) String keyAccess,
			HttpServletRequest request, 
			HttpSession session,
			HttpServletResponse servletResponse) {
		return pageActivation(request, session,null,keyAccess, "/shared/testSession",null,servletResponse );
	}
	
}