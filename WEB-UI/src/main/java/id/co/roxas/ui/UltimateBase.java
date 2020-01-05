package id.co.roxas.ui;

import java.io.IOException;
import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import java.util.Map.Entry;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.google.gson.Gson;

import id.co.roxas.ui.bean.BaseResponse;
import id.co.roxas.ui.bean.CookiesAdvBean;
import id.co.roxas.ui.bean.response.WsResponse;
import id.co.roxas.ui.bean.response.WsResponseHashMap;
import id.co.roxas.ui.bean.response.WsResponseList;
import id.co.roxas.ui.encryptor.SecurityData;
import id.co.roxas.ui.security.HttpRestResponse;
import id.co.roxas.ui.security.ParamQueryCustomLib;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.impl.DefaultMapperFactory;

@Component
public class UltimateBase {
	@Value("${wdl.app-url}")
	protected String WDL_APP_URL;

	protected final String KEY_ACCESS = "KEY_ACCESS";

	protected MapperFacade mapperFacade = new DefaultMapperFactory.Builder().build().getMapperFacade();

	protected Cookie cookieEncryptor(String key, String value, HttpSession httpSession) {
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

	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBody(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		if (headerMap != null) {
			for (Entry<String, String> hm : headerMap.entrySet()) {
				headers.add(hm.getKey(), hm.getValue());
			}
		}
		StringBuilder paramBuilder = new StringBuilder();
		if (paramQuery != null) {
			if (paramQuery.length != 0) {
				paramBuilder.append("?");
				for (int i = 0; i < paramQuery.length; i++) {
					paramBuilder.append(paramQuery[i].getKey().concat("=".concat(paramQuery[i].getValue())));
					if (i < paramQuery.length - 1) {
						paramBuilder.append("&");
					}
				}
			}
		}
		System.err.println("body : " + new Gson().toJson(body));
		System.err.println("header : " + new Gson().toJson(headers));

		HttpEntity httpEntity = new HttpEntity(body, headers);
		RestTemplate restTemplate = new RestTemplate();
		System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

		try {
			ResponseEntity<String> responseEntity = restTemplate.exchange(url.concat(paramBuilder.toString()), method,
					httpEntity, String.class);
			System.err.println("status : " + responseEntity.getStatusCode());
			System.err.println("result api : " + responseEntity.getBody());
			return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
		} catch (Exception exp) {
			if (exp.getMessage().contains("400")) {
				System.err.println("error 400");

				return new HttpRestResponse(HttpStatus.BAD_REQUEST, "User atau Password Salah");
			} else if (exp.getMessage().contains("500")) {
				System.err.println("error 500");

				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
			} else if (exp.getMessage().contains("Connection refused")) {
				System.err.println("Connection refused");

				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR,
						"Tidak dapat berkomunikasi dengan service");
			} else {
				System.err.println("exp said: " + exp.getMessage());
				System.err.println("error unidentified");

				return new HttpRestResponse(HttpStatus.NOT_EXTENDED, "Cannot Identified Error Record");
			}
		}
	}

	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBodyToken(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {

		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		if (headerMap != null) {
			for (Entry<String, String> hm : headerMap.entrySet()) {
				headers.add(hm.getKey(), hm.getValue());
			}
		}
		StringBuilder paramBuilder = new StringBuilder();
		if (paramQuery != null) {
			if (paramQuery.length != 0) {
				paramBuilder.append("?");
				for (int i = 0; i < paramQuery.length; i++) {
					paramBuilder.append(paramQuery[i].getKey().concat("=".concat(paramQuery[i].getValue())));
					if (i < paramQuery.length - 1) {
						paramBuilder.append("&");
					}
				}
			}
		}
		System.err.println("body : " + new Gson().toJson(body));
		System.err.println("header : " + new Gson().toJson(headers));

		HttpEntity httpEntity = new HttpEntity(body, headers);
		RestTemplate restTemplate = new RestTemplate();
		System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

		try {
			ResponseEntity<String> responseEntity = restTemplate.exchange(url.concat(paramBuilder.toString()), method,
					httpEntity, String.class);
			System.err.println("status : " + responseEntity.getStatusCode());
			System.err.println("result api : " + responseEntity.getBody());
			return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
		} catch (Exception exp) {
			if (exp.getMessage().contains("400")) {
				System.err.println("error 400");
				return new HttpRestResponse(HttpStatus.BAD_REQUEST, "User atau Password Salah");
			} else if (exp.getMessage().contains("500")) {
				System.err.println("error 500");
				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
			} else if (exp.getMessage().contains("Connection refused")) {
				System.err.println("Connection refused");
				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR,
						"Tidak dapat berkomunikasi dengan service");
			} else {
				System.err.println("exp said: " + exp.getMessage());
				System.err.println("error unidentified");
				return new HttpRestResponse(HttpStatus.NOT_EXTENDED, "Cannot Identified Error Record");
			}
		}
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
	
	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBodyLogging(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {

		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		if (headerMap != null) {
			for (Entry<String, String> hm : headerMap.entrySet()) {
				headers.add(hm.getKey(), hm.getValue());
			}
		}
		StringBuilder paramBuilder = new StringBuilder();
		if (paramQuery != null) {
			if (paramQuery.length != 0) {
				paramBuilder.append("?");
				for (int i = 0; i < paramQuery.length; i++) {
					paramBuilder.append(paramQuery[i].getKey().concat("=".concat(paramQuery[i].getValue())));
					if (i < paramQuery.length - 1) {
						paramBuilder.append("&");
					}
				}
			}
		}
		System.err.println("body : " + new Gson().toJson(body));
		System.err.println("header : " + new Gson().toJson(headers));

		HttpEntity httpEntity = new HttpEntity(body, headers);
		RestTemplate restTemplate = new RestTemplate();
		System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

		try {
			ResponseEntity<String> responseEntity = restTemplate.exchange(url.concat(paramBuilder.toString()), method,
					httpEntity, String.class);
			System.err.println("status : " + responseEntity.getStatusCode());
			System.err.println("result api : " + responseEntity.getBody());
			return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
		} catch (Exception exp) {
			if (exp.getMessage().contains("400")) {
				System.err.println("error 400");
				return new HttpRestResponse(HttpStatus.BAD_REQUEST, "User atau Password Salah");
			} else if (exp.getMessage().contains("500")) {
				System.err.println("error 500");
				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
			} else if (exp.getMessage().contains("Connection refused")) {
				System.err.println("Connection refused");
				return new HttpRestResponse(HttpStatus.INTERNAL_SERVER_ERROR,
						"Tidak dapat berkomunikasi dengan service");
			} else {
				System.err.println("exp said: " + exp.getMessage());
				System.err.println("error unidentified");
				return new HttpRestResponse(HttpStatus.NOT_EXTENDED, "Cannot Identified Error Record");
			}
		}
	}

	private Map<String, Object> mapResultApi(String result) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Map<String, Object> finalMap = new HashMap<>();
		try {
			finalMap = mapper.readValue(result, new TypeReference<HashMap<String, Object>>() {
			});
		} catch (IOException e) {
			// TODO Auto-generated catch block
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

	private Map<String, Object> mapperJsonToHashMap(String result) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Map<String, Object> finalMap = new HashMap<>();
		try {
			finalMap = mapper.readValue(result, new TypeReference<HashMap<String, Object>>() {
			});
		} catch (Exception e) {
			e.printStackTrace();
			finalMap.put("error_method", e.getMessage());
		}
		return finalMap;
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

	protected String setObjectToString(Object object) {
		return new Gson().toJson(object);
	}

	private <T> T mapperJsonToSingleDto(String json, Class<T> clazz) throws Exception {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		om.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		om.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		return om.readValue(json, clazz);
	}

	
	
	private <T> T mapperHashmapToSingleDto(Map<String, Object> json, Class<T> clazz) throws Exception {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		om.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		om.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		return om.convertValue(json, clazz);
	}

	private <T> List<T> mapperJsonToListDto(String json, Class<T> clazz) throws Exception {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		om.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		om.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		TypeFactory t = TypeFactory.defaultInstance();
		List<T> list = om.readValue(json, t.constructCollectionType(ArrayList.class, clazz));
		return list;
	}

}
