import {Square} from './square';

export class MapModel {
  id: number | undefined;
  name: string | undefined;
  square: Square[][] | undefined;

  constructor(id: number, name: string, square: Square[][]) {
    this.id = id;
    this.name = name;
    this.square = square;
  }
}
