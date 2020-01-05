package id.co.roxas.ui.robot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import id.co.roxas.common.bean.tictactoe.*;
import id.co.roxas.ui.ruler.TicTacToeBoardRuler;
import id.co.roxas.ui.ruler.TicTacToeComponentRule;

public class MachineLearning {

	
	// untuk hanya mengambil keputusan jika user sudah akan menang
	public static TicTacToeBoardRuler getWhichBoardCondition1(TicTacToeRule rule, int column, int row, int seed) {

		TicTacToeBoardRuler boardChoosen = null;
		List<TicTacToeBoardRuler> boardRulersLawan = new ArrayList<>();
		List<TicTacToeBoardRuler> existingBoards = new ArrayList<>();
		for (List<TicTacToeBoard> listlist : rule.getListListTicTacToeBoard()) {
			for (TicTacToeBoard list : listlist) {
				TicTacToeBoardRuler existingBoard = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
				if (!list.getOwnerBoard().trim().equals("")) {
					existingBoards.add(existingBoard);
				}
				if (list.getOwnerBoard() != null && list.getOwnerBoard().equalsIgnoreCase("v1")) {
					TicTacToeBoardRuler boardRuler = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
					boardRulersLawan.add(boardRuler);
				}
			}
		}

		for (int i = 1; i <= column; i++) {
			for (int j = 1; j <= row; j++) {
				boolean continu = false;
				for (TicTacToeBoardRuler exist : existingBoards) {
					if (exist.column == i && exist.row == j) {
						continu = true;
						break;
					}
				}
				
				if(continu) {
					continue;
				}
				
				List<TicTacToeBoardRuler> boardRulersLawanTemp = new ArrayList<>();
				boardRulersLawanTemp.addAll(boardRulersLawan);
				TicTacToeBoardRuler boardChoosenTemp = new TicTacToeBoardRuler(i, j);
				boardRulersLawanTemp.add(boardChoosenTemp);
				if (TicTacToeComponentRule.isWinner(boardRulersLawanTemp, column, row, seed).isWinner()) {
					return boardChoosenTemp;
				} else {
					for (TicTacToeBoardRuler exist : existingBoards) {
						if (exist.column != boardChoosenTemp.column && exist.row != boardChoosenTemp.row) {
							boardChoosen = boardChoosenTemp;
						}
					}
				}
			}
		}

		return boardChoosen;
	}
	
	// untuk hanya mengambil keputusan AI untuk menang kondisi 1
	public static TicTacToeBoardRuler getWhichBoardCondition2(TicTacToeRule rule, int column, int row, int seed) {
		TicTacToeBoardRuler boardChoosen = null;
		List<TicTacToeBoardRuler> boardRulerOwn = new ArrayList<>();
		List<TicTacToeBoardRuler> existingBoards = new ArrayList<>();
		for (List<TicTacToeBoard> listlist : rule.getListListTicTacToeBoard()) {
			for (TicTacToeBoard list : listlist) {
				TicTacToeBoardRuler existingBoard = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
				if (!list.getOwnerBoard().trim().equals("")) {
					existingBoards.add(existingBoard);
				}
				if (list.getOwnerBoard() != null && list.getOwnerBoard().equalsIgnoreCase("v2")) {
					TicTacToeBoardRuler boardRuler = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
					boardRulerOwn.add(boardRuler);
				}
			}
		}

		for (int i = 1; i <= column; i++) {
			for (int j = 1; j <= row; j++) {
				boolean continu = false;
				for (TicTacToeBoardRuler exist : existingBoards) {
					if (exist.column == i && exist.row == j) {
						continu = true;
						break;
					}
				}
				
				if(continu) {
					continue;
				}
				
				List<TicTacToeBoardRuler> boardRulersLawanTemp = new ArrayList<>();
				boardRulersLawanTemp.addAll(boardRulerOwn);
				TicTacToeBoardRuler boardChoosenTemp = new TicTacToeBoardRuler(i, j);
				boardRulersLawanTemp.add(boardChoosenTemp);
				if (TicTacToeComponentRule.isWinner(boardRulersLawanTemp, column, row, seed).isWinner()) {
					return boardChoosenTemp;
				} else {
					for (TicTacToeBoardRuler exist : existingBoards) {
						if (exist.column != boardChoosenTemp.column && exist.row != boardChoosenTemp.row) {
							boardChoosen = boardChoosenTemp;
						}
					}
				}
			}
		}

		return boardChoosen;
	}
	
