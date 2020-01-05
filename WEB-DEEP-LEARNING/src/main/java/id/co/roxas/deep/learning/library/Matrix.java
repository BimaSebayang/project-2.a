package id.co.roxas.deep.learning.library;

import com.google.gson.Gson;

public class Matrix {
        
	public Integer[][] matrix;
	public Integer PANJANG;
	public Integer LEBAR;

	public Matrix() {
		
	}
	
	public Matrix(int p, int l) {
		matrix = new Integer[p][l];
		PANJANG = p;
		LEBAR = l;
	}

	public Matrix(Integer[][] matrix, int p, int l) {
		this.matrix =  matrix;
		PANJANG = p;
		LEBAR = l;
	}

	public void setValueMatrix(int p, int l, Integer value) {
		matrix[p][l] = value;
	}

	public void showMatrix() {
		for (Integer[] mat : matrix) {
			for (Integer m : mat) {
                 System.out.print(m+" ");
			}
			System.out.println();
		}
	}

	public Matrix add(Matrix matriks) {
		if (matriks == null) {
			System.err.println("notes : matriks cannot be null");
			return null;
		}

		if (matriks.LEBAR != LEBAR || matriks.PANJANG != PANJANG) {
			System.err.println("notes : dimension matriks is not equal");
			return null;
		}
		
		
		for (int i = 0; i < PANJANG; i++) {
			for (int j = 0; j < LEBAR; j++) {
				matrix[i][j] =  matrix[i][j]+ matriks.matrix[i][j];
			}
		}

		return new Matrix(matrix, PANJANG, LEBAR);
	}
	
	public Matrix substract(Matrix matriks) {
		if (matriks == null) {
			System.err.println("notes : matriks cannot be null");
			return null;
		}

		if (matriks.LEBAR != LEBAR || matriks.PANJANG != PANJANG) {
			System.err.println("notes : dimension matriks is not equal");
			return null;
		}
		
		
		for (int i = 0; i < PANJANG; i++) {
			for (int j = 0; j < LEBAR; j++) {
				matrix[i][j] =  matrix[i][j] - matriks.matrix[i][j];
			}
		}

		return new Matrix(matrix, PANJANG, LEBAR);
	}
	
	public Matrix multiplication(Matrix matriks) {
//		if (matriks == null) {
//			System.err.println("notes : matriks cannot be null");
//			return null;
//		}
//
//		if (matriks.PANJANG != LEBAR) {
//			System.err.println("notes : dimension matriks is not applied for multiplication");
//			return null;
//		}
		
		Integer[][] multMatrix = new Integer[PANJANG][matriks.LEBAR];
		
		for(int i = 0 ; i<PANJANG;i++) {
			for(int j=0; j<matriks.LEBAR;j++) {
				multMatrix[i][j] =0;
				for(int n=0; n<LEBAR;n++) {
					System.out.println("on process....");
					multMatrix[i][j] += matrix[i][n]*matriks.matrix[n][j];
				}
			}
		}
		
		return new Matrix(multMatrix, PANJANG, matriks.LEBAR);
	}

}
