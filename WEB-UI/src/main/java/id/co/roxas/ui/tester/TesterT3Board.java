package id.co.roxas.ui.tester;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;

import id.co.roxas.ui.ruler.TicTacToeBoardRuler;
import id.co.roxas.ui.ruler.TicTacToeComponentRule;

public class TesterT3Board {

	public static void main(String[] args) {
	 TicTacToeComponentRule t3comp = new TicTacToeComponentRule();
	    TicTacToeBoardRuler tb1 = new TicTacToeBoardRuler(1, 2);
	    TicTacToeBoardRuler tb2 = new TicTacToeBoardRuler(1, 2);
	    TicTacToeBoardRuler tb3 = new TicTacToeBoardRuler(2, 1);
	    System.err.println(tb1.isSameBoard(tb2));
	    System.err.println(tb1.isSameBoard(tb3));
//		 List<TicTacToeBoardRuler> boards = new ArrayList<>();
//		 boards.add(new TicTacToeBoardRuler(5,3));
//		 boards.add(new TicTacToeBoardRuler(3,5));
//		 boards.add(new TicTacToeBoardRuler(4,4));
//		 boards.add(new TicTacToeBoardRuler(4,2));
//		 boards.add(new TicTacToeBoardRuler(5,2));
//		 boards.add(new TicTacToeBoardRuler(5,5));
//		 boards.add(new TicTacToeBoardRuler(1,1));
//		 boards.add(new TicTacToeBoardRuler(1,2));
//		 
//		 TicTacToeBoardRuler[] tb = boards.toArray(new TicTacToeBoardRuler[boards.size()]);
//		 Arrays.sort(tb,TicTacToeBoardRuler.columnDesc);
//		 
//		// System.err.println(new Gson().toJson(tb));
//		 
//		 
//		 System.err.println(new Gson().toJson(t3comp.isWinner(boards, 5, 5, 3)));
		
		List<TicTacToeBoardRuler> rulers = new ArrayList<>();
		
		for(int i= 1;i<=3;i++) {
			for(int j = 1; j<=3; j++) {
				TicTacToeBoardRuler board = new TicTacToeBoardRuler(i, j);
				rulers.add(board);
			}
		}
		
		System.err.println(new Gson().toJson(t3comp.generateCombinationTicTacToe(rulers, 3)));
		
	}
	
	
	
	
}
