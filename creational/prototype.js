const car = {
  wheels: 4,
};

const bmw = Object.create(car, {
  color: {
    value: '#fff'
  }
});

