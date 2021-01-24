export class AvatarModel {
  x: number | undefined;
  y: number | undefined;
  image: string | undefined;

  constructor(x: number, y: number, image: string) {
    this.image = image;
    this.x = x;
    this.y = y;
  }
}
