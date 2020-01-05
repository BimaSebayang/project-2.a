package id.co.roxas.ui.bean.angular;

import java.util.Map;

public class AngularRestReturn<body,content> {
    private body body;
    private content content;
    private String url;
    private Map<String, String> header;
	
	
	public body getBody() {
		return body;
	}
	public void setBody(body body) {
		this.body = body;
	}
	public content getContent() {
		return content;
	}
	public void setContent(content content) {
		this.content = content;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Map<String, String> getHeader() {
		return header;
	}
	public void setHeader(Map<String, String> header) {
		this.header = header;
	}
    
    
}
