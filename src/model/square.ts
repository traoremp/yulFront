export class Square {
  val: number | undefined;
  image: string | undefined;

  constructor(value: number, image: string) {
    this.image = image;
    this.val = value;
  }
}
