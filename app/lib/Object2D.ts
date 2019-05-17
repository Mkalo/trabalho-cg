import * as Matrix from 'mathjs';
import { Container, Graphics, loaders as Loaders, Rectangle, Sprite, Texture } from 'pixi.js';

import { Edge } from './Edge';
import { Vertex2D } from './Vertex';

export abstract class Object2D {
	public data: any = {};

	protected lineWidth: number = 2;
	protected color: number = 0x000000;
	protected vertexes: Vertex2D[] = [];
	protected edges: Edge[] = [];
	protected graphics: Graphics = null;
	protected transformation: number[][] = [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1]
	];

	public setLineWidth(width: number): Object2D {
		this.lineWidth = width;
		return this;
	}

	public setColor(color: number): Object2D {
		this.color = color;
		return this;
	}

	public getDisplacement(): Vertex2D {
		return new Vertex2D(this.transformation[0][2], this.transformation[1][2]);
	}

	public drawAt(stage: Container, position: Vertex2D, test: boolean = false): Object2D {
		const boundingBox: { width: number, height: number } = this.boundingBoxSize();
		this.translate(new Vertex2D(position.getX() + boundingBox.width / 2, position.getY() + boundingBox.height / 2));

		if (this.graphics === null) {
			this.render();
		}
		stage.addChild(this.graphics);

		return this;
	}

	public translate(vector: Vertex2D): Object2D {
		this.transformation = Matrix.multiply([
			[1, 0, vector.getX()],
			[0, 1, vector.getY()],
			[0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public scale(vector: Vertex2D): Object2D {
		this.transformation = Matrix.multiply([
			[vector.getX(), 0, 0],
			[0, vector.getY(), 0],
			[0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public rotate(angle: number): Object2D {
		this.transformation = Matrix.multiply([
			[Math.cos(angle), -Math.sin(angle), 0],
			[Math.sin(angle), Math.cos(angle), 0],
			[0, 0, 1]
		], this.transformation) as number[][];
		return this;
	}

	public boundingBoxSize(): { x: number, y: number, width: number, height: number } {
		let minX: number = Number.MAX_SAFE_INTEGER;
		let minY: number = Number.MAX_SAFE_INTEGER;
		let maxX: number = Number.MIN_SAFE_INTEGER;
		let maxY: number = Number.MIN_SAFE_INTEGER;

		for (let vertex of this.vertexes) {
			vertex = vertex.copy();
			vertex.mult(this.transformation);

			minX = Math.min(vertex.getX(), minX);
			minY = Math.min(vertex.getY(), minY);
			maxX = Math.max(vertex.getX(), maxX);
			maxY = Math.max(vertex.getY(), maxY);
		}

		return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
	}

	public render(): void {
		if (this.graphics !== null) {
			this.graphics.clear();
		} else {
			this.graphics = new Graphics();
		}

		this.graphics.lineStyle(this.lineWidth, this.color);

		for (const edge of this.edges) {
			const start: Vertex2D = (edge.getStartVertex() as Vertex2D).copy();
			const end: Vertex2D = (edge.getEndVertex() as Vertex2D).copy();
			start.mult(this.transformation);
			end.mult(this.transformation);
			this.graphics.moveTo(start.getX(), start.getY());
			this.graphics.lineTo(end.getX(), end.getY());
		}

		this.graphics.interactive = true;
		const boundingBox: { x: number, y: number, width: number, height: number } = this.boundingBoxSize();
		this.graphics.hitArea = new Rectangle(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
		Object.assign(this.graphics, { object: this });
	}

	//tslint:disable-next-line:ban-types forbidden-types
	public on(event: string, fn: Function, context?: any): Object2D {
		this.graphics.on(event, fn, context);
		return this;
	}

	protected createVertex(x: number, y: number): Vertex2D {
		for (const vertex of this.vertexes) {
			if (vertex.getX() === x && vertex.getY() === y) {
				return vertex;
			}
		}
		const ret: Vertex2D = new Vertex2D(x, y);
		this.vertexes.push(ret);
		return ret;
	}

	protected addEdge(u: Vertex2D, v: Vertex2D): Edge {
		const edge: Edge = new Edge(u, v);
		this.edges.push(edge);
		return edge;
	}
}
