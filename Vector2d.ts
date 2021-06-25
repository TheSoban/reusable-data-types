export default class Vector2d {
  protected _x: number;
  protected _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(newX: number) {
    this._x = newX;
  }

  get y(): number {
    return this._y;
  }

  set y(newY: number) {
    this._y = newY;
  }

  equals(other: Vector2d): boolean {
    return this.x === other.x && this.y === other.y;
  }

  copy(): Vector2d {
    return new Vector2d(this.x, this.y);
  }

  multiply(scalar: number): Vector2d {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  divide(scalar: number): Vector2d {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  add(other: Vector2d): Vector2d {
    this.x += other.x;
    this.y += other.y;
    return this;
  }
  
  subtract(other: Vector2d): Vector2d {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  getMagnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  setMagnitude(newMagnitude: number): Vector2d {
    if (this.getMagnitude())
      this.divide(this.getMagnitude()).multiply(newMagnitude);
    return this;
  }

  getDistanceTo(other: Vector2d): number {
    return Math.sqrt(
      (other.x - this.x) ** 2 + (other.y - this.y) ** 2
    );
  }

  getDotProduct(other: Vector2d): number {
    return this.x * other.x + this.y * other.y;
  } 
}
