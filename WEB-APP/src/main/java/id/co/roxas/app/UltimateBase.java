package id.co.roxas.app;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.google.gson.Gson;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.impl.DefaultMapperFactory;

@Component
public class UltimateBase {
	@Value("${server.port}")
	protected String serverPort;
	
	@Value("${server.servlet.context-path}")
	protected String contextPath;
	
	@Value("${web-security-core.url}")
	protected String webSecurityCoreUrl;
	
	protected final static String SUFFICIENT_SAVE = "1";
	
	protected final static String INSUFFICIENT_SAVE = "0";
	
	protected MapperFacade mapperFacade = new DefaultMapperFactory.Builder().build().getMapperFacade();
	
	
    protected String dateInFormat(Date date,String format) {
		  SimpleDateFormat sdf = new SimpleDateFormat(format);
		  return sdf.format(date);
	}    
	

	protected Map<String, Object> mapResultApi(String result) {
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

	protected Map<String, Object> mapperJsonToHashMap(String result) {
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

	protected String setObjectToString(Object object) {
		return new Gson().toJson(object);
	}

	protected <T> T mapperJsonToSingleDto(String json, Class<T> clazz) throws Exception {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		om.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		om.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		return om.readValue(json, clazz);
	}
	
	protected <T> T mapperHashmapToSingleDto(Map<String, Object> json, Class<T> clazz) throws Exception {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
		om.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		om.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		return om.convertValue(json, clazz);	
		}

	protected <T> List<T> mapperJsonToListDto(String json, Class<T> clazz) throws Exception {
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
