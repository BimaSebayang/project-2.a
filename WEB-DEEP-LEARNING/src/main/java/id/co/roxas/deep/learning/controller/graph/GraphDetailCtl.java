package id.co.roxas.deep.learning.controller.graph;

import java.util.Date;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.roxas.common.bean.graph.Edge;
import id.co.roxas.common.bean.graph.GraphBean;
import id.co.roxas.common.bean.graph.Vertex;
import id.co.roxas.common.bean.response.WsResponse;
import id.co.roxas.common.bean.response.WsResponseList;
import id.co.roxas.deep.learning.CommonConnector;
import id.co.roxas.deep.learning.inteligence.structureData.Graph;
import id.co.roxas.deep.learning.inteligence.structureData.Path;

@RestController
@RequestMapping("/graph-detail-ctl")
public class GraphDetailCtl extends CommonConnector {

	@PostMapping("/generate")
	public WsResponse<Graph> generateGraph(@RequestBody GraphBean bean) {
		Graph graph = new Graph();
		if (bean != null && bean.getVertices() != null) {
			for (Vertex vertex : bean.getVertices()) {
				graph.addVertex(vertex.getLabel());
			}
		}

		if (bean != null && bean.getEdges() != null) {
			for (Edge edge : bean.getEdges()) {
				graph.addEdge(edge.getLabelFrom(), edge.getLabelTo());
			}
		}

		return new WsResponse<Graph>(new Date(), "Generate Done", 200, graph);
	}

	@PostMapping("/all-shortest-path/{from}/{to}")
	public WsResponseList<Path> getAllShortestPath(@PathVariable("from") String from, @PathVariable("to") String to,
			@RequestBody Graph graph) {
		return new WsResponseList<>(new Date(), "Retrieve Success", 200, graph.getSorthestPath(from, to));
	}

	@PostMapping("/add-vertex/{vertex}")
	public WsResponse<Graph> addVertex(@PathVariable("vertex") String vertex, @RequestBody Graph graph) {
		graph.addVertex(vertex);
		return new WsResponse<Graph>(new Date(), "Generate Done", 200, graph);
	}

	@PostMapping("/add-edge/{vertex-from}/{vertex-to}")
	public WsResponse<Graph> addEdge(@PathVariable("vertex-from") String vertexFrom,
			@PathVariable("vertex-to") String vertexTo, @RequestBody Graph graph) {
		graph.addEdge(vertexFrom, vertexTo);

		return new WsResponse<Graph>(new Date(), "Generate Done", 200, graph);
	}

	@PostMapping("/shortest-path/{from}/{to}")
	public WsResponse<Integer> shortestPath(@PathVariable("from") String from, @PathVariable("to") String to,
			@RequestBody Graph graph) {
		return new WsResponse<>(new Date(), "Retrieve Success", 200, graph.sorthestPath(from, to));
	}

	@PostMapping("/is-two-vertices-connected/{from}/{to}")
	public WsResponse<Boolean> isTwoVerticesIsConnected(@PathVariable("from") String from,
			@PathVariable("to") String to, @RequestBody Graph graph) {
		return new WsResponse<>(new Date(), "Retrieve Success", 200, graph.isTwoVerticesConnected(from, to));
	}
	
	@PostMapping("/get-path/{from}/{to}/{degree}")
	public WsResponseList<Path> getPathFromToPath2VerticesWithinDegree(@PathVariable("from") String from,
			@PathVariable("to") String to,
			@PathVariable("degree") Integer degree, @RequestBody Graph graph) {
		return new WsResponseList<>(new Date(), "Retrieve Success", 200, 
				graph.getAllPossible2VerticesPathInNDegree(from, to, degree));
	}
	
	@PostMapping("/get-path/{label}/{degree}")
	public WsResponseList<Path> getPathAdjecentInPath(@PathVariable("label") String label,
			@PathVariable("degree") Integer degree, @RequestBody Graph graph) {
		return new WsResponseList<>(new Date(), "Retrieve Success", 200, 
				graph.getAllAdjecentVerticesInNDegree(label, degree));
	}
}
