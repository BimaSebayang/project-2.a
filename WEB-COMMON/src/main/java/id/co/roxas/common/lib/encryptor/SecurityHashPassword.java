package id.co.roxas.common.lib.encryptor;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.Arrays;
import java.util.Base64;


public class SecurityHashPassword {

	private final static String KEY_OF_DESTINY = "twilightTown";
	private final static String KEY_OF_OBLIVION = "destinyIsland";
	
	public static void main(String[] args) {
		try {
			String ps = "roxas";
			String hash = hashPasswordMantap(ps);
			System.err.println(hash);
			System.err.println("size : " + hash.toCharArray().length);
		    System.err.println("hash : " + ps.toCharArray().length);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static String hashPasswordMantap(String password) throws NoSuchAlgorithmException {
		return advanceEncrypt(password);
	}
	
	private static String advanceEncrypt(String password) throws NoSuchAlgorithmException {
		String hashFirstWall = encrypt(KEY_OF_DESTINY, "roxas", KEY_OF_OBLIVION);
		String hashLastWall = encrypt(KEY_OF_DESTINY, "sora", KEY_OF_OBLIVION);
	    String finalPass = hashFirstWall + "||" + password+ "||" + hashLastWall;
	    String encryptPassword = encrypt(KEY_OF_DESTINY, finalPass, KEY_OF_OBLIVION);
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
	
	private static byte[] trim(byte[] bytes) {
		int i = bytes.length-1;
		while (i >= 0 && bytes[i] == 0) {
			i--;
		}
		return Arrays.copyOf(bytes, i+1);
	}
}
