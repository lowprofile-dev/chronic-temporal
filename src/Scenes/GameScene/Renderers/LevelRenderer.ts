import * as PIXI from 'pixi.js';
import {Level} from '../../../GameLogic/Level';
import {FloorTilesRenderer} from './FloorTilesRenderer';
import {EntitiesRenderer} from './EntitiesRenderer';
import {TextureStore} from 'evidently-pixi';
import {EffectsRenderer} from './EffectsRenderer';

export class LevelRenderer extends PIXI.Sprite {
	private readonly _textureStore: TextureStore;

	private readonly _floorTilesRenderer: FloorTilesRenderer;

	private readonly _entitiesRenderer: EntitiesRenderer;

	private readonly _effectsRenderer: EffectsRenderer;

	constructor(textureStore: TextureStore) {
		super(undefined);

		this._textureStore = textureStore;
		this._floorTilesRenderer = new FloorTilesRenderer(textureStore);
		this._entitiesRenderer = new EntitiesRenderer(textureStore);
		this._effectsRenderer = new EffectsRenderer(textureStore);

		this.addChild(this._floorTilesRenderer);
		this.addChild(this._entitiesRenderer);
		this.addChild(this._effectsRenderer);
	}

	public update(timePassed: number): void {
		this._effectsRenderer.update(timePassed);
	}

	public sync(level: Level): void {
		this._floorTilesRenderer.sync(level);
		this._entitiesRenderer.sync(level);
		this._effectsRenderer.sync(level);
	}
}
