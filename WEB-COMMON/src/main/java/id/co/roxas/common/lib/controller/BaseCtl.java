package id.co.roxas.common.lib.controller;


import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Map;
import java.util.Map.Entry;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import id.co.roxas.common.bean.response.HttpRestResponse;
import id.co.roxas.common.bean.response.ParamQueryCustomLib;
import id.co.roxas.common.lib.ultimate.UltimateBase;

@Component
public class BaseCtl extends UltimateBase{
	
	//test connection with token security
	protected boolean isConnectWithSomeUrl(String url) {
		HttpRestResponse response = wsBody(url, null, HttpMethod.GET, null );
	    //System.err.println("response connectivity : " + new Gson().toJson(response.getStatus()));
		if(response.getStatus()==HttpStatus.REQUEST_TIMEOUT) {
			return false;
		}
		else {
			return true;
		}
	}
	
	
	protected static String parseDateStringToAnotherStringFormat(String date, String oldFormat, String newFormat) {
		DateFormat originalFormat = new SimpleDateFormat(oldFormat);
		DateFormat targetFormat = new SimpleDateFormat(newFormat);
		Date dateFormat = null;
		try {
			dateFormat = originalFormat.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
			return "UNPARSEABLE";
		}
		return targetFormat.format(dateFormat);
	}
	
	  protected CloseableHttpClient createAcceptSelfSignedCertificateClientII()
	            throws KeyManagementException, NoSuchAlgorithmException, KeyStoreException {

	        // use the TrustSelfSignedStrategy to allow Self Signed Certificates
	        SSLContext sslContext = SSLContextBuilder
	                .create()
	                .loadTrustMaterial(new TrustSelfSignedStrategy())
	                .build();

	        // we can optionally disable hostname verification. 
	        // if you don't want to further weaken the security, you don't have to include this.
	        HostnameVerifier allowAllHosts = new NoopHostnameVerifier();
	        
	        // create an SSL Socket Factory to use the SSLContext with the trust self signed certificate strategy
	        // and allow all hosts verifier.
	        SSLConnectionSocketFactory connectionFactory = new SSLConnectionSocketFactory(sslContext, allowAllHosts);
	        
	        // finally create the HttpClient using HttpClient factory methods and assign the ssl socket factory
	        return HttpClients
	                .custom()
	                .setSSLSocketFactory(connectionFactory)
	                .build();
	    }
	
