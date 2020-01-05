package id.co.roxas.app.lib;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterCustom {
     public static void makeFileWriter(String fileDestination, String object) {
    	 try (FileWriter writer = new FileWriter
	    		   (fileDestination, true);
	    			 BufferedWriter bw = new BufferedWriter(writer)) {

	    			bw.write(object+"\n");

	    		} catch (IOException e) {
	    			System.err.format("IOException: %s%n", e);
	    		}
     }
}
