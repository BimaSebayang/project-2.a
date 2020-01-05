package id.co.roxas.deep.learning.inteligence.findPathInMazeV2;

import java.awt.Adjustable;
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

import com.google.gson.Gson;

public class PathFinderLogic extends MazeV2 {
	public List<AdvPath2D> advPath2Ds;
	
	public PathFinderLogic(int width, int height, Integer[]... blockers) {
		super(width, height, blockers);
	}

	@Override
	public void remindPath(int x, int y) {

	}

	public List<Path2D> lastMove(List<AdvPath2D> lust) {
		List<Path2D> d2 = new ArrayList<>();
		for (AdvPath2D path2d : lust) {
			Path2D temp = path2d.getPaths().lastElement();
			Path2D p2d = new Path2D(temp.getX(),temp.getY());
			d2.add(p2d);
		}
		return d2;
	}
	
	@Override
	public void remindAdvPath(int x, int y) {
		if (advPath2Ds != null) {
			List<AdvPath2D> temp = new ArrayList<>();
			temp.addAll(advPath2Ds);
			for (AdvPath2D advPath2D : temp) {
				
				paths =  new Stack<>();
				paths = advPath2D.getPaths();
				boolean isValid = true;
				//for (Path2D path : paths) {   
                     if(valueBlock(x, y)!=ACCESSABLE) {
                         isValid = false;
                    	 break;
                     }
				//}
			
                  
                     
				if(isValid) {
				paths.add(new Path2D(x, y));
				AdvPath2D path2d = new AdvPath2D(paths);
				advPath2Ds.add(path2d);
				}
			}
		}
		else {
			paths.add(new Path2D(x, y));
			AdvPath2D path2d = new AdvPath2D(paths);
			 if(valueBlock(x, y)!=ACCESSABLE) {
                return;
             }
			advPath2Ds = new ArrayList<>();
			advPath2Ds.add(path2d);
		}
	}

	public List<AdvPath2D> getAll(){
		return advPath2Ds;
	}
	
	@Override
	public void removeAdvPaths() {
		advPath2Ds.clear();
	}

}
