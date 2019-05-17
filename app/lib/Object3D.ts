import * as Matrix from 'mathjs';
import { Container, Graphics, loaders as Loaders, Rectangle, Sprite, Texture } from 'pixi.js';

import { Edge } from './Edge';
import { Face } from './Face';
import { Vertex2D, Vertex3D } from './Vertex';

export abstract class Object3D {
	public data: any = {};

	protected lineWidth: number = 2;
	protected color: number = 0x000000;
	protected vertexes: Vertex3D[] = [];
	protected edges: Edge[] = [];
	protected faces: Face[] = [];
	protected graphics: Graphics = null;
	protected transformation: number[][] = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];

	protected thetaX: number = 1 / 3;
	protected thetaY: number = 1 / 2;

	protected projection: number[][] = [
		[Math.sqrt(1 - this.thetaY), 0, Math.sqrt(this.thetaY), 0],
		[Math.sqrt(this.thetaX) * Math.sqrt(this.thetaY), Math.sqrt(1 - this.thetaX), -Math.sqrt(this.thetaX) * Math.sqrt(1 - this.thetaY), 0],
		[0, 0, 0, 0],
		[0, 0, 0, 1]
	];

	public setLineWidth(width: number): Object3D {
		this.lineWidth = width;
		return this;
	}

	public setColor(color: number): Object3D {
		this.color = color;
		return this;
	}

	public getDisplacement(): Vertex3D {
		return new Vertex3D(this.transformation[0][2], this.transformation[1][2], this.transformation[2][2]);
	}

	public draw(stage: Container): Object3D {
		if (this.graphics === null) {
			this.render();
		}
		stage.addChild(this.graphics);

		return this;
	}

	public translate(vector: Vertex3D): Object3D {
		this.transformation = Matrix.multiply([
			[1, 0, 0, vector.getX()],
			[0, 1, 0, vector.getY()],
			[0, 0, 1, vector.getZ()],
			[0, 0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public scale(vector: Vertex3D): Object3D {
		this.transformation = Matrix.multiply([
			[vector.getX(), 0, 0, 0],
			[0, vector.getY(), 0, 0],
			[0, 0, vector.getZ(), 0],
			[0, 0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public rotateX(angle: number): Object3D {
		this.transformation = Matrix.multiply([
			[1, 0, 0, 0],
			[0, Math.cos(angle), -Math.sin(angle), 0],
			[0, Math.sin(angle), Math.cos(angle), 0],
			[0, 0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public rotateY(angle: number): Object3D {
		this.transformation = Matrix.multiply([
			[Math.cos(angle), 0, Math.sin(angle), 0],
			[0, 1, 0, 0],
			[-Math.sin(angle), 0, Math.cos(angle), 0],
			[0, 0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public rotateZ(angle: number): Object3D {
		this.transformation = Matrix.multiply([
			[Math.cos(angle), -Math.sin(angle), 0, 0],
			[Math.sin(angle), Math.cos(angle), 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public render(): void {
		if (this.graphics !== null) {
			this.graphics.clear();
		} else {
			this.graphics = new Graphics();
		}

		this.graphics.lineStyle(this.lineWidth, this.color);

		for (const edge of this.edges) {
			const start: Vertex3D = (edge.getStartVertex() as Vertex3D).copy();
			const end: Vertex3D = (edge.getEndVertex() as Vertex3D).copy();
			start.mult(this.transformation);
			end.mult(this.transformation);
			start.mult(this.projection);
			end.mult(this.projection);
			this.graphics.moveTo(start.getX(), start.getY());
			this.graphics.lineTo(end.getX(), end.getY());
		}
	}

	//tslint:disable-next-line:ban-types forbidden-types
	public on(event: string, fn: Function, context?: any): Object3D {
		this.graphics.on(event, fn, context);
		return this;
	}

	protected createVertex(x: number, y: number, z: number): Vertex3D {
		for (const vertex of this.vertexes) {
			if (vertex.getX() === x && vertex.getY() === y && vertex.getZ() === z) {
				return vertex;
			}
		}
		const ret: Vertex3D = new Vertex3D(x, y, z);
		this.vertexes.push(ret);
		return ret;
	}

	protected addEdge(u: Vertex3D, v: Vertex3D): Edge {
		const edge: Edge = new Edge(u, v);
		this.edges.push(edge);
		return edge;
	}

	protected addFace(...edges: Edge[]): Face {
		const face: Face = new Face(...edges);
		return face;
	}
}
