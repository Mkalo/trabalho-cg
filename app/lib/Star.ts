import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Star extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(50, 0);
		const b: Vertex2D = this.createVertex(16.18, 11.76);
		const c: Vertex2D = this.createVertex(15.45, 47.55);
		const d: Vertex2D = this.createVertex(-6.18, 19.02);
		const e: Vertex2D = this.createVertex(-40.45, 29.39);
		const f: Vertex2D = this.createVertex(-20, 0);
		const g: Vertex2D = this.createVertex(-40.45, -29.39);
		const h: Vertex2D = this.createVertex(-6.18, -19.02);
		const i: Vertex2D = this.createVertex(15.45, -47.55);
		const j: Vertex2D = this.createVertex(16.18, -11.76);
		const k: Vertex2D = this.createVertex(50, 0);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(c, d);
		this.addEdge(d, e);
		this.addEdge(e, f);
		this.addEdge(f, g);
		this.addEdge(g, h);
		this.addEdge(h, i);
		this.addEdge(i, j);
		this.addEdge(j, k);
		this.addEdge(k, a);
	}
}
