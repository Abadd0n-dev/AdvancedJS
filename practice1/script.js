//task 1
const collection = [{
    title: "2 years",
    artist: "Ruslan",
    year: 2024
},
{
    title: "abc",
    artist: "Mr",
    year: 2023
},
{
    title: "Nekto",
    artist: "???",
    year: 2033
}];

const musicCollection = {
    collection: [...collection],
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: () => {
                if (i < this.collection.length) {
                    return {
                        value: this.collection[i++],
                        done: false,
                    };
                } else return { done: true };
            }
        }
    }
}

for (let collection of musicCollection) {
    console.log(`${collection.title - collection.artist} ${(collection.year)}`);
}

//task 2
const cooks = new Map([
    ["Пицца", "Виктор"],
    ["Суши", "Ольга"],
    ["Десерты", "Дмитрий"]
]);

const menu = new Map([
    ["Пицца", new Set(["Маргарита","Пепперони"])],
    ["Суши", new Set(["Филадельфия","Калифорния"])],
    ["Десерты", new Set(["Тирамису","Чизкейк"])]
]);

class Client {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Manager {
    finalOrder = new Map();
    count;
    newOrder (client, ...order) {
      this.count = 0
      order.forEach((element) => {
        if (menu.get(element.type).has(element.name)) {
          this.count++;
        }
      });
      if (this.finalOrder.get(client) === undefined) {
        if (this.count === order.length) {
          this.finalOrder.set(client, order);
        }
      } else {
        if (this.count === order.length) {
          this.finalOrder.get(client).push(...order);
        }
      }
      if (this.count === order.length) {
        console.log(`Клиент ${client.firstname} заказал:`);
        const arr = formatArray(this.finalOrder.get(client));
        arr.forEach((e) => {
          const str = `${e.type} "${e.name}" - ${e.quantity}; готовит повар ${cooks.get(e.type)}`
          console.log(str);
        })
      }
    }
  }
  
  const formatArray = (array) => {
    let str = "";
    let index;
    for (let i = 0; i < array.length; i++) {
      str = array[i].name;
      for (let j = i + 1; j < array.length; j++) {
        if (str === array[j].name) {
          array[i].quantity = array[i].quantity + array[j].quantity;
          index = j
        }
      }
    }
    delete array[index]
    return array;
  }

const manager = new Manager();

manager.newOrder(
    new Client("Алексей"),
    { name: "Маргарита", quantity: 1, type: "Пицца" },
    { name: "Пепперони", quantity: 2, type: "Пицца" },
    { name: "Чизкейк", quantity: 1, type: "Десерт" },
  );

const client1 = new Client("Мария");
const client2 = new Client("Ирина");

manager.newOrder(
  client1,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);

manager.newOrder(
    client2,
    { name: "Тирамису", quantity: 2, type: "Десерт" },
    { name: "Калифорния", quantity: 1, type: "Суши" },
  );