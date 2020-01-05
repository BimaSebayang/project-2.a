package id.co.roxas.deep.learning.inteligence.structureData;

import java.util.List;
import java.util.Stack;

public class Path {
	Stack<String> path = new Stack<>();


	public Path(String... labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public Path(Path path) {
		path.getPath().stream().forEach(e -> path.addPath(e));
	}

	public Path(List<String> labels) {
		for (String label : labels) {
			path.add(label);
		}
	}

	public Path(Stack<String> labels) {
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
