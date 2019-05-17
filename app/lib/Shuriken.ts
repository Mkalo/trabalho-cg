import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Shuriken extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(60, 0);
		const b: Vertex2D = this.createVertex(14.14, 14.14);
		const c: Vertex2D = this.createVertex(0, 60);
		const d: Vertex2D = this.createVertex(-14.14, 14.14);
		const e: Vertex2D = this.createVertex(-60, 0);
		const f: Vertex2D = this.createVertex(-14.14, -14.14);
		const g: Vertex2D = this.createVertex(0, -60);
		const h: Vertex2D = this.createVertex(14.14, -14.14);
		const i: Vertex2D = this.createVertex(60, 0);
		const j: Vertex2D = this.createVertex(-10, 0);
		const k: Vertex2D = this.createVertex(0, 10);
		const l: Vertex2D = this.createVertex(10, 0);
		const m: Vertex2D = this.createVertex(0, -10);

		this.addEdge(a, b);
		this.addEdge(b, c);
		this.addEdge(c, d);
		this.addEdge(d, e);
		this.addEdge(e, f);
		this.addEdge(f, g);
		this.addEdge(g, h);
		this.addEdge(h, i);
		this.addEdge(i, a);
		this.addEdge(j, k);
		this.addEdge(k, l);
		this.addEdge(l, m);
		this.addEdge(m, j);
	}
}
