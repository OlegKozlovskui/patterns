class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  emit(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    });
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state;
        break;
      case 'DECREMENT':
        this.state = --this.state;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

const stream$ = new Subject();
const obs1 = new Observer(10);
const obs2 = new Observer(20);

stream$.subscribe(obs1);
stream$.subscribe(obs2);
stream$.emit({ type: 'INCREMENT' });
console.log(obs1.state);
console.log(obs2.state);
