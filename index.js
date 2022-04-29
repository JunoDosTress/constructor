const Store = function (nameOfStore) {
    this.nameOfStore = nameOfStore;
    this.inventoryList = [];
    this.earnings = 0;
    this.addBook = function (title, quantity, value) {
      var newBook = new Book(title, quantity, value);
      if (
        this.inventoryList.find((newBook) => newBook.title === title) ===
        undefined
      ) {
        this.inventoryList.push(newBook);
      } else {
        console.log(`${newBook.title} already exist`);
      }
      this.restockBook = function (title, quantity) {
        if (
          this.inventoryList.find((newBook) => newBook.title === title) ===
          undefined
        ) {
          console.log(`Book does not exist.`);
        } else {
          this.inventoryList.find(
            (newBook) => newBook.title === title
          ).quantity += quantity;
        }
      };
    };
    this.sellBook = function (title, quantity) {
      if (
        this.inventoryList.find((newBook) => newBook.title === title) ===
        undefined
      ) {
        console.log(`${newBook.title} is out of stock.`)
      }
      else {
        if (
          this.inventoryList.find((newBook) => newBook.title === title).quantity < quantity) {
            console.log(`There is only ${this.inventoryList.find((newBook) => newBook.title === title).quantity} left.`)
          }
          else {
            this.inventoryList.find(
              (newBook) => newBook.title === title
            ).quantity -= quantity;
            this.earnings += quantity * this.inventoryList.find((newBook) => newBook.title === title).value
            console.log(`Successful transaction!`)
          }
      }
      this.totalEarnings = function() {
        console.log(this.earnings);
      }
      this.listInventory = function() {
        console.log(this.inventoryList);
      }
    };
  
    const Book = function (title, quantity, value) {
      this.title = title;
      this.quantity = quantity;
      this.value = value;
    };
  };
  var newStore = new Store("Pandayan Book Store");
  newStore.addBook("English", 12, 5);
  newStore.addBook("Math", 10, 15);
  newStore.addBook("Math", 10, 15);
  newStore.addBook("English", 12, 5);
  newStore.restockBook("English", 1);
  newStore.restockBook("English", 1);
  newStore.restockBook("Science", 1);
  newStore.sellBook("English", 2);
  newStore.sellBook("Math", 10);
  newStore.sellBook("Math", 10);
  newStore.totalEarnings();
  newStore.listInventory();
  console.log(newStore);
  