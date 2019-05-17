import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Ninegag extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(0, -45.75);
		const b: Vertex2D = this.createVertex(39.9, -22.95);
		const c: Vertex2D = this.createVertex(39.9, 22.65);
		const d: Vertex2D = this.createVertex(0, 45.75);
		const e: Vertex2D = this.createVertex(-39.9, 22.65);
		const f: Vertex2D = this.createVertex(-24.3, 13.65);
		const g: Vertex2D = this.createVertex(0, 27.75);
		const h: Vertex2D = this.createVertex(24, 13.65);
		const i: Vertex2D = this.createVertex(24, -4.95);
		const j: Vertex2D = this.createVertex(0, 8.85);
		const k: Vertex2D = this.createVertex(-39.9, -13.65);
		const l: Vertex2D = this.createVertex(-39.9, -22.95);
		const m: Vertex2D = this.createVertex(0, -27.75);
		const n: Vertex2D = this.createVertex(16.5, -18.15);
		const o: Vertex2D = this.createVertex(0, -8.55);
		const p: Vertex2D = this.createVertex(-16.5, -18.15);

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
		this.addEdge(k, l);
		this.addEdge(l, a);
		this.addEdge(m, n);
		this.addEdge(n, o);
		this.addEdge(o, p);
		this.addEdge(p, m);
	}
}
