package id.co.roxas.app.repository.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@SuppressWarnings("serial")
@Embeddable
public class UnauthorizedUrlHdrId implements Serializable{
	
	@Column(name = "_user_Id")
	private String userId;
	
	@Column(name = "_id_No")
	private Long idNo;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Long getIdNo() {
		return idNo;
	}

	public void setIdNo(Long idNo) {
		this.idNo = idNo;
	}

	
	
	

}
