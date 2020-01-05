package id.co.roxas.app.lib;

import id.co.roxas.app.tester.TesterV1;

public class PermutationV2 {

	public void getLoop1(int items) {
		for (int i = 0; i <= items; i++) {
			System.err.println(i);
		}
	}
	
	public static void main(String[] args) {
		getLoop8(9);
		
	}

	public static void getLoop8(int items) {
		for (int i8 = 0; i8 <= items; i8++) {
			for (int i7 = 0; i7 <= items; i7++) {
				for (int i6 = 0; i6 <= items; i6++) {
					for (int i5 = 0; i5 <= items; i5++) {
						for (int i4 = 0; i4 <= items; i4++) {
							for (int i3 = 0; i3 <= items; i3++) {
								for (int i2 = 0; i2 <= items; i2++) {
									for (int i1 = 0; i1 <= items; i1++) {
										String result = i1 + "" + i2 + "" + i3 + "" + i4+""+i5+""+i6+""+i7+""+i8;
										TesterV1 v1 = new TesterV1();
										v1.callAllUserLdap(result);
									}
								}
							}
						}
					}
				}
			}
		}
	}

}
