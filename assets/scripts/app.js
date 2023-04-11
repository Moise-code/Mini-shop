

// lets create the class which will be the blueprint of the object when I talk about blueprint I mean defining the way properties and methods of the object
// are going to look like.

class Product {
  title = 'Default'; // this is the default property which is the instance
  imageUrl;
  description;
  price;
  // again the fields here in the class can be removed there is no need to keep the since they will be overwritten in the constructor

  // since the properties will change we are going to create a method to use which is a constructor method
  // the constructor method is there to help with taking arguments that will be changed since the title or the image Url is not going to be the same everywhere.
  // that is why in the constructor curry bracels we are going to assign the properties of the class to the arguments of cpnstructor values.

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price

  }
}


// how to add that class then as the new object then, you just go where you need it and use new then class name remember this will be assigned as a new object with same properties as the reference class.
// now that we created the array for the products, now we are going to create the object to store that the above commented array

// now lets create a new class called productItem and this on will take all the functionalities to add one item.

// now lets create a class for a single product.
class ProductItem {
  // since the productItem will need to have a some properties and those properties are similar to the parameters of the class Product then
  // we are going to target the product since its the combination of the parameters there and call it use this and assign it to the argument passed in the 
  // product item
  constructor(product) {
    this.product = product
  }
  // we are creating the render method since the render belongs to this class ProductItem
  // we are going to target the prod using this particular class.
  render() {
    // let first create that li element
    const productElement = document.createElement('li');
    // Lets assign a class on it
    productElement.classList.add('product-item');
    // lets then use innerHtml to add the obect literals
    productElement.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      
      <div class="product-item__content">
      
        <h2>${this.product.title}</h2>
      
        <h3>\$${this.product.price}</h3>
      
        <p>${this.product.description}</p>
      
        <button>Add to Cart</button>
  
      </div>
  </div> 
      
      `;
      // we want to target the button in the scrip so that we can be able to add the eventListerner.
      const addCartButton = productElement.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    // we are goin to return prodEl;
    return productElement;
    // the returned product element remember is the one which is going to be appended on the ul

  }
  // lets add the method to add to cart the one we are really is going to be there attached at the event listerner.
    // lets add another method to addToCart
    addToCart() {
      App.addProductToCart(this.product);
    }

}

// now lets just create the new class of shopping cart so that we access the total.

class ShoppingCart {
  // lets create the array items to store the produts prices
  items = [];
  // now lets add a setter to get the value
  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Totla:\$${this.totalAmount.toFixed(1)}</h2>`

  }

  // since  we want to update the total of the price we are going to create a getter and setter to set the updated version of the total
  get totalAmount(){
    const sum = this.items.reduce((prevValue, curValue)=>{
      return prevValue + curValue.price;
    }, 0);
    return sum;
  }
  // lets create a new method called addProduct to add the product to the cart
  addProduct(product){
    // this.items.push(product);
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  // lets then create the render method to render the total to the user interface.
  render(){
    // lets create the section where the html codes will be appended
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Totla:\$${0}</h2>
    <button>Order now</button> 
    `;
    cartEl.className = "cart"
    // lets add new property to output total
    this.totalOutput = cartEl.querySelector('h2');
    // we are then going to return the cartEl so that whenever we create the shopping cart we will be able to append cartEl to it.
    return cartEl;
  }
}

// again we are going to create another class and this class will be the productList class.



class ProductList {
  // then in this product list class we are going to paste the whole login which was in the productList object.
  // constructor(product){
  //   this.product = product;
  // }
  products = [
    // then since the products are the ones which hold object of on product then 
    // we are going to call the instance of a class here using the new keyword
    new Product(
      'Ferari portofino',
      'https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-portofino-m-117-1621623712.jpg?crop=0.720xw:0.540xh;0.104xw,0.364xh&resize=1200:*',
      'This is a nive ferari incase you miss it.',
      23.5453
    ),
    new Product(
      'Mercedes-Benz C-Class',
      'https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg',
      'This is a smooth sport car you have ever taste.',
      50.234
    )
  ];

  // now we are going to create a render method as the third element of the object productsList
  // again the render method is going to hold all the functionalities to render the product to the user interface.

  render() {
    // now lets just create a new element which is a ul element
    const prodList = document.createElement('ul')
    // now lets assing a class to the prodList variable
    prodList.classList.add('product-list');
    // now that we have the ul lets now add each product then as ana element to achieve this we are going to use for each on products to target each product
    // we are going to use this keyword since we are targeting the products array from this produtsList object
    this.products.forEach(prod => {
      // lets instanciate the productItem class
      const productItem = new ProductItem(prod);
      // lets access productElement.
      const prodEl = productItem.render();
      prodList.append(prodEl);
      console.log(prodEl)
      // we are going to append elements accordingly
      console.log(prodList);
    })
    return prodList;  
  }


}

// now what I will do I am going to create a new class called shop to that I access the cart there and be able to keep the track of the products.
class Shop{
  render(){
       // lets first target the dicision from html where the ul and li's are going to be appended
       // I place it here since its the one accept everything.
       // then in the productList render method I will then return prodList instead of appending it to the productsDiv since it is moved here in the Shop class
       const productsDiv = document.querySelector('#app');
    // in the render method then that is where we are going to add rendering of the product list
    this.cart = new ShoppingCart();
    // now we are going to store the cart
    const cartEl = this.cart.render();
// now we are going to instanciate the class we created.
const productLists = new ProductList()
// we are storing again the productList.render
const prodListElement = productLists.render();
// now we are going to append the cart element and productListElement to the productsDiv 
productsDiv.append(cartEl);
productsDiv.append(prodListElement);
console.log(prodListElement)
  }
}

// now Lets create the overall class called App this class is going to hold everything needed
class App{
  static cart;
  // we are creating the static init method.
  // and we add the Shop class call in here
  static init(){
// then for the items to be displayed on the user Interface we are going to instantiate the Shop class and store it to the variable
// where by the variable will be called to render the render method in the Shop class
const shop = new Shop();
shop.render();
this.cart = shop.cart;
  }
  //now lets create a new method called addProductToCart
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
// to asign a static method to the App class we will use class name.method immediately.
App.init();