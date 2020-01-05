package id.co.roxas.ui.bean;

import java.util.List;

public class TicTacToeRule {
   
	public List<List<TicTacToeBoard>> listListTicTacToeBoard;
	public String ownerTurned;
	public boolean validMove;
	public String reasonInvalidMove;
	public List<List<TicTacToeBoard>> getListListTicTacToeBoard() {
		return listListTicTacToeBoard;
	}
	public void setListListTicTacToeBoard(List<List<TicTacToeBoard>> listListTicTacToeBoard) {
		this.listListTicTacToeBoard = listListTicTacToeBoard;
	}
	public String getOwnerTurned() {
		return ownerTurned;
	}
	public void setOwnerTurned(String ownerTurned) {
		this.ownerTurned = ownerTurned;
	}
	public boolean isValidMove() {
		return validMove;
	}
	public void setValidMove(boolean validMove) {
		this.validMove = validMove;
	}
	public String getReasonInvalidMove() {
		return reasonInvalidMove;
	}
	public void setReasonInvalidMove(String reasonInvalidMove) {
		this.reasonInvalidMove = reasonInvalidMove;
	}
	
	
}
