import { Object2D } from './Object2D';
import { Vertex2D } from './Vertex';

export class Rocket extends Object2D {
	public constructor() {
		super();

		const a: Vertex2D = this.createVertex(0, -121);
		const b: Vertex2D = this.createVertex(45, -41);
		const c: Vertex2D = this.createVertex(35, -41);
		const d: Vertex2D = this.createVertex(35, 14);
		const e: Vertex2D = this.createVertex(85, 84);
		const f: Vertex2D = this.createVertex(20, 84);
		const g: Vertex2D = this.createVertex(47, 121);
		const h: Vertex2D = this.createVertex(-46, 121);
		const i: Vertex2D = this.createVertex(-20, 84);
		const j: Vertex2D = this.createVertex(-85, 84);
		const k: Vertex2D = this.createVertex(-35, 14);
		const l: Vertex2D = this.createVertex(-35, -41);
		const m: Vertex2D = this.createVertex(-45, -41);

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
		this.addEdge(l, m);
		this.addEdge(m, a);
	}
}
