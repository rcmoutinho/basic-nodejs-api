class ExampleController {
  async index(req, res) {
    return res.json('Hello World');
  }
}

export default new ExampleController();
