class Body {
  constructor(
    public title: string,
    public path: string,
    public image: string,
  ) {};
};

class CardBody {
  static create(event: Body) {
    return new Body(
      event.title,
      event.path,
      event.image,
    );
  }
};

export default CardBody;
