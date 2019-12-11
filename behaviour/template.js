class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} execute ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} has ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'programming';
  }
}

class QA extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'testing';
  }
}

const dev = new Developer('Oleg', '5000');
