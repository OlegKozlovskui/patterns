class Sum {
  constructor(initValue = 50) {
    this.sum = initValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}
