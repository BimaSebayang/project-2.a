package id.co.roxas.deep.learning.inteligence.graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.Gson;

import id.co.roxas.deep.learning.inteligence.structureData.Graph;
import id.co.roxas.deep.learning.inteligence.structureData.MatrixGraph;

public class BiscuitGraph extends MatrixGraph{
    
	public BiscuitGraph(int vertex) {
		super(vertex);
	}

	private String caster(int i) {
		return Integer.toString(i);
	}
    /*
     *  n x n graph 
     */
	public void BiscuitGraphInit(int panjang, int lebar) {
	//	System.err.println("p*l : " + panjang*lebar + " : " + matrix.PANJANG*matrix.LEBAR);
		if(panjang*lebar!=matrix.LEBAR) {
			System.err.println("cannot identified value");
			return;
		}
		
		int counterVertex = 0;
		
		List< List<Integer>> maps = new ArrayList<>();
		for (int i = 1; i<=panjang; i++) {
			List<Integer> ints = new ArrayList<>();
			for(int j = 1; j<=lebar;j++) {
				
			   counterVertex++;
			   ints.add(counterVertex);
			   addVertex(caster(counterVertex));
			}
			maps.add(ints);
			
		}
		
		
		
		
		for (int i = 0; i < maps.size(); i++) {
			for (int j = 0; j< maps.get(i).size();j++) {
				if(i<maps.size()-1) {
					String labelx = caster(maps.get(i).get(j));
					String labely = caster(maps.get(i+1).get(j));
					//System.err.println("labelx " + labelx + " labely " + labely + " di i<maps.size()-1");
				    addEdge(labelx,labely);
				}
				if(j<maps.get(i).size()-1) {
					String labelx = caster(maps.get(i).get(j));
					String labely = caster(maps.get(i).get(j+1));
					//System.err.println("labelx " + labelx + " labely " + labely + " di j<maps.get(i).size()-1");
					addEdge(labelx, labely);
				}
			}
		}
		
//		for(int i = 1; i<=VERTEX_VOLUMES;i++) {
//			
//			if(i-1>0) {
//				addEdge(caster(i), caster(i-1));
//			}
//			
//			if(i+3<=VERTEX_VOLUMES) {
//				addEdge(caster(i), caster(i+3));
//			}
//			
//		}
		
	}
    
	
	
}
