package id.co.roxas.ui.ruler;

import java.util.Comparator;
import java.util.List;

public class TicTacToeBoardRuler implements Comparable<TicTacToeBoardRuler> {
	public int column;
	public int row;

	public TicTacToeBoardRuler(int column, int row) {
		this.column = column;
		this.row = row;
	}
	
	public boolean isSameBoard(TicTacToeBoardRuler ruler) {
		return ruler.row==this.row && ruler.column == this.column;
	}
	
	public boolean isContainInList(List<TicTacToeBoardRuler> ruler) {
		for (TicTacToeBoardRuler r : ruler) {
			if(this.isSameBoard(r)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public int compareTo(TicTacToeBoardRuler o) {
		// TODO Auto-generated method stub
		return 0;
	}

	public static Comparator<TicTacToeBoardRuler> columnAsc = new Comparator<TicTacToeBoardRuler>() {
		public int compare(TicTacToeBoardRuler comp1, TicTacToeBoardRuler comp2) {
			Integer fruitName1 = comp1.column;
			Integer fruitName2 = comp2.column;
			return fruitName1.compareTo(fruitName2);
		}
	};
	
	public static Comparator<TicTacToeBoardRuler> columnDesc = new Comparator<TicTacToeBoardRuler>() {
		public int compare(TicTacToeBoardRuler comp1, TicTacToeBoardRuler comp2) {
			Integer fruitName1 = comp1.column;
			Integer fruitName2 = comp2.column;
			return fruitName2.compareTo(fruitName1);
		}
	};
	
	public static Comparator<TicTacToeBoardRuler> rowDesc = new Comparator<TicTacToeBoardRuler>() {
		public int compare(TicTacToeBoardRuler comp1, TicTacToeBoardRuler comp2) {
			Integer fruitName1 = comp1.row;
			Integer fruitName2 = comp2.row;
			return fruitName2.compareTo(fruitName1);
		}
	};
	
	public static Comparator<TicTacToeBoardRuler> rowAsc = new Comparator<TicTacToeBoardRuler>() {
		public int compare(TicTacToeBoardRuler comp1, TicTacToeBoardRuler comp2) {
			Integer fruitName1 = comp1.row;
			Integer fruitName2 = comp2.row;
			return fruitName1.compareTo(fruitName2);
		}
	};

}
