package id.co.roxas.common.bean.auth;

public class UnauthorizedUrlHdrBean {
	private UnauthorizedUrlHdrIdBean id;
	private String urlName;
	private String urlLink;
	private String urlDescription;
	private int isActive;

	public UnauthorizedUrlHdrIdBean getId() {
		return id;
	}

	public void setId(UnauthorizedUrlHdrIdBean id) {
		this.id = id;
	}

	public String getUrlName() {
		return urlName;
	}

	public void setUrlName(String urlName) {
		this.urlName = urlName;
	}

	public String getUrlLink() {
		return urlLink;
	}

	public void setUrlLink(String urlLink) {
		this.urlLink = urlLink;
	}

	public String getUrlDescription() {
		return urlDescription;
	}

	public void setUrlDescription(String urlDescription) {
		this.urlDescription = urlDescription;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

}
