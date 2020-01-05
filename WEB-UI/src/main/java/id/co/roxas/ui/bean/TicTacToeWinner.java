package id.co.roxas.ui.bean;

public class TicTacToeWinner {
      private boolean isWinner = false;
      private boolean isLose = false;
      private boolean isDraw = false;
      private String reason;
	public boolean isWinner() {
		return isWinner;
	}
	public void setWinner(boolean isWinner) {
		this.isWinner = isWinner;
	}
	public boolean isLose() {
		return isLose;
	}
	public void setLose(boolean isLose) {
		this.isLose = isLose;
	}
	public boolean isDraw() {
		return isDraw;
	}
	public void setDraw(boolean isDraw) {
		this.isDraw = isDraw;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
      
      
}
