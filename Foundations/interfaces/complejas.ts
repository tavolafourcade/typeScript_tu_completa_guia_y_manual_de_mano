(() => {
  
  interface Client {
    name: string;
    age: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  
  const client: Client = {
    name: 'Octavio',
    age: 20,
    address: {
      id:  125,
      zip: 'KY2',
      city: 'Ottawa',
    }
  }
})()