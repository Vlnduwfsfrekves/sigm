// { name: '🍎', price: 50 }

// { name: '🍇', price: 70 }

// { name: '🍋', price: 60 }

// { name: '🍓', price: 110 }


const cart = {

    items: [],

    getItems() {
        return this.items
    },

    add(product) {

      for (const item of this.items) {

        if (item.name === product.name) {

          item.quantity += 1;

          return;

        }

      }

      const newProduct = {

        ...product,

        quantity: 1,

      }

      this.items.push(newProduct)

    },

    remove(productName) {
        let len = 0
        for(const sigm of this.items){
            if(this.items[len].name === productName){
                if(this.items[len].quantity>1){
                    this.items[len].quantity--
                    return
                }else{
                    this.items.splice(len,len+1)
                    return
                }
                // delete this.items[len]
                // this.items = this.items.slice(len,)
                // return
            }
            len++
        }
    },

    clear() {
         this.items = []
    },

    countTotalPrice() {
        let total = 0
        for(const sig of this.items){
            total+=sig.price
        }
        console.log(total)
    },

    increaseQuantity(productName) {
        // for(){}
        let len = 0
        for(const incr of this.items){
            if(this.items[len].name === productName){
                this.items[len].quantity++
                return
            }
            len++
        }
    },

    decreaseQuantity(productName) {
        let len = 0
        for(const incr of this.items){
            if(this.items[len].name === productName){
                this.items[len].quantity--
                return
            }
            len++
        }
    },

  };