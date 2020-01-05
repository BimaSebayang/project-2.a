package id.co.roxas.deep.learning.inteligence.structureData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Graph {
	public Map<String, List<String>> adjVertices = new HashMap<>();
	public static final int ADJ_TRUE = 1;
	public static final int ADJ_FALSE = 0;
	public int VERTEX_VOLUMES = 0;
	public int EDGE_VOLUMES = 0;

	public void addVertex(String label) {
		adjVertices.putIfAbsent(label, new ArrayList<>());
		VERTEX_VOLUMES++;
	}

	public void addEdge(String label1, String label2) {
		///if(adjVertices.get(label1))
		
		adjVertices.get(label1).add(label2);
		EDGE_VOLUMES++;
		
		if(!label1.equals(label2)) {
		adjVertices.get(label2).add(label1);
		EDGE_VOLUMES++;
		}
	}

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
	}

	public List<String> getAllVertices() {
		if (adjVertices == null || adjVertices.size() == 0) {
			return null;
		}
		List<String> getAllVertices = new ArrayList<>();
		adjVertices.keySet().stream().forEach(e -> getAllVertices.add(e));
		return getAllVertices;
	}

	public List<Edge> getAllEdges() {
		if (adjVertices == null || adjVertices.size() == 0) {
			return null;
		}

		List<Edge> getAllEdged = new ArrayList<>();

		getAllVertices().stream()
				.forEach(vertex -> adjVertices.get(vertex).stream().forEach(e -> getAllEdged.add(new Edge(vertex, e))));

		return getAllEdged;
	}

	public int isAdjecent(String label1, String label2) {
		if (isAdjecentInBoolean(label1, label2)) {
			return ADJ_TRUE;
		}
		return ADJ_FALSE;
	}

	public boolean isAdjecentInBoolean(String label1, String label2) {
		if (adjVertices == null || adjVertices.size() == 0) {
			return false;
		}

		boolean comp = getAllEdges().stream()
				.anyMatch(edge -> (edge.getLabelX().equals(label1) && edge.getLabelY().equals(label2))
						|| (edge.getLabelX().equals(label2) && edge.getLabelY().equals(label1)));

		return comp;
	}

	public List<Path> getAllAdjecentVerticesInNDegree(String label1, int degree) {
		List<Path> pathw = new ArrayList<>();
		int i = degree;
		while (i != 0) {
			if (i == degree) {
				List<String> edges = getAllEdges().stream().filter(e -> e.getLabelX().equals(label1))
						.map(e -> e.getLabelY()).collect(Collectors.toList());
				for (String edge : edges) {
					Path path = new Path(label1);
					path.addPath(edge);
					pathw.add(path);
				}
			} else {
				List<Path> paths = new ArrayList<>(pathw);
				pathw.clear();
				for (Path path : paths) {
					String labelX = path.getPath().lastElement();
					List<String> edges = getAllEdges().stream().filter(e -> e.getLabelX().equals(labelX))
							.map(e -> e.getLabelY()).collect(Collectors.toList());
					for (String edge : edges) {
						Path path2 = new Path(path.getPath());
						path2.addPath(edge);
						pathw.add(path2);
					}
				}
			}
			i--;
		}
		List<Path> getTruePath = pathw.stream().filter(e -> e.path.size() - 1 == degree).collect(Collectors.toList());

		return getTruePath;
	}

	public List<Path> getAllPossible2VerticesPathInNDegree(String label1, String label2, int degree) {
		List<Path> paths = getAllAdjecentVerticesInNDegree(label1, degree).stream()
				.filter(e -> e.getPath().lastElement().equals(label2)).collect(Collectors.toList());
		System.err.println("loading search " + label1 + " , " + label2 + " in degree " + degree);
		return paths;
	}

	
	public boolean isHamiltonian() {
		List<Path> paths = getAllPossible2VerticesPathInNDegree(getAllVertices().get(0), getAllVertices().get(0),
				VERTEX_VOLUMES);
		for (Path path : paths) {
			path.path.remove(path.path.size() - 1);
			if (isPathHaveUniqueVertex(path)) {
				return true;
			}
		}
		return false;
	}

	public Integer sorthestPath(String label1, String label2) {
		int i = 1;
		if (!isTwoVerticesConnected(label1, label2)) {
			return null;
		}
		while (getAllPossible2VerticesPathInNDegree(label1, label2, i).size() == 0) {
			i++;
		}

		return i;
	}

	public List<Path> getSorthestPath(String label1, String label2) {
		if (!isTwoVerticesConnected(label1, label2)) {
			return null;
		}

		int i = 1;
		while (getAllPossible2VerticesPathInNDegree(label1, label2, i).size() == 0) {
			i++;
		}
		return getAllPossible2VerticesPathInNDegree(label1, label2, i);
	}

	public boolean isConnectedGraph() {
		for (int i = 0; i < VERTEX_VOLUMES - 1; i++) {
			for (int j = i + 1; j < VERTEX_VOLUMES; j++) {
				if (!isTwoVerticesConnected(getAllVertices().get(i), getAllVertices().get(j))) {
					return false;
				}
			}
		}
		return true;
	}

	public boolean isTwoVerticesConnected(String label1, String label2) {
		int i = 1;
		while (getAllPossible2VerticesPathInNDegree(label1, label2, i).size() == 0) {
			i++;

			if (i > VERTEX_VOLUMES) {
				break;
			}
			// System.err.println(i);
		}

		if (i > VERTEX_VOLUMES) {
			return false;
		}

		return true;
	}

	public boolean isPathHaveUniqueVertex(Path path) {
		for (int i = 0; i < path.path.size() - 1; i++) {
			for (int j = i + 1; j < path.path.size(); j++) {
				if (path.path.get(i).equals(path.path.get(j))) {
					return false;
				}
			}
		}
		return true;
	}

}
