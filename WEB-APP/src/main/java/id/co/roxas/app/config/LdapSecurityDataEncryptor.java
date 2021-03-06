package id.co.roxas.app.config;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Base64;

public class LdapSecurityDataEncryptor {
	private static String LdapSalt = "gek123";
	private static String ldapSecret = "iknowwhatyoudidlastnigth";
	
	public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
		InputStreamReader br = new InputStreamReader(System.in);
		BufferedReader input = new BufferedReader(br);
		System.out.print("Input Password	: ");
		String pass = input.readLine();
		String encryptPassword = encrypt(LdapSalt, pass, ldapSecret);
		System.out.println("Encrypt Password = " + encryptPassword);
	}
	
	public static String finalEncrypt(String pass) throws NoSuchAlgorithmException {
		String encryptPassword = encrypt(LdapSalt, pass, ldapSecret);
		
		return encryptPassword;
	}
	
	private static String encrypt(String salt, String password, String secret) throws NoSuchAlgorithmException {
		if(salt.length() > 2) {
	        salt = salt.substring(0, 2);	
		}
		
		String md5_text = salt + secret;

		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(md5_text.getBytes());
		byte[] digest = md.digest();
		byte[] bsalt = salt.getBytes();
		byte[] pwd = password.getBytes();
		
	
		int length  = salt.length() + (digest.length * (pwd.length + 16) / 16);	
		
		int i = 0,p = 0,j = 0;
		byte[] result = new byte[99999];
		
		for(;i<bsalt.length;i++) {
			result[i] = bsalt[i];
		}
		for(;i<length;i++) {
			if(p < pwd.length) {
				result[i] = (byte) (pwd[p] ^ digest[(j%digest.length)]);
			}else {
				result[i] = (byte) (0^digest[(j%digest.length)]);
			}
			j++;
			p++;
		}
		String encPassword = Base64.getEncoder().withoutPadding().encodeToString(trim(result));
		return encPassword;
	}
	
	public static byte[] trim(byte[] bytes) {
		int i = bytes.length-1;
		while (i >= 0 && bytes[i] == 0) {
			i--;
		}
		return Arrays.copyOf(bytes, i+1);
	}
}
