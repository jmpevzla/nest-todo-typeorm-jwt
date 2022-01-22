export class CreateTodoDto {
  constructor(
    public id: string,
    public title: string,
    public description: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