	    // untuk hanya mengambil keputusan AI untuk menang kondisi 2
	    //start
	 	public static TicTacToeBoardRuler getWhichBoardCondition3(TicTacToeRule rule, int column, int row, int seed) {
			
	 		Map<String, Object> decision1 = getWhichBoardCondition5(rule, column, row, seed);
	 		
//	 		if((boolean)decision1.get("isEnemyWin")) {
//	 			return (TicTacToeBoardRuler) decision1.get("board");
//	 		}
	 		
			List<TicTacToeBoardRuler> boardRulerOwn = new ArrayList<>();
			List<TicTacToeBoardRuler> boardRulerEnemy = new ArrayList<>();
			List<TicTacToeBoardRuler> existingBoards = new ArrayList<>();
			for (List<TicTacToeBoard> listlist : rule.getListListTicTacToeBoard()) {
				for (TicTacToeBoard list : listlist) {
					TicTacToeBoardRuler existingBoard = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
					if (!list.getOwnerBoard().trim().equals("")) {
						existingBoards.add(existingBoard);
					}
					if (list.getOwnerBoard() != null && list.getOwnerBoard().equalsIgnoreCase("v2")) {
						TicTacToeBoardRuler boardRuler = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
						boardRulerOwn.add(boardRuler);
					}
					if (list.getOwnerBoard() != null && list.getOwnerBoard().equalsIgnoreCase("v1")) {
						TicTacToeBoardRuler boardRuler = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
						boardRulerEnemy.add(boardRuler);
					}
				}
			}

			List<TicTacToeBoardRuler> rulers = new ArrayList<>();
			
			for(int i= 1;i<=3;i++) {
				for(int j = 1; j<=3; j++) {
					TicTacToeBoardRuler board = new TicTacToeBoardRuler(i, j);
					rulers.add(board);
				}
			}
			
			List<List<TicTacToeBoardRuler>> listOnList = new ArrayList<>();
			
			listOnList = TicTacToeComponentRule.generateCombinationTicTacToe(rulers, seed);
			
			
			TicTacToeBoardRuler choosenWillWin = null;
			
			for (List<TicTacToeBoardRuler> list : listOnList) {
				boolean isWinning = TicTacToeComponentRule.isWinner(list, column, row, seed).isWinner();
				if(isWinning) {
					int seedCounter = seed;
					    int container = 0;
						for (TicTacToeBoardRuler l : list) {
							if(l.isContainInList(boardRulerEnemy)) {
								container++;
							}
						}
						
						if(container==0) {
							System.err.println("container yang kosong adalah " + new Gson().toJson(list));
							for (TicTacToeBoardRuler l : list) {
								if(!l.isContainInList(boardRulerOwn)) {
									choosenWillWin = l;
								}
								else {
									seedCounter--;
								}
							}
							
							System.err.println("seedCounter : " + seedCounter);
							if(seedCounter<=1) {
								System.err.println("return dibagian a");
								return choosenWillWin;
							
							}
							
						}
					
				}
			}
			
			
				System.err.println("return dibagian b");
			return getWhichBoardCondition1(rule, column, row, seed);
			
		}
	 	
	 	
	 	public static Map<String, Object> getWhichBoardCondition5(TicTacToeRule rule, int column, int row, int seed) {

	 		Map<String, Object> map = new HashMap<String, Object>();
			TicTacToeBoardRuler boardChoosen = null;
			List<TicTacToeBoardRuler> boardRulersLawan = new ArrayList<>();
			List<TicTacToeBoardRuler> existingBoards = new ArrayList<>();
			for (List<TicTacToeBoard> listlist : rule.getListListTicTacToeBoard()) {
				for (TicTacToeBoard list : listlist) {
					TicTacToeBoardRuler existingBoard = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
					if (!list.getOwnerBoard().trim().equals("")) {
						existingBoards.add(existingBoard);
					}
					if (list.getOwnerBoard() != null && list.getOwnerBoard().equalsIgnoreCase("v1")) {
						TicTacToeBoardRuler boardRuler = new TicTacToeBoardRuler(list.getColumn(), list.getRow());
						boardRulersLawan.add(boardRuler);
					}
				}
			}

			for (int i = 1; i <= column; i++) {
				for (int j = 1; j <= row; j++) {
					boolean continu = false;
					for (TicTacToeBoardRuler exist : existingBoards) {
						if (exist.column == i && exist.row == j) {
							continu = true;
							break;
						}
					}
					
					if(continu) {
						continue;
					}
					
					List<TicTacToeBoardRuler> boardRulersLawanTemp = new ArrayList<>();
					boardRulersLawanTemp.addAll(boardRulersLawan);
					TicTacToeBoardRuler boardChoosenTemp = new TicTacToeBoardRuler(i, j);
					boardRulersLawanTemp.add(boardChoosenTemp);
					if (TicTacToeComponentRule.isWinner(boardRulersLawanTemp, column, row, seed).isWinner()) {
						map.put("isEnemyWin", true);
						map.put("board", boardChoosenTemp);
						return map;
					} else {
						for (TicTacToeBoardRuler exist : existingBoards) {
							if (exist.column != boardChoosenTemp.column && exist.row != boardChoosenTemp.row) {
								boardChoosen = boardChoosenTemp;
							}
						}
					}
				}
			}

			map.put("isEnemyWin", false);
			map.put("board", boardChoosen);
			return map;
		}
	 	
	 	//end
	 	
}
