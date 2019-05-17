import * as Matrix from 'mathjs';

export abstract class Vertex {
	public abstract getMatrix(): number[][];
}

export class Vertex2D extends Vertex {
	protected x: number;
	protected y: number;

	public constructor(x: number, y: number) {
		super();

		this.x = x;
		this.y = y;
	}

	public getMatrix(): number[][] {
		return [
			[this.getX()],
			[this.getY()],
			[1]
		];
	}

	public getX(): number {
		return this.x;
	}

	public getY(): number {
		return this.y;
	}

	public add(vector: Vertex2D): void {
		this.x += vector.getX();
		this.y += vector.getY();
	}

	public mult(matrix: number[][]): void {
		const result: number[][] = Matrix.multiply(matrix, this.getMatrix()) as number[][];
		this.x = result[0][0];
		this.y = result[1][0];
	}

	public copy(): Vertex2D {
		return new Vertex2D(this.getX(), this.getY());
	}
}

export class Vertex3D extends Vertex {
	protected x: number;
	protected y: number;
	protected z: number;

	public constructor(x: number, y: number, z: number) {
		super();

		this.x = x;
		this.y = y;
		this.z = z;
	}

	public getMatrix(): number[][] {
		return [
			[this.getX()],
			[this.getY()],
			[this.getZ()],
			[1]
		];
	}

	public getX(): number {
		return this.x;
	}

	public getY(): number {
		return this.y;
	}

	public getZ(): number {
		return this.z;
	}

	public add(vector: Vertex3D): void {
		this.x += vector.getX();
		this.y += vector.getY();
		this.z += vector.getZ();
	}

	public mult(matrix: number[][]): void {
		const result: number[][] = Matrix.multiply(matrix, this.getMatrix()) as number[][];
		this.x = result[0][0];
		this.y = result[1][0];
		this.z = result[2][0];
	}

	public copy(): Vertex3D {
		return new Vertex3D(this.getX(), this.getY(), this.getZ());
	}
}
