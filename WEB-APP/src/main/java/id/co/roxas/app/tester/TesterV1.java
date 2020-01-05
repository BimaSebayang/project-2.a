package id.co.roxas.app.tester;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Socket;
import java.net.SocketAddress;
import java.net.URL;
import java.net.URLConnection;
import java.net.UnknownHostException;
import java.nio.channels.Channel;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import java.util.List;

import id.co.roxas.app.bean.LdapUserMegaBean;
import id.co.roxas.app.config.HttpRestResponse;
import id.co.roxas.app.config.LdapSecurityDataEncryptor;
import id.co.roxas.app.controller.BaseCtl;
import id.co.roxas.app.lib.Combination;
import id.co.roxas.app.lib.FileWriterCustom;
import id.co.roxas.app.lib.Permutation;

public class TesterV1 extends BaseCtl{

	private static String TEMPORAL_FOLDER = "/home/iforce-86/Documents/Own_Project/Pentest3/";
	
	public static void main(String[] args) {
	    TesterV1 v1 = new TesterV1();
		v1.callAllUserLdap("16033000");
		//System.out.println(new Gson().toJson(lust));
//		for (List<Integer> list : lust) {
//			String hp = new String();
//			for (Integer list2 : list) {
//				hp = hp + list2;
//			}
//			System.err.println(hp);
//			FileWriterCustom.makeFileWriter(TEMPORAL_FOLDER+"7-comb.txt", hp);
//		}
		
		
	}
	
	public void readFile7Comb() throws IOException {
//		  FileReader fr = 
//			      new FileReader("/home/iforce-86/Documents/Own_Project/Pentest3/7-comb.txt"); 
//		  int i;
//		  int j = 1;
//		    while ((i=fr.read()) != -1) 
//		    {  
//		      String hp = (char) i +" ";	
//		      System.out.print("posisi ke " + j + " = " +hp );
//		     
//		    }
		
		 File file = 
			      new File("/home/iforce-86/Documents/Own_Project/Pentest3/7-comb.txt"); 
			    Scanner sc = new Scanner(file); 
			  
			    
			    	 while (sc.hasNextLine()) {
					      String hp = sc.nextLine()+5;
					      System.out.println(hp);
					      FileWriterCustom.makeFileWriter(TEMPORAL_FOLDER+"8-comb-v5.txt", hp);
					    }
				
			   
		
	}
	
	 public List<String> nowWichIpIsSame() throws FileNotFoundException, UnsupportedEncodingException {
		 int timeout=1000;
		 List<String> allActive = new ArrayList<>();
		
		   for (int i=1;i<255;i++){
		       String host="10.14.20" + "." + i;
		       try {
		    	   InetAddress address = InetAddress.getByName(host);
				if (address.isReachable(timeout)){
				       System.out.println(host + " is reachable" + " with host adress : " 
				                          + address.getHostAddress() 
				                          + " with host name " + address.getCanonicalHostName());
				       allActive.add(address.getHostAddress());
				       try (FileWriter writer = new FileWriter
				    		   ("/home/iforce-86/Documents/Own_Project/Pentest3/list-ip.txt", true);
				    			 BufferedWriter bw = new BufferedWriter(writer)) {

				    			bw.write(address.getHostAddress()+"\n");

				    		} catch (IOException e) {
				    			System.err.format("IOException: %s%n", e);
				    		}
				      
				   }
			} catch (UnknownHostException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   }
		  
		   return allActive;
	 }
	 
	 protected boolean isAlphaNumerik(String userName) {
	    	String regex = "^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$";
	    	 
	    	Pattern pattern = Pattern.compile(regex);
	    	Matcher matcher = pattern.matcher(userName);
	        return matcher.matches();
		    //return false;
	    }

	  public void callAllUserLdap(String userId) {
		 String url="http://10.14.18.177:5623/ldapService?operation=search&id="+userId;
		 HttpRestResponse response =  wsBody(url, null, HttpMethod.GET, null);
			LdapUserMegaBean ldapUserMegaBean = new LdapUserMegaBean();
			try {
				ldapUserMegaBean = mapperJsonToSingleDto(response.getBody(), LdapUserMegaBean.class);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			if(ldapUserMegaBean.getUid()!=null) {
			String gson = new Gson().toJson(ldapUserMegaBean);
			System.out.println("return value : " + gson);
			FileWriterCustom.makeFileWriter(TEMPORAL_FOLDER+"LIST_EXISTING_USER_LDAP.txt", gson+"\n");
			}
	 }
	 
	
	 
	 static String MASTER_LDAP_HOST = "http://10.14.18.177:5623";
	 static String MASTER_LDAP_OPERATION_PASSWORD = "verifyPassword";
	 protected Map<String, Object> validationPassword(String user, String userPassword){
			Map<String, Object> map = new HashMap<String, Object>();
			 BaseCtl admin = new BaseCtl(); 
			String uri = "";
			try {
				uri = MASTER_LDAP_HOST+"/ldapService?operation="+MASTER_LDAP_OPERATION_PASSWORD
						+"&id="+user+"&password="+LdapSecurityDataEncryptor.finalEncrypt(userPassword);
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
			HttpRestResponse httpRestResponse = wsBody
					(uri, null,HttpMethod.GET, null);
			
			map = mapperJsonToHashMap(httpRestResponse.getBody());
			return map;
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
	 

	
}
