import { Application, Container, Graphics, loader as ResourceLoader, loaders as Loaders, Sprite, Texture } from 'pixi.js';

import { House } from './House';
import { Ninegag } from './Ninegag';
import { Object2D } from './Object2D';
import { Pentagon } from './Pentagon';
import { Rocket } from './Rocket';
import { Rocket3D } from './Rocket3D';
import { Shuriken } from './Shuriken';
import { Square } from './Square';
import { Star } from './Star';
import { Thunder } from './Thunder';
import { Triangle } from './Triangle';
import { Vertex2D, Vertex3D } from './Vertex';

export class Game {
	private app: Application;
	private started: boolean = false;
	private stages: Container[] = [];
	private currentStage: number = 0;
	private questionMarkTexture: Texture;
	private score: number = 0;

	public constructor(app: Application) {
		this.app = app;
	}

	public onLoadComplete(): void {
		this.animate();
	}

	public start(): void {
		if (!this.started) {
			const clickOnCorrect: () => void = () => {
				this.score++;
				this.currentStage++;
			};

			const clickOnIncorrect: () => void = () => {
				this.currentStage++;
			};

			this.questionMarkTexture = PIXI.Texture.fromImage('questionmark.png');

			const firstStage: Container = new Container();

			new Rocket3D().translate(new Vertex3D(200, 200, 0)).draw(firstStage);

			setTimeout(() => {
				this.currentStage++;
			}, 10000);

			const secondStage: Container = new Container();

			new Square().drawAt(secondStage, new Vertex2D(30, 20));

			new Square().scale(new Vertex2D(2, 1)).drawAt(secondStage, new Vertex2D(100, 20));
			new Square().scale(new Vertex2D(2, 1)).rotate(Math.PI / 2).drawAt(secondStage, new Vertex2D(220, 20));

			new Pentagon().scale(new Vertex2D(0.5, 0.5)).drawAt(secondStage, new Vertex2D(30, 170));
			new Pentagon().scale(new Vertex2D(0.5, 0.5)).scale(new Vertex2D(2, 1)).drawAt(secondStage, new Vertex2D(100, 170));
			new Pentagon().scale(new Vertex2D(0.5, 0.5)).scale(new Vertex2D(2, 1)).rotate(Math.PI / 2).drawAt(secondStage, new Vertex2D(220, 170));

			new Star().scale(new Vertex2D(0.7, 0.7)).drawAt(secondStage, new Vertex2D(30, 320));
			new Star().scale(new Vertex2D(0.7, 0.7)).scale(new Vertex2D(2, 1)).drawAt(secondStage, new Vertex2D(100, 320));
			this.drawQuestionMark(secondStage, new Vertex2D(220, 320));

			new Star().scale(new Vertex2D(0.7, 0.7)).rotate(Math.PI / 2).drawAt(secondStage, new Vertex2D(30, 420)).on('click', clickOnIncorrect);
			new Star().scale(new Vertex2D(0.7, 0.7)).rotate(Math.PI / 4).drawAt(secondStage, new Vertex2D(100, 420)).on('click', clickOnIncorrect);
			new Star().scale(new Vertex2D(0.7, 0.7)).scale(new Vertex2D(2, 1))
				.rotate(Math.PI / 2).drawAt(secondStage, new Vertex2D(170, 420)).on('click', clickOnCorrect);

			const thirdStage: Container = new Container();

			Object.assign(new Shuriken().drawAt(thirdStage, new Vertex2D(0, 0), true).data, { rotateAnimation: true, rotateAngle: 0.025 });
			new Ninegag().drawAt(thirdStage, new Vertex2D(150, 0));
			new House().drawAt(thirdStage, new Vertex2D(250, 0));
			new Rocket().drawAt(thirdStage, new Vertex2D(280, 0));
			new Thunder().drawAt(thirdStage, new Vertex2D(400, 0));
			new Triangle().drawAt(thirdStage, new Vertex2D(500, 0));

			this.stages.push(firstStage, secondStage, thirdStage);

			this.started = true;
			this.onLoadComplete();
		}
	}

	public animate(): void {
		for (const child of this.stages[this.currentStage].children) {
			if (!((child as any).object instanceof Object2D)) continue;

			const { object }: { object: Object2D } = child as any;

			if (object.data.rotateAnimation) {
				const displacement: Vertex2D = object.getDisplacement();
				displacement.mult([
					[-1, 0, 0],
					[0, -1, 0],
					[0, 0, 1]
				]);
				object.translate(displacement);
				object.rotate(object.data.rotateAngle);
				displacement.mult([
					[-1, 0, 0],
					[0, -1, 0],
					[0, 0, 1]
				]);
				object.translate(displacement);
				object.render();
			}
		}
		requestAnimationFrame(this.animate.bind(this));
		this.app.renderer.render(this.stages[this.currentStage]);
	}

	protected drawQuestionMark(stage: Container, position: Vertex2D): void {
		const sprite: Sprite = new Sprite(this.questionMarkTexture);
		sprite.position.set(position.getX(), position.getY());
		stage.addChild(sprite);
	}
}
