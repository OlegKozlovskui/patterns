// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }
//
// Server.prototype.getUrl = function() {
//   return `http://${this.ip}:8080`;
// };

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `http://${this.ip}:8080`;
  }
}

const aws = new Server('AWS German', '82.21.21.21');
console.log(aws.getUrl());
