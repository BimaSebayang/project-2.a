package id.co.roxas.ui;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import id.co.roxas.common.bean.auth.CookiesAdvBean;
import id.co.roxas.common.bean.response.BaseResponse;
import id.co.roxas.common.bean.response.WsResponse;
import id.co.roxas.common.bean.response.WsResponseHashMap;
import id.co.roxas.common.bean.response.WsResponseList;
import id.co.roxas.common.lib.controller.BaseCtl;
import id.co.roxas.common.lib.encryptor.SecurityData;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.impl.DefaultMapperFactory;

@Component
public class CommonConnector extends BaseCtl{

	@Value("${wdl.app-url}")
	protected String WDL_APP_URL;

	protected final String KEY_ACCESS = "KEY_ACCESS";

	protected MapperFacade mapperFacade = new DefaultMapperFactory.Builder().build().getMapperFacade();

	protected Date isInvalidTimeStamp(String sDate) {
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyyHH");
		Date date = null;
		try {
			date = sdf.parse(sDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return date;
	}

	protected Cookie getMyCookies(String cookie, HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cook : cookies) {
			if (cook.getValue().equals(cookie)) {
				return cook;
			}
		}
		return null;
	}

	protected ModelAndView pageActivation(HttpServletRequest request, HttpSession session,
			Authentication authentication, String keyAccess, String url, Map<String, Object> model,
			HttpServletResponse response) {
		response.addCookie(cookieEncryptor(KEY_ACCESS, keyAccess, session));
		return new ModelAndView(url, model);
	}

	protected String getUrlAccessing(HttpServletRequest request) {
		return request.getRequestURL().toString();
	}

	protected CookiesAdvBean decryptCookiesBean(String encryptCookies) {
		String dec = null;
		try {
			dec = new SecurityData().decrypt(encryptCookies);
			//System.err.println("hasil decrypt " + new SecurityData().decrypt(keyAccess));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if(dec==null) {
			return null;
		}
		
		CookiesAdvBean advBean = null;
		
		try {
			advBean =  mapperJsonToSingleDto(dec, CookiesAdvBean.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		if(advBean==null) {
			return null;
		}
		
		return advBean;
		
	}
	
	private <K, V> Map<K, V> mapperJsonToHashMapPart2(String result) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Map<K, V> finalMap = new HashMap<>();
		try {
			finalMap = mapper.readValue(result, new TypeReference<HashMap<K, V>>() {
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		return finalMap;
	}

	protected <T> WsResponse<T> mapperJsonToSingleResponse(String result, Class<T> clazz) throws Exception {
		WsResponse<T> responseT = new WsResponse<>();
		Map<String, Object> mapper = mapperJsonToHashMap(result);
		String resultResponse = new Gson().toJson(mapper.get("response"));
		BaseResponse baseResponse = mapperJsonToSingleDto(result, BaseResponse.class);
		responseT.setAccessedDate(baseResponse.getAccessedDate());
		responseT.setReasonCode(baseResponse.getReasonCode());
		responseT.setResponseCode(baseResponse.getResponseCode());
		responseT.setResponse(mapperJsonToSingleDto(resultResponse, clazz));
		return responseT;
	}

	protected <T> WsResponseList<T> mapperJsonToListResponse(String result, Class<T> clazz) throws Exception {
		WsResponseList<T> responseT = new WsResponseList<>();
		Map<String, Object> mapper = mapperJsonToHashMap(result);
		String resultResponse = new Gson().toJson(mapper.get("response"));
		BaseResponse baseResponse = mapperJsonToSingleDto(result, BaseResponse.class);
		responseT.setAccessedDate(baseResponse.getAccessedDate());
		responseT.setReasonCode(baseResponse.getReasonCode());
		responseT.setResponseCode(baseResponse.getResponseCode());
		responseT.setResponse(mapperJsonToListDto(resultResponse, clazz));
		return responseT;
	}

	protected <K, V> WsResponseHashMap<K, V> mapperJsonToMapResponse(String result) throws Exception {
		WsResponseHashMap<K, V> responseT = new WsResponseHashMap<>();
		Map<String, Object> mapper = mapperJsonToHashMap(result);
		String resultResponse = new Gson().toJson(mapper.get("response"));
		BaseResponse baseResponse = mapperJsonToSingleDto(result, BaseResponse.class);
		responseT.setAccessedDate(baseResponse.getAccessedDate());
		responseT.setReasonCode(baseResponse.getReasonCode());
		responseT.setResponseCode(baseResponse.getResponseCode());
		responseT.setResponse(mapperJsonToHashMapPart2(resultResponse));
		return responseT;
	}	
	public static Cookie cookieEncryptor(String key, String value, HttpSession httpSession) {
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyyHHmm");
		String sDate =  sdf.format(new Date());
		System.err.println("SDF Keluaran : " + sDate);
		CookiesAdvBean bean = new CookiesAdvBean();
		bean.setCookiesAccessTime(sDate);
		bean.setCookiesKey(key);
		UUID uuid = UUID.randomUUID();
		String finalUuid = uuid.toString().replace("-", "");
		bean.setCookiesUuid(finalUuid);
		bean.setCookiesValue(value);
		String cookiesEn = null;
		try {
			cookiesEn = new SecurityData().encrypt(new Gson().toJson(bean));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Cookie cookie = new Cookie(key, cookiesEn);
		cookie.setPath("/");
//		cookie.setPath("/");
//		cookie.setDomain("localhost");
		httpSession.setAttribute(key, value);
		return cookie;
	}

	
}
