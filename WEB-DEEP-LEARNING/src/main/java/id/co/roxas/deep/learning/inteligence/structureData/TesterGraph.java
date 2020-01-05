package id.co.roxas.deep.learning.inteligence.structureData;

import com.google.gson.Gson;

import id.co.roxas.deep.learning.inteligence.graph.BiscuitGraph;

public class TesterGraph {
   
	
	public static void main(String[] args) {
	    //test3();
		biscuit();
	}
	
	static void biscuit() {
		int p = 100;
		int l = 100;
		
		
		
		BiscuitGraph biscuitGraph = new BiscuitGraph(p*l);
		
		biscuitGraph.BiscuitGraphInit(p, l);
		//System.err.println(biscuitGraph.matrix.PANJANG);
		System.err.println(biscuitGraph.shortestPath("1", p*l+""));
		
//      int lastVertex = p*l;
//		BiscuitGraph biscuitGraph = new BiscuitGraph(p, l);
//		System.err.println(biscuitGraph.getAllEdges().size());
//		biscuitGraph.removeEdge("1", "4");
//		biscuitGraph.removeEdge("2","5");
		//System.err.println(new Gson().toJson(biscuitGraph));
//		System.err.println(biscuitGraph.sorthestPath("1", lastVertex+""));
	}
	
	static void test3() {
		MatrixGraph matrixGraph = new MatrixGraph(4);
		matrixGraph.addVertex("v1");
		matrixGraph.addVertex("v2");
		matrixGraph.addVertex("v3");
		matrixGraph.addVertex("v4");
		//matrixGraph.addVertex("v4");
		matrixGraph.addEdge("v1", "v2");
		matrixGraph.addEdge("v2", "v3");
		matrixGraph.addEdge("v4", "v4");
		//matrixGraph.addEdge("v4", "v4");
		//System.err.println(new Gson().toJson(matrixGraph.matrixMultiplicationIndexN(3)));
		//System.err.println(new Gson().toJson(matrixGraph.matrix.matrix));
		//System.err.println(matrixGraph.isHamiltonian());
		//System.err.println(matrixGraph.isThereIsNPathBetween2Vertices("v1","v4", 3));
		//System.err.println(matrixGraph.shortestPath("v4", "v4"));
		System.out.println(matrixGraph.isConnectedGraph());
		//System.err.println(matrixGraph.isConnectedGraph());
	}
	
	static void test1() {
		  MatrixGraph graph = new MatrixGraph(6);
		    graph.addVertex("1");
		    graph.addVertex("2");
		    graph.addVertex("3");
		    graph.addVertex("4");
		    graph.addVertex("5");
		    graph.addVertex("6");
		    graph.addEdge("1", "3");
		    graph.addEdge("3", "2");
		    graph.addEdge("2", "1");
		    graph.addEdge("3", "5");
		    graph.addEdge("5", "3");
		    graph.addEdge("5", "4");
		    graph.addEdge("4", "6");
		    graph.addEdge("6", "5");
		   
		    System.err.println(new Gson().toJson(graph.matrix.matrix));
		   // System.err.println(graph.isHamiltonian());
		    //graph.addEdge("Maria", "Bob");
		 //   System.err.println(new Gson().toJson(graph.getAllEdges()));
	//System.err.println(new Gson().toJson(graph.getAllPossible2VerticesPathInNDegree("Rob", "Rob", 5)));
		  //  System.err.println(new Gson().toJson(graph.getAllDisconnectedInGraph()));
	//	System.err.println(new Gson().toJson(graph.getSorthestPath("1", "6")));
		    //System.err.println(graph.sorthestPath("Bob", "Alice"));
		   //System.err.println(new Gson().toJson(graph.getSorthestPath("Bob", "Alice")));		    
//		    System.err.println(graph.isAdjecent("Alice","Bob"));
		
//		Path path = new Path("4","2","3","4");
//		System.err.println("before  : " + new Gson().toJson(path.getPath()));
//		path.addPath("1","3");
//      System.err.println("after : " + new Gson().toJson(path.getPath())) ;
	}
	
}
