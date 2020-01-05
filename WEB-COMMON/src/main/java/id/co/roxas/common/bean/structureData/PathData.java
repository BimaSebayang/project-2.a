package id.co.roxas.common.bean.structureData;

import java.util.List;
import java.util.Stack;

public class PathData {
	Stack<String> path = new Stack<>();


	public PathData(String... labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public PathData(PathData path) {
		path.getPath().stream().forEach(e -> path.addPath(e));
	}

	public PathData(List<String> labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public PathData(Stack<String> labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public void addPath(String... labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public void addPath(List<String> labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public void addPath(Stack<String> labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public Stack<String> getPath() {
		return path;
	}

}
