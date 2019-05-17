import { Edge } from './Edge';
import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Thunder extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(-75, -62);
		const b: Vertex2D = this.createVertex(-17, -100);
		const c: Vertex2D = this.createVertex(13, -42);
		const d: Vertex2D = this.createVertex(3, -36);
		const e: Vertex2D = this.createVertex(38, 9);
		const f: Vertex2D = this.createVertex(27, 17);
		const g: Vertex2D = this.createVertex(75, 100);
		const h: Vertex2D = this.createVertex(-4, 37);
		const i: Vertex2D = this.createVertex(7, 28);
		const j: Vertex2D = this.createVertex(-38, -10);
		const k: Vertex2D = this.createVertex(-23, -22);

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
