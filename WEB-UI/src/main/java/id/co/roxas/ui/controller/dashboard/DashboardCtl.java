package id.co.roxas.ui.controller.dashboard;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import id.co.roxas.ui.CommonConnector;

@Controller
@RequestMapping("/shared-ui/dashboard")
public class DashboardCtl extends CommonConnector{

	@GetMapping("/introduction-web")
	public ModelAndView goIntroductionMe(
			//@RequestParam(name=KEY_ACCESS, required=true) String keyAccess,
			HttpServletRequest request, 
			HttpSession session,
			HttpServletResponse servletResponse
			) {
		
		Map<String, Object> model = new HashMap<>();
		model.put("title", "Hello World");
		
		return pageActivation
				(request, session, null, "/shared/dashboard/introduction", model, servletResponse);
		
	}
	
	
	
}
