package id.co.roxas.common.bean.graph;

import java.util.List;

public class GraphBean {
    private List<Vertex> vertices;
    private List<Edge> edges;
    
	public List<Vertex> getVertices() {
		return vertices;
	}
	public void setVertices(List<Vertex> vertices) {
		this.vertices = vertices;
	}
	public List<Edge> getEdges() {
		return edges;
	}
	public void setEdges(List<Edge> edges) {
		this.edges = edges;
	}
    
    
}
