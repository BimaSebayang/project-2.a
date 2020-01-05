package id.co.roxas.deep.learning.inteligence.findPathInMazeV2;


import com.google.gson.Gson;

public class Tester {

	public static void main(String[] args) {
//		Queue<Integer> test = new LinkedList<>();
//		test.add(0);
//		test.add(2);
//		test.add(3);
//		test.add(1);
//		test.add(2);
//		
//		System.err.println(new Gson().toJson(test.peek()));
//		
//		Stack<Integer> tp = new Stack<>();
//		tp.add(0);
//		tp.add(3);
//		tp.add(0);
//		tp.add(10);
//		tp.add(2);
//		System.err.println(new Gson().toJson(tp.lastElement()));
		 
   
   PathFinderLogic maze = new PathFinderLogic(5, 4, new Integer[]{1,2},new Integer[]{3,2},new Integer[]{3,5})  ;
	 for (String[] x : maze.getMazeRunner()) {
		for (String y : x) {
			System.err.print(y+" ");
		}
		System.err.println();
	}
  // System.err.println(maze.valueBlock(0, 1));
   maze.remindAdvPath(1, 1);
   maze.remindAdvPath(2, 1);
   System.err.println(new Gson().toJson(maze.advPath2Ds));
   
		 //		 
//		 for (String[] x : maze.getMazeRunner()) {
//			for (String y : x) {
//				System.err.print(y+" ");
//			}
//			System.err.println();
//		}
//		//maze.re
//		int x = 2;
//		int y = 2;
////
//		x--;
//		y--;
//		
//		 System.err.println(maze.valueBlock(x-1, y));
//		 System.err.println(maze.valueBlock(x, y-1));
//		 System.err.println(maze.valueBlock(x+1, y));
//		 System.err.println(maze.valueBlock(x, y+1));
		 
	}
	
	

}
