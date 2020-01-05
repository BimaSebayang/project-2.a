package id.co.roxas.deep.learning.inteligence.findPathInMazeV2;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public abstract class PathReminder {
	public static final int ACCESSABLE = 0;
	public static final int BLOCK = -1;
	public static final String BLOCK_STR = "block";
	public static final int OVER_MAZE = -2;
	public static final int VISITED = -3;
	
	
	public List<AdvPath2D> advPath2Ds;
	public Stack<Path2D> paths = new Stack<>(); 
	
	public void forgetPath() {
		paths.clear();
	}
	
	public abstract void remindPath(int x, int y);
	
	public abstract void remindAdvPath(int x, int y);
	
	public abstract void removeAdvPaths();

	public List<AdvPath2D> getAdvPath2Ds() {
		return advPath2Ds;
	}
	
	
	
	
}
