package id.co.roxas.app.repository;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import id.co.roxas.app.repository.id.UnauthorizedUrlHdrId;


@Entity
@Table(name="_Unauthorized_Url_Hdr")
public class UnauthorizedUrlHdr {
  
	@EmbeddedId
	private UnauthorizedUrlHdrId id;
	
	@Column(name="_url_Name", nullable = false)
	private String urlName;
	
	@Column(name="_url_Link", nullable = false)
	private String urlLink;
	
	@Column(name="_url_Description", nullable = false)
	private String urlDescription;
	
	@Column(name="_is_Active", nullable = false)
	private int isActive;

	public UnauthorizedUrlHdrId getId() {
		return id;
	}

	public void setId(UnauthorizedUrlHdrId id) {
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
