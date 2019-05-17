import { Edge } from './Edge';

export class Face {
	private edges: Edge[];

	public constructor(...edges: Edge[]) {
		this.edges = edges.slice(0);
	}

	public getEdges(): Edge[] {
		return this.edges;
	}
}
