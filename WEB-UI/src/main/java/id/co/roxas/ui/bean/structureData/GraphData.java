package id.co.roxas.ui.bean.structureData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GraphData {
	private Map<String, List<String>> adjVertices = new HashMap<>();
	private int VERTEX_VOLUMES = 0;
	private int EDGE_VOLUMES = 0;
	private List<String> allVertices = new ArrayList<>();
	private List<EdgeData> allEdges = new ArrayList<>();
	private Boolean hamiltonian;
	private Boolean connectedGraph;
	
	
	
	public List<String> getAllVertices() {
		return allVertices;
	}
	public void setAllVertices(List<String> allVertices) {
		this.allVertices = allVertices;
	}
	public List<EdgeData> getAllEdges() {
		return allEdges;
	}
	public void setAllEdges(List<EdgeData> allEdges) {
		this.allEdges = allEdges;
	}
	public Boolean getHamiltonian() {
		return hamiltonian;
	}
	public void setHamiltonian(Boolean hamiltonian) {
		this.hamiltonian = hamiltonian;
	}
	public Boolean getConnectedGraph() {
		return connectedGraph;
	}
	public void setConnectedGraph(Boolean connectedGraph) {
		this.connectedGraph = connectedGraph;
	}
	public Map<String, List<String>> getAdjVertices() {
		return adjVertices;
	}
	public void setAdjVertices(Map<String, List<String>> adjVertices) {
		this.adjVertices = adjVertices;
	}
	public int getVERTEX_VOLUMES() {
		return VERTEX_VOLUMES;
	}
	public void setVERTEX_VOLUMES(int vERTEX_VOLUMES) {
		VERTEX_VOLUMES = vERTEX_VOLUMES;
	}
	public int getEDGE_VOLUMES() {
		return EDGE_VOLUMES;
	}
	public void setEDGE_VOLUMES(int eDGE_VOLUMES) {
		EDGE_VOLUMES = eDGE_VOLUMES;
	}
	
	
}

