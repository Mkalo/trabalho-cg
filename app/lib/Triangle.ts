import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Triangle extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(-25, -21.65);
		const b: Vertex2D = this.createVertex(25, -21.65);
		const c: Vertex2D = this.createVertex(0, 21.65);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(c, a);
	}
}
