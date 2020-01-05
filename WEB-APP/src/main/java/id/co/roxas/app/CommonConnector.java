package id.co.roxas.app;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import id.co.roxas.common.lib.controller.BaseCtl;
import id.co.roxas.common.lib.ultimate.UltimateBase;

@Component
public class CommonConnector extends BaseCtl{
	@Value("${server.port}")
	protected String appServerPort;
	
	@Value("${server.servlet.context-path}")
	protected String contextPath;
	
	@Value("${web-security-core.url}")
	protected String commonWebSecurityCoreUrl;
	
}
