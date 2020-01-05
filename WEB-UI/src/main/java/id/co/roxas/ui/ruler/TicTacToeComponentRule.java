package id.co.roxas.ui.ruler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import id.co.roxas.ui.bean.TicTacToeWinner;

public class TicTacToeComponentRule {
	public static TicTacToeWinner isWinner(List<TicTacToeBoardRuler> list, int column, int row, int seed) {
		
		TicTacToeWinner winner = new TicTacToeWinner();
		if(isWinnerInColumn(list, column, row, seed)) {
			winner.setWinner(true);
			winner.setReason("Win In Column");
		}
		else if(isWinnerInDiagonal(list, column, row, seed)) {
			winner.setWinner(true);
			winner.setReason("Win In Diagonal");
		}
		else if(isWinnerInRow(list, column, row, seed)) {
			winner.setWinner(true);
			winner.setReason("Win In Row");
		}
	    System.err.println(new Gson().toJson(list) + " kemenangan " + new Gson().toJson(winner));
		return winner;
	}

	public static boolean isWinnerInRow(List<TicTacToeBoardRuler> list, int column, int row, int seed) {

		boolean win = false;

		for (int i = 1; i <= row; i++) {
			int brokenSeed = seed;
			List<Integer> coll = new ArrayList<>();
			for (TicTacToeBoardRuler ticTacToeBoard : list) {
				if (ticTacToeBoard.row == i) {
					coll.add(ticTacToeBoard.column);
				}
			}

			if (coll.size() >= seed) {
				Collections.sort(coll);
				for (int ch = 0; ch <= coll.size() - 1; ch++) {
					if (ch < coll.size() - 1) {
						int x1 = coll.get(ch) + 1;
						int x2 = coll.get(ch + 1);
						if (x1 == x2) {
							brokenSeed = brokenSeed - 1;
						}
					}
				}
			}

			// System.err.println("bs terakhir " + brokenSeed);
			if (brokenSeed == 1) {
				return true;
			}

		}

		return win;
	}

	public static boolean isWinnerInDiagonal(List<TicTacToeBoardRuler> list, int column, int row, int seed) {
	
		boolean win = false;
		if (list.size() >= seed) {
			List<List<TicTacToeBoardRuler>> listInList = generateCombinationTicTacToe(list, seed);

			for (List<TicTacToeBoardRuler> lil : listInList) {
			
				
				TicTacToeBoardRuler[] tbFromRow = lil.toArray(new TicTacToeBoardRuler[lil.size()]);
				TicTacToeBoardRuler[] tbFromColumn = lil.toArray(new TicTacToeBoardRuler[lil.size()]);
				
				//asc by row
				Arrays.sort(tbFromRow, TicTacToeBoardRuler.rowAsc);
			
				//asc by column
				Arrays.sort(tbFromColumn, TicTacToeBoardRuler.columnAsc);
				
				
				//diagonal slash -->tbFromRow
				int bsrowSlash = seed;
				int bscolumnSlash = seed;
				List<Integer> rowsSlash = new ArrayList<>();
				List<Integer> columnsSlash = new ArrayList<>();
				for (TicTacToeBoardRuler l2 : tbFromRow) {
					rowsSlash.add(l2.row);
					columnsSlash.add(l2.column);
				}

			
				
				for (int ch = 0; ch <= rowsSlash.size() - 1; ch++) {
					if (ch < rowsSlash.size() - 1) {
						int x1 = rowsSlash.get(ch) + 1;
						int x2 = rowsSlash.get(ch + 1);
						if (x1 == x2) {
							bsrowSlash = bsrowSlash - 1;
						}
					}
				}
				
				for (int ch = 0; ch <= columnsSlash.size() - 1; ch++) {
					if (ch < columnsSlash.size() - 1) {
						int x1 = columnsSlash.get(ch) - 1;
						int x2 = columnsSlash.get(ch + 1);
						if (x1 == x2) {
							bscolumnSlash = bscolumnSlash - 1;
						}
					}
				}

				if (bsrowSlash == 1 && bscolumnSlash == 1) {
					return true;
				}
				
				
				//diagonal backSlash -->tbFromColumn
				int bsrowBackSlash = seed;
				int bscolumnBackSlash = seed;
				List<Integer> rowsBackSlash = new ArrayList<>();
				List<Integer> columnsBackSlash = new ArrayList<>();
				for (TicTacToeBoardRuler l2 : tbFromColumn) {
					rowsBackSlash.add(l2.row);
					columnsBackSlash.add(l2.column);
				}

			
				
				for (int ch = 0; ch <= rowsBackSlash.size() - 1; ch++) {
					if (ch < rowsBackSlash.size() - 1) {
						int x1 = rowsBackSlash.get(ch) + 1;
						int x2 = rowsBackSlash.get(ch + 1);
						if (x1 == x2) {
							bsrowBackSlash = bsrowBackSlash - 1;
						}
					}
				}
				
				for (int ch = 0; ch <= columnsBackSlash.size() - 1; ch++) {
					if (ch < columnsBackSlash.size() - 1) {
						int x1 = columnsBackSlash.get(ch) + 1;
						int x2 = columnsBackSlash.get(ch + 1);
						if (x1 == x2) {
							bscolumnBackSlash = bscolumnBackSlash - 1;
						}
					}
				}

				if (bscolumnBackSlash == 1 && bsrowBackSlash == 1) {
					return true;
				}
				
				
				
				
				
			}
		}

		return win;
	}

	public static boolean isWinnerInColumn(List<TicTacToeBoardRuler> list, int column, int row, int seed) {

		boolean win = false;

		for (int i = 1; i <= column; i++) {
			int brokenSeed = seed;
			List<Integer> rows = new ArrayList<>();
			for (TicTacToeBoardRuler ticTacToeBoard : list) {
				if (ticTacToeBoard.column == i) {
					rows.add(ticTacToeBoard.row);
				}
			}

			if (rows.size() >= seed) {
				Collections.sort(rows);
				for (int ch = 0; ch <= rows.size() - 1; ch++) {
					if (ch < rows.size() - 1) {
						int x1 = rows.get(ch) + 1;
						int x2 = rows.get(ch + 1);
						if (x1 == x2) {
							brokenSeed = brokenSeed - 1;
						}
					}
				}
			}

			// System.err.println("bs terakhir " + brokenSeed);
			if (brokenSeed == 1) {
				return true;
			}

		}

		return win;
	}

	// Get All Combination...

	private static void helper(List<int[]> combinations, int data[], int start, int end, int index) {
		if (index == data.length) {
			int[] combination = data.clone();
			combinations.add(combination);
		} else if (start <= end) {
			data[index] = start;
			helper(combinations, data, start + 1, end, index + 1);
			helper(combinations, data, start + 1, end, index);
		}
	}

	private static List<int[]> generate(int n, int r) {
		List<int[]> combinations = new ArrayList<>();
		helper(combinations, new int[r], 0, n - 1, 0);
		return combinations;
	}

	public static List<List<TicTacToeBoardRuler>> generateCombinationTicTacToe(List<TicTacToeBoardRuler> list, int seed) {
		List<int[]> comb = generate(list.size(), seed);
		List<List<TicTacToeBoardRuler>> listlists = new ArrayList<>();
		for (int[] is : comb) {
			List<TicTacToeBoardRuler> lists = new ArrayList<>();
			for (int i : is) {
				lists.add(list.get(i));
			}
			listlists.add(lists);
		}
		return listlists;
	}

}
