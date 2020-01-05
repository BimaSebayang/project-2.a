package id.co.roxas.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.roxas.app.CommonConnector;


@RestController
@RequestMapping("/test")
public class TestCtl extends CommonConnector{
	
	@GetMapping("/ctl")
	public String hai() {
		return "hai";
	}

}
