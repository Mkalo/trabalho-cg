import { Application, Container, Text } from 'pixi.js';
import { Game } from './lib/Game';

const app: Application = new Application(800, 600, { backgroundColor : 0xFEFCF1 });
app.view.style.position = 'absolute';
app.view.style.display = 'block';
document.body.appendChild(app.view);

const game: Game = new Game(app);
game.start();
