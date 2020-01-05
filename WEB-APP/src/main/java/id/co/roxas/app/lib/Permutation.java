package id.co.roxas.app.lib;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import com.google.gson.Gson;

public class Permutation {

	public static List<List<Integer>> generate(int allItem, int combinationNumber) {
		List<List<Integer>> lust = new ArrayList<>();
		for (int i = 1; i <= combinationNumber; i++) {
			helper(lust, allItem);
		}
		return lust;
	}

	private static void helper(List<List<Integer>> lust, int allItem) {

		List<List<Integer>> temp = new ArrayList<>(lust);
		lust.clear();

		if (temp.size() > 0) {
			for (List<Integer> is : temp) {
				for (int i = 0; i < allItem; i++) {
					List<Integer> is_ = new ArrayList<>();
					is_.addAll(is);
					is_.add(i);
					lust.add(is_);
				}
			}
		}

		else {
			for (int i = 0; i < allItem; i++) {
				List<Integer> first = new ArrayList<>();
				first.add(i);
				lust.add(first);
			}
		}

	}

}
