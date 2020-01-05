package id.co.roxas.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test")
public class TestCtl extends BaseCtl{
	
	@GetMapping("/ctl")
	public String hai() {
		return "hai";
	}

}
