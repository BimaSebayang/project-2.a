package id.co.roxas.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import id.co.roxas.app.repository.UnauthorizedUrlHdr;
import id.co.roxas.app.repository.id.UnauthorizedUrlHdrId;

@Repository
public interface UnauthorizedUrlHdrDao extends JpaRepository<UnauthorizedUrlHdr, UnauthorizedUrlHdrId>{

	@Query(nativeQuery = true, value = " select top 1 a._id_No "
			+ " from _Unauthorized_Url_Hdr a where a._user_Id = ?1 order by a._id_No desc ")
	public Long getLastIdValue(String userId);
	
	@Query("select a from UnauthorizedUrlHdr a where a.id.userId = ?1 and a.urlLink = ?2")
	public List<UnauthorizedUrlHdr> getAllUrlHdr(String userId, String urlLink);
	
	@Query("select a from UnauthorizedUrlHdr a where a.id.userId = ?1 ")
	public List<UnauthorizedUrlHdr> getAllUrlHdrWithUserId(String userId);
	
}
