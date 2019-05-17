import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Square extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(-25, -25);
		const b: Vertex2D = this.createVertex(25, -25);
		const c: Vertex2D = this.createVertex(25, 25);
		const d: Vertex2D = this.createVertex(-25, 25);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(c, d);
		this.addEdge(d, a);
	}
}
