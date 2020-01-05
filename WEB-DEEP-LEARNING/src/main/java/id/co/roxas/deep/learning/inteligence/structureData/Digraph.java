package id.co.roxas.deep.learning.inteligence.structureData;

import java.util.List;

public class Digraph extends Graph{

	@Override
	public int isAdjecent(String label1, String label2) {
		if (adjVertices == null || adjVertices.size() == 0) {
			return ADJ_FALSE;
		}
		boolean comp = getAllEdges().stream()
				.anyMatch(edge -> (edge.getLabelX().equals(label1) && edge.getLabelY().equals(label2)));
		if (comp) {
			return ADJ_TRUE;
		}
		return ADJ_FALSE;
	}
	
	@Override
	public void addEdge(String label1, String label2) {
		adjVertices.get(label1).add(label2);
		EDGE_VOLUMES++;
	}

	@Override
	public void removeEdge(String label1, String label2) {
		List<String> eV1 = adjVertices.get(label1);
		if (eV1 != null) {
			eV1.remove(label2);
			EDGE_VOLUMES--;
		}
	}
}
