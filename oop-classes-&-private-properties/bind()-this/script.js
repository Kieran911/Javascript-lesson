// wen u use an event listener inside of a class, u need to use the bind method.
class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();
//app.getServerName();
