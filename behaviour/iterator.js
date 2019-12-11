class Iterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
          return {
            done: true,
            value: null
          }
        }
      }
    }
  }
}

const iterator = new Iterator(['Angular', 'React', 'Vue']);
for (const val of iterator) {
  console.log(val);
}
