export class RoutesEntity {
  private _name: string | undefined;
  private _link: string | undefined;

  constructor(name: string, link: string) {
    this._name = name;
    this._link = link;
  }
  public get link(): string | undefined {
    return this._link;
  }
  public set link(value: string | undefined) {
    this._link = value;
  }

  public get names(): string | undefined {
    return this._name;
  }
  public set names(value: string | undefined) {
    this._name = value;
  }

  static instance = (name: string, link: string) =>
    new RoutesEntity(name, link);
}
