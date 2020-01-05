package id.co.roxas.deep.learning.config;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;
import java.util.UUID;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.apache.logging.log4j.util.Strings;
import org.springframework.web.bind.annotation.RequestMethod;

public class AuthenticationStringEncoder {
	
	public static String PERIODIC_ENCODE = "";
	
	public static String getSecretHmacEncriptor(String secretKey,
		   String secretId, RequestMethod secretMethod, String secretEndpoints,String secretUrl, String secretRequestbody) {
		   try {
			     Long porcessStart =  System.currentTimeMillis();
			   
			   
			     String secret = secretKey;
			     String nonce = getSecretNonce();
			     String timestamp =  getSecretUnixNowTimeStamp()+"";
			     System.err.println("timestamp pertama " + timestamp);
			     PERIODIC_ENCODE = PERIODIC_ENCODE + "timestamp pertama " + timestamp 
			    		 + "\n";
			     String id = secretId;
			     
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " secret id = " + secret + " \n ";
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " nonce = " + nonce + " \n ";
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " id = " + id + " \n ";
			     
			     String message = id
			    		           + getSecretHttpMethod(secretMethod)
			                       + getSecretUrl(secretEndpoints,secretUrl)
			    		           + timestamp
			    		           + nonce
			    		           + getSecretRequestBody(secretRequestbody);
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " nilai yang siap di HMAC dengan IP Key untuk dapatkan SignatureBase64: " + message + "\n" + "\n"; 
			     Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
			     SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
			     sha256_HMAC.init(secret_key);

			     String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(message.getBytes()));
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " nilai didapat setelah hash : SignatureBase64 = " + hash+"\n" + "\n";
			     System.err.println("timestamp kedua " + timestamp);
			     PERIODIC_ENCODE = PERIODIC_ENCODE + "timestamp kedua " + timestamp + "\n"+"\n";
			     hash = id+":"+hash+":"+nonce+":"+timestamp;
			     
			     PERIODIC_ENCODE = PERIODIC_ENCODE + 
			    		 "nilai yang siap di encode untuk dapatkan AuthString " + hash  + "\n"+"\n";
			     
			     String resultHash = Base64.encodeBase64String(hash.getBytes());
			     
			     PERIODIC_ENCODE = PERIODIC_ENCODE + 
			    		 "resultHash " + resultHash  + "\n"+"\n";
			     
			     
			     
			     Float processEncodeTime = (System.currentTimeMillis()-porcessStart)/1000F;
			     PERIODIC_ENCODE = PERIODIC_ENCODE + " encode takes time : " + processEncodeTime +" seconds";
			     return resultHash;
			    }
			    catch (Exception e){
			     System.err.println("Error kenapa yah --> ");
			     e.printStackTrace();
			     return null;
			    }
	}  
	
	private static String getSecretUrl(String endPoints,String url) throws UnsupportedEncodingException {
		String finalUrl = URLEncoder.encode(endPoints+url, StandardCharsets.UTF_8.toString()).toLowerCase(); 
		PERIODIC_ENCODE = PERIODIC_ENCODE + "{ \"url\" : " +endPoints+url+ " \n " 
		         + " \"final url\" : " + finalUrl + " }"  + " \n " + " \n ";
		System.err.println("{ \"url\" : " +endPoints+url+ " \n " 
		         + " \"final url\" : " + finalUrl + " }");
		return finalUrl;
	}
	
	private static String getSecretHttpMethod(RequestMethod method) {
		String finalMethod = method.name().toUpperCase();
		PERIODIC_ENCODE = PERIODIC_ENCODE + "{ \"method\" : " +method.name()+ " \n " 
		         + " \"final method\" : " + finalMethod + " }" + " \n " + " \n "; 
		 System.err.println("{ \"method\" : " +method.name()+ " \n " 
			         + " \"final method\" : " + finalMethod + " }");
		return finalMethod;
	}
	
	private static String getSecretNonce() {
		UUID uuid = UUID.randomUUID();
		String finalUuid = uuid.toString().replace("-", "");
		System.err.println("{\"finalUuid\" : " + finalUuid);
		return finalUuid;
	}
	
	private static Long getSecretUnixNowTimeStamp() {
		
		 System.err.println(System.currentTimeMillis()/1000L);
		 Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		 System.err.println(timestamp);
		 
		long unixTime = System.currentTimeMillis() / 1000L;
		System.err.println("{\"unixTime\" : " + unixTime+ ", \"date : \" "+timestamp+"}");
		 PERIODIC_ENCODE = PERIODIC_ENCODE + 
				 "{\"unixTime\" : " + unixTime+ ", \"date : \" "+timestamp+"}"
				 + " \n " + " \n ";
		return unixTime;
	}
	
	private static String getSecretRequestBody(String requestBody) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		if(Strings.isBlank(requestBody)) {
			String finalDigest = "nUVowAnSA6sQ4z6plToCZA==";
			
			PERIODIC_ENCODE = PERIODIC_ENCODE + "{ \"request body\" : " +requestBody+ " \n " 
			         + " \"final request body\" : " + finalDigest + " }"
			         + " \n "
			         + " \n ";
			
			 System.err.println("{ \"request body\" : " +requestBody+ " \n " 
			         + " \"final request body\" : " + finalDigest + " }");
			return finalDigest; 
		}
		String reString = requestBody;
		requestBody = removalUneededChar(requestBody, " ","\n","\r","\t");
	        MessageDigest m = MessageDigest.getInstance("MD5");
	        byte[] digest = m.digest(requestBody.getBytes("UTF-8"));
	        System.err.println("byte : " + digest);
	        String finalDigest =  Base64.encodeBase64String(digest);
	        PERIODIC_ENCODE = PERIODIC_ENCODE + "{ \"request body before \" :  " + reString
	        		+ " \n \"request body after remove unneeded char\" : " +requestBody+ " \n " 
	   	         + " \"final request body\" : " + finalDigest + " }"
	   	         + " \n "
	   	      + " \n ";
	        System.err.println("{ \"request body\" : " +requestBody+ " \n " 
	         + " \"final request body\" : " + finalDigest + " }");
		return finalDigest;
	}
	
	private static String removalUneededChar(String word,String... chars) {
		for (String ch : chars) {
			word = word.replaceAll(ch, "");
		}
		return word;
	}
}
