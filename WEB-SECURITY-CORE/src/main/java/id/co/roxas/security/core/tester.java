package id.co.roxas.security.core;

import com.google.gson.Gson;

public class tester {
    public static void main(String[] args) {
    	BeanAuthentication authentication = new BeanAuthentication();
    	authentication.setAccessFrom("MANAAJA");
    	authentication.setAccessType("TYPEAPAAJA");
    	authentication.setPassword("ahhahahah");
    	authentication.setUserId("ISDID");
    	System.out.println(new Gson().toJson(authentication));
    }
}
