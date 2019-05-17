import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class House extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(-25, -39.43);
		const b: Vertex2D = this.createVertex(25, -39.43);
		const c: Vertex2D = this.createVertex(25, 10.57);
		const d: Vertex2D = this.createVertex(-25, 10.57);
		const e: Vertex2D = this.createVertex(0, 39.43);
		const f: Vertex2D = this.createVertex(-8.33, -39.43);
		const g: Vertex2D = this.createVertex(-8.33, -14.43);
		const h: Vertex2D = this.createVertex(8.33, -39.43);
		const i: Vertex2D = this.createVertex(8.33, -14.43);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(d, a);
		this.addEdge(c, e);
		this.addEdge(e, d);
		this.addEdge(f, g);
		this.addEdge(h, i);
		this.addEdge(g, i);
	}
}
