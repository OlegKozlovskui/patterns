class Complaints {
  constructor() {
    this.complaints = [];
  }

  replay(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.replay(complaint);
  }
}

class ServiceComplaints extends Complaints {
  replay({ id, customer, details }) {
    return `${id} ${customer} ${customer}`
  }
}

class ProductComplaints extends Complaints {
  replay({ id, customer, details }) {
    return `${id} ${customer} ${customer}`
  }
}

class ComplainRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'products') {
      complaint = new ProductComplaints();
    } else {
      complaint = new ServiceComplaints();
    }

    return complaint.add({customer, type, details})
  }
};
