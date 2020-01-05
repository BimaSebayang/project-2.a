package id.co.roxas.app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.google.common.base.Strings;
import com.google.gson.Gson;
import id.co.roxas.app.config.HttpRestResponse;
import id.co.roxas.app.controller.BaseCtl;
import id.co.roxas.app.dao.UnauthorizedUrlHdrDao;
import id.co.roxas.app.repository.UnauthorizedUrlHdr;
import id.co.roxas.app.repository.id.UnauthorizedUrlHdrId;
import id.co.roxas.common.bean.auth.BasePrincipalUserSession;
import id.co.roxas.common.bean.auth.BeanAuthentication;
import id.co.roxas.common.bean.auth.UnauthorizedUrlHdrBean;
import id.co.roxas.common.bean.errorHandler.ErrorResponseHandler;

@Service
@Component
@Transactional
public class AuthenticationSvc extends BaseCtl{

	  @Autowired
	  private UnauthorizedUrlHdrDao unauthorizedUrlHdrDao;
	  
	  public ResponseEntity<Object> getAllUrlUnauthorized(String userId){
		  List<UnauthorizedUrlHdr> hdrs = unauthorizedUrlHdrDao.getAllUrlHdrWithUserId(userId);
          ErrorResponseHandler handler = new ErrorResponseHandler();
    	  	  
		  if(hdrs==null||hdrs.size()==0) {
			  handler.setCode(HttpStatus.CONFLICT.value());
    		  handler.setReason("data with user id =  "+ userId+ " not found, please make sure userId is exist or check upper/lower case userId" );
    		  return new ResponseEntity<>(handler,HttpStatus.CONFLICT);  
		  }
		  
		  List<UnauthorizedUrlHdrBean> hdrBeans = mapperFacade.mapAsList(hdrs, UnauthorizedUrlHdrBean.class); 
		  
		  return new ResponseEntity<Object>(hdrBeans, HttpStatus.OK);
	  }
	  
      public ResponseEntity<Object> saveUrl(UnauthorizedUrlHdrBean bean) {
    	  ErrorResponseHandler handler = new ErrorResponseHandler();
    	  
    	  if(unauthorizedUrlHdrDao.getAllUrlHdr(bean.getId().getUserId(), 
    			  bean.getUrlLink()).size()>0) {
    		  handler.setCode(HttpStatus.CONFLICT.value());
    		  handler.setReason("duplicate url link for user id " + bean.getId().getUserId());
    		  return new ResponseEntity<>(handler,HttpStatus.CONFLICT);
    	  }
    	  
    	  if(bean.getIsActive()!=1&&bean.getIsActive()!=0) {
    		  handler.setCode(HttpStatus.EXPECTATION_FAILED.value());
    		  handler.setReason("value isActive only in [0,1]");
    		  return new ResponseEntity<>(handler,HttpStatus.EXPECTATION_FAILED);
    	  }
    	  
    	  System.err.println("url link " + bean.getUrlLink().subSequence(0, 1) 
    			  + " real : " + bean.getUrlLink());
    	  
    	  if(!bean.getUrlLink().subSequence(0, 1).equals("/")) {
    		  handler.setCode(HttpStatus.EXPECTATION_FAILED.value());
    		  handler.setReason("value urlLink must start with character '/' ");
    		  return new ResponseEntity<>(handler,HttpStatus.EXPECTATION_FAILED);
    	  }
    	  
    	  UnauthorizedUrlHdr hdr = new UnauthorizedUrlHdr();
    	  UnauthorizedUrlHdrId hdrId = new UnauthorizedUrlHdrId();
    	  String userId = bean.getId().getUserId();
    	  Long lastValue = unauthorizedUrlHdrDao.getLastIdValue(userId);
    	  hdrId.setUserId(userId);
    	  if(lastValue==null) {
    		  hdrId.setIdNo(1L);
    	  }
    	  else {
    		  hdrId.setIdNo(lastValue+1);
    	  }
    	  hdr = mapperFacade.map(bean, UnauthorizedUrlHdr.class);
    	  hdr.setId(hdrId);
    	  
    	  unauthorizedUrlHdrDao.save(hdr);
    	  bean = mapperFacade.map(hdr, UnauthorizedUrlHdrBean.class);
    	  return new ResponseEntity<>(bean, HttpStatus.OK);
      }	  
	
      public BasePrincipalUserSession getUserSession(BeanAuthentication authentication) {
    	  
    	  HttpRestResponse response  = wsBody
    			  (webSecurityCoreUrl+"/request/authentication/v1", 
    					  authentication, HttpMethod.POST, null);
    	  
    	  BasePrincipalUserSession basePrincipalUserSession = null;
    	  
    	  
    	  try {
			basePrincipalUserSession = mapperJsonToSingleDto(response.getBody(), 
					  BasePrincipalUserSession.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	  
    	  return basePrincipalUserSession;
    	  
      }      	
	
}
