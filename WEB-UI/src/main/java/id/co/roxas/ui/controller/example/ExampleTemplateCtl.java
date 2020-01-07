package id.co.roxas.ui.controller.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import id.co.roxas.ui.CommonConnector;

@Controller
@RequestMapping("/shared-ui/example-template")
public class ExampleTemplateCtl extends CommonConnector{
	
	@RequestMapping("/test/{htmlUrl}")
	public String connectTo(@PathVariable("htmlUrl")String htmlUrl) {
		return "/example-html/"+htmlUrl;
	}

}
