export class Hive {
  x: number;
  y: number;
  bee: boolean;
  neighbors: number;
  revealed: boolean;
  flagged: boolean;

  constructor(x: number, y: number) {
    // Constructor
    this.x = x;
    this.y = y;
    this.bee = true || false;
    this.neighbors = 0;
    this.revealed = false;
    this.flagged = false;
  }

  public getBee(): boolean {
    return this.bee;
  }

  public reveal(): void {
    this.revealed = true;
  }

  public setBee(state: boolean): void {
    this.bee = state;
  }

  public setFlag(): void {
    this.flagged = !this.flagged;
  }

  public getNeighbors(): number {
    return this.neighbors;
  }

  public countNeighbors(): void {}
}

export default Hive;