	  @SuppressWarnings("rawtypes")
		protected HttpRestResponse wsBodySSL(String url, Object body, HttpMethod method, Map<String, String> headerMap,
				ParamQueryCustomLib... paramQuery) {
			MultiValueMap<String, Object> header = new LinkedMultiValueMap<>();
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

			HttpComponentsClientHttpRequestFactory requestFactory =
			        new HttpComponentsClientHttpRequestFactory();
	       System.err.println("masuk ke sini brooo");
			try {
				requestFactory.setHttpClient(createAcceptSelfSignedCertificateClientII());
				  System.err.println("masuk ke sini brooo 2");
			} catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			HttpEntity httpEntity = new HttpEntity(body, headers);
			RestTemplate restTemplate = new RestTemplate(requestFactory);
			System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

			String resultApi = new String();
			try {
				System.err.println("masuk ke sistem try : " );
				ResponseEntity<String> responseEntity = 
						restTemplate.exchange(url.concat(paramBuilder.toString()), method,
						httpEntity, String.class);
				System.err.println("masuk get status code : " );
				System.err.println("status : " + responseEntity.getStatusCode());
				System.err.println("result api : " + responseEntity.getBody());
				System.err.println("masuk get status body : " );
				
				return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
			} catch (Exception exp) {
				if (exp.getMessage().contains("400")) {
					System.err.println("error 400");
					return new HttpRestResponse(HttpStatus.BAD_REQUEST, "{\"code\" : 400, \"reason\" : \"Unsupported Grant Type\"}") ;
				} 
				else if (exp.getMessage().contains("401")) {
					System.err.println("error 401");
					return new HttpRestResponse(HttpStatus.BAD_REQUEST, "{\"code\" : 401, \"reason\" : \"Bad Credentials\"}") ;
				} 
				else if (exp.getMessage().contains("Connection refused")) {
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
	protected HttpRestResponse wsBody(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {
		MultiValueMap<String, Object> header = new LinkedMultiValueMap<>();
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

		HttpComponentsClientHttpRequestFactory requestFactory =
		        new HttpComponentsClientHttpRequestFactory();
       System.err.println("masuk ke sini brooo");
		try {
			requestFactory.setHttpClient(createAcceptSelfSignedCertificateClientII());
			  System.err.println("masuk ke sini brooo 2");
		} catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		HttpEntity httpEntity = new HttpEntity(body, headers);
		RestTemplate restTemplate = new RestTemplate(requestFactory);
		System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

		String resultApi = new String();
		try {
			System.err.println("masuk ke sistem try : " );
			ResponseEntity<String> responseEntity = 
					restTemplate.exchange(url.concat(paramBuilder.toString()), method,
					httpEntity, String.class);
			System.err.println("masuk get status code : " );
			System.err.println("status : " + responseEntity.getStatusCode());
			System.err.println("result api : " + responseEntity.getBody());
			System.err.println("masuk get status body : " );
			return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
		} catch (HttpClientErrorException exp) {
			if (exp.getMessage().contains("400")) {
				System.err.println("error 400");
				return new HttpRestResponse(HttpStatus.BAD_REQUEST,
						   "{\"code\" : 400, \"reason\" : "+exp.getResponseBodyAsString()+"}") ;
			} 
			else if (exp.getMessage().contains("401")) {
				System.err.println("error 401");
				return new HttpRestResponse(HttpStatus.BAD_REQUEST, "{\"code\" : 401, \"reason\" : "+exp.getResponseBodyAsString()+"}") ;
			} 
			else if (exp.getMessage().contains("Connection refused")) {
				System.err.println("Connection refused");
				return new HttpRestResponse(HttpStatus.REQUEST_TIMEOUT,
						"{\"code\" : 501, \"reason\" : \"Connection Refused For URL :"+ url +" \"}");
			} else {
				System.err.println("exp said: " + exp.getMessage());
				System.err.println("error unidentified");
				return new HttpRestResponse(HttpStatus.NOT_EXTENDED, 
						"{\"code\" : 500, \"reason\" : \"Internal Server Error For URL : "+url+" \"}");
			}
		}
	}
	
	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBodyStressTest(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {
		MultiValueMap<String, Object> header = new LinkedMultiValueMap<>();
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

		return httpRestResponseCustomStressTest(url, method);
	}
	
	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBodyEsbn(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {
		MultiValueMap<String, Object> header = new LinkedMultiValueMap<>();
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

		HttpComponentsClientHttpRequestFactory requestFactory =
		        new HttpComponentsClientHttpRequestFactory();
       System.err.println("masuk ke sini brooo");
		try {
			requestFactory.setHttpClient(createAcceptSelfSignedCertificateClientII());
			  System.err.println("masuk ke sini brooo 2");
		} catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		HttpEntity httpEntity = new HttpEntity(body, headers);
		RestTemplate restTemplate = new RestTemplate(requestFactory);
		System.err.println("url yang diberikan : " + url.concat(paramBuilder.toString()));

		String resultApi = new String();
		try {
			System.err.println("masuk ke sistem try : " );
			ResponseEntity<String> responseEntity = 
					restTemplate.exchange(url.concat(paramBuilder.toString()), method,
					httpEntity, String.class);
			System.err.println("masuk get status code : " );
			System.err.println("status : " + responseEntity.getStatusCode());
			System.err.println("result api : " + responseEntity.getBody());
			System.err.println("masuk get status body : " );
			return new HttpRestResponse(responseEntity.getStatusCode(), responseEntity.getBody());
		} catch (HttpClientErrorException exp) {
			System.err.println("exp : " + exp.getMessage());
			System.err.println("exp status: " + exp.getStatusCode());
			System.err.println("exp said: " + exp.getResponseBodyAsString());
			System.err.println("error unidentified");
			if(Strings.isEmpty(exp.getResponseBodyAsString())) {
			return new HttpRestResponse(HttpStatus.NOT_EXTENDED, "ESBN said : " +  exp.getMessage() + " " +exp.getResponseBodyAsString());
			}
			else {
				return new HttpRestResponse(HttpStatus.NOT_EXTENDED,exp.getResponseBodyAsString());	
			}
		}
	}
	
	@SuppressWarnings("rawtypes")
	protected HttpRestResponse wsBodyEsbnStressTest(String url, Object body, HttpMethod method, Map<String, String> headerMap,
			ParamQueryCustomLib... paramQuery) {
		MultiValueMap<String, Object> header = new LinkedMultiValueMap<>();
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

		String resultApi = new String();
		return httpRestResponseCustomStressTest(url, method);
		
	}
	
	//ini yang diganti untuk Bikin Stress Test --ini harus dihapus setelah stress test selesai
	private HttpRestResponse httpRestResponseCustomStressTest(String url,HttpMethod method) {
	       HttpRestResponse httpRestResponse = new HttpRestResponse(null, null);
	       return httpRestResponse;
	}

}
