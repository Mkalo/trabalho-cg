import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Pentagon extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(50, 0);
		const b: Vertex2D = this.createVertex(15.45, 47.55);
		const c: Vertex2D = this.createVertex(-40.45, 29.39);
		const d: Vertex2D = this.createVertex(-40.45, -29.39);
		const e: Vertex2D = this.createVertex(15.45, -47.55);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(c, d);
		this.addEdge(d, e);
		this.addEdge(e, a);
	}
}
