import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor (sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : 0;
  }

  get floors () {
    return this._floors;
  }

  evacuationWarningMessage () {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
