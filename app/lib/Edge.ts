import { Vertex } from './Vertex';

export class Edge {
	private start: Vertex;
	private end: Vertex;

	public constructor(start: Vertex, end: Vertex) {
		this.start = start;
		this.end = end;
	}

	public getStartVertex(): Vertex {
		return this.start;
	}

	public getEndVertex(): Vertex {
		return this.end;
	}
}
