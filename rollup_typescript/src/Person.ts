

export class Person {

  constructor(
    public readonly name: string,
    public readonly job: string,
  ) {
  }

  greeting(): string {
    return `Hello! I'm ${this.name}, ${this.job}.`;
  }

}
