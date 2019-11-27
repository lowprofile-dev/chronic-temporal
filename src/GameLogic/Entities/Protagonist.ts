import {Entity} from "../Entity";
import {EntityType, PlayerAction, PlayerActionUtils} from "../Enums";

// @todo I think we should only have a single class for the player entity, to ensure we never treat them differently based on how they move
export class Protagonist implements Entity {
	public readonly type: EntityType;
	public x: number;
	public y: number;

	public isPlayerControlled: boolean;
	public movesQueue: PlayerAction[];

	constructor(isPlayerControlled: boolean = true) {
		this.type = EntityType.Protagonist;
		this.x = 0;
		this.y = 0;
		this.isPlayerControlled = isPlayerControlled;
		this.movesQueue = [];
	}

	public update(): void {
		const action = this.movesQueue.pop();

		if (action === undefined) {
			return;
		}

		const direction = PlayerActionUtils.actionToDirection(action);
		this.x += direction.x;
		this.y += direction.y;
	}
}