package id.co.roxas.deep.learning.inteligence.findPathInMazeV2;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

public abstract class MazeV2 extends PathReminder {

	private int width;
	private int height;
	private List<Integer[]> blockers = new ArrayList<>();

	public MazeV2(int width, int height, Integer[]... blockers) {
		this.width = width;
		this.height = height;
		for (Integer[] blocker : blockers) {
			this.blockers.add(blocker);
		}
			//System.err.println(new Gson().toJson(blockers));
	}

	public String[][] getMazeRunner() {
		String[][] mr = new String[height][width];

		
		
		if (blockers.size() > 0) {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					for (Integer[] blockade : blockers) {
						if (blockade[0]-1 == j && blockade[1]-1 == i) {
							mr[j][i] = BLOCK_STR;
							break;
						} else {
							mr[j][i] = "{" + (j + 1) + "," + (i + 1) + "}";
						}
					}

				}
			}
		}
		
		else {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					mr[j][i] = "{" + (j + 1) + "," + (i + 1) + "}";
				}
			}
		}

		return mr;
	}

	public int valueBlock(int x, int y) {
		x--;
		y--;
		if (x < 0 || y < 0) {
			return OVER_MAZE;
		} else if (x > height || y > width) {
			return OVER_MAZE;
		} else {
			String pathFinder = getMazeRunner()[x][y];
			if(pathFinder.equals(BLOCK_STR)) {
				return BLOCK;
			}else {
				return ACCESSABLE;
			}
		}

	}

	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}



}
