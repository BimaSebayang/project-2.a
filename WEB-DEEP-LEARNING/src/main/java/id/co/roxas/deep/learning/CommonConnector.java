package id.co.roxas.deep.learning;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import id.co.roxas.common.lib.controller.BaseCtl;

@Component
public class CommonConnector extends BaseCtl{
	@Value("${server.port}")
	protected String serverPort;
	
	@Value("${server.servlet.context-path}")
	protected String contextPath;
	
	@Value("${web-security-core.url}")
	protected String webSecurityCoreUrl;
}
