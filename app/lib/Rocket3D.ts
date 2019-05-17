import { Edge } from './Edge';
import { Object3D } from './Object3D';
import { Vertex3D } from './Vertex';

export class Rocket3D extends Object3D {
	public constructor() {
		super();

		const a: Vertex3D = this.createVertex(0, -121, 0);
		const b: Vertex3D = this.createVertex(45, -41, 30);
		const c: Vertex3D = this.createVertex(35, -41, 30);
		const d: Vertex3D = this.createVertex(35, 14, 30);
		const e: Vertex3D = this.createVertex(85, 84, 30);
		const f: Vertex3D = this.createVertex(20, 84, 30);
		const g: Vertex3D = this.createVertex(47, 121, 30);
		const h: Vertex3D = this.createVertex(-46, 121, 30);
		const i: Vertex3D = this.createVertex(-20, 84, 30);
		const j: Vertex3D = this.createVertex(-85, 84, 30);
		const k: Vertex3D = this.createVertex(-35, 14, 30);
		const l: Vertex3D = this.createVertex(-35, -41, 30);
		const m: Vertex3D = this.createVertex(-45, -41, 30);

		const o: Vertex3D = this.createVertex(45, -41, -30);
		const p: Vertex3D = this.createVertex(35, -41, -30);
		const q: Vertex3D = this.createVertex(35, 14, -30);
		const r: Vertex3D = this.createVertex(85, 84, -30);
		const s: Vertex3D = this.createVertex(20, 84, -30);
		const t: Vertex3D = this.createVertex(47, 121, -30);
		const u: Vertex3D = this.createVertex(-46, 121, -30);
		const v: Vertex3D = this.createVertex(-20, 84, -30);
		const w: Vertex3D = this.createVertex(-85, 84, -30);
		const x: Vertex3D = this.createVertex(-35, 14, -30);
		const y: Vertex3D = this.createVertex(-35, -41, -30);
		const z: Vertex3D = this.createVertex(-45, -41, -30);

		const AB: Edge = this.addEdge(a, b);
		const BC: Edge = this.addEdge(b, c);
		const CD: Edge = this.addEdge(c, d);
		const DE: Edge = this.addEdge(d, e);
		const EF: Edge = this.addEdge(e, f);
		const FG: Edge = this.addEdge(f, g);
		const GH: Edge = this.addEdge(g, h);
		const HI: Edge = this.addEdge(h, i);
		const IJ: Edge = this.addEdge(i, j);
		const JK: Edge = this.addEdge(j, k);
		const KL: Edge = this.addEdge(k, l);
		const LM: Edge = this.addEdge(l, m);
		const MA: Edge = this.addEdge(m, a);

		const AO: Edge = this.addEdge(a, o);
		const OP: Edge = this.addEdge(o, p);
		const PQ: Edge = this.addEdge(p, q);
		const QR: Edge = this.addEdge(q, r);
		const RS: Edge = this.addEdge(r, s);
		const ST: Edge = this.addEdge(s, t);
		const TU: Edge = this.addEdge(t, u);
		const UV: Edge = this.addEdge(u, v);
		const VW: Edge = this.addEdge(v, w);
		const WX: Edge = this.addEdge(w, x);
		const XY: Edge = this.addEdge(x, y);
		const YZ: Edge = this.addEdge(y, z);
		const ZA: Edge = this.addEdge(z, a);

		const BO: Edge = this.addEdge(b, o);
		const CP: Edge = this.addEdge(c, p);
		const DQ: Edge = this.addEdge(d, q);
		const ER: Edge = this.addEdge(e, r);
		const FS: Edge = this.addEdge(f, s);
		const GT: Edge = this.addEdge(g, t);
		const HU: Edge = this.addEdge(h, u);
		const IV: Edge = this.addEdge(i, v);
		const JW: Edge = this.addEdge(j, w);
		const KX: Edge = this.addEdge(k, x);
		const LY: Edge = this.addEdge(l, y);
		const MZ: Edge = this.addEdge(m, z);

		this.addFace(MA, LM, KL, JK, IJ, HI, GH, FG, EF, DE, CD, BC, AB);
		this.addFace(ZA, YZ, XY, WX, VW, UV, TU, ST, RS, QR, PQ, OP, AO);
		this.addFace(AB, BO, AO);
		this.addFace(BC, CP, OP, BO);
		this.addFace(CD, DQ, PQ, CP);
		this.addFace(DE, ER, QR, DQ);
		this.addFace(EF, FS, RS, ER);
		this.addFace(FG, GT, ST, FS);
		this.addFace(GH, HU, TU, GT);
		this.addFace(HI, IV, UV, HU);
		this.addFace(IJ, JW, VW, IV);
		this.addFace(JK, KX, WX, JW);
		this.addFace(KL, LY, XY, KX);
		this.addFace(LM, MZ, YZ, LY);
		this.addFace(MA, MZ, ZA);
	}
}
