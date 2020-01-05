package id.co.roxas.deep.learning.inteligence.structureData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import id.co.roxas.deep.learning.library.Matrix;

public class MatrixGraph extends Graph {

	public Matrix matrix;
	public Map<String, Integer> valueRepresentative = new HashMap<>();

	public MatrixGraph(int vertex) {
		matrix = new Matrix(vertex, vertex);
		for (int i = 0; i < vertex; i++) {
			for (int j = 0; j < vertex; j++) {
                     matrix.matrix[i][j] = 0;
			}
		}

	}

	@Override
	public void addVertex(String label) {
		adjVertices.putIfAbsent(label, new ArrayList<>());
		VERTEX_VOLUMES++;
		valueRepresentative.put(label, VERTEX_VOLUMES);
	}

	@Override
	public void addEdge(String label1, String label2) {
		adjVertices.get(label1).add(label2);
		EDGE_VOLUMES++;
		matrix.setValueMatrix(valueRepresentative.get(label1) - 1, valueRepresentative.get(label2) - 1, 1);
		adjVertices.get(label2).add(label1);
		matrix.setValueMatrix(valueRepresentative.get(label2) - 1, valueRepresentative.get(label1) - 1, 1);
		EDGE_VOLUMES++;
	}
	
	@Override
	public void removeEdge(String label1, String label2) {
		List<String> eV1 = adjVertices.get(label1);
		List<String> eV2 = adjVertices.get(label2);
		if (eV1 != null) {
			eV1.remove(label2);
			EDGE_VOLUMES--;
		}
		if (eV2 != null) {
			eV2.remove(label1);
			EDGE_VOLUMES--;
		}
		matrix.setValueMatrix(valueRepresentative.get(label1) - 1, valueRepresentative.get(label2) - 1, 0);
		matrix.setValueMatrix(valueRepresentative.get(label2) - 1, valueRepresentative.get(label1) - 1, 0);
	}

	public Matrix matrixMultiplicationIndexN(int N) {
		Matrix matriks = new Matrix(matrix.matrix, VERTEX_VOLUMES, VERTEX_VOLUMES);
		for(int i=1;i<N;i++) {
			
			matriks = matriks.multiplication(matrix);
		}
		return matriks;
	}
	
	public boolean isThereIsNPathBetween2Vertices(String label1,String label2,int degree) {
		Matrix matrixRepresentative = matrixMultiplicationIndexN(degree);
		int x = valueRepresentative.get(label1)-1;
		int y = valueRepresentative.get(label2)-1;
		return matrixRepresentative.matrix[x][y]>0;
	}
	
	public Integer shortestPath(String label1, String label2) {
		int N = 1;
		while(N<=getAllEdges().size()) {
			if(isThereIsNPathBetween2Vertices(label1, label2, N)) {
				return N;
			}
			N++;
		}
		return null;
	}
	
	public boolean isConnectedGraph() {
		for (int i = 0; i < VERTEX_VOLUMES - 1; i++) {
			for (int j = i + 1; j < VERTEX_VOLUMES; j++) {
				if (shortestPath(getAllVertices().get(i),
						getAllVertices().get(j))==null) {
					System.err.println("vertex : " + getAllVertices().get(i) + " dan vertex " + getAllVertices().get(j));
					return false;
				}
			}
		}
		return true;
	}
	
	
}
