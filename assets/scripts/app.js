

// lets create the class which will be the blueprint of the object when I talk about blueprint I mean defining the way properties and methods of the object
// are going to look like.

class Product {
  title = 'Default'; // this is the default property which is the instance
  imageUrl;
  description;
  price;

  // since the properties will change we are going to create a method to use which is a constructor method
  // the constructor method is there to help with taking arguments that will be changed since the title or the image Url is not going to be the same everywhere.
  // that is why in the constructor curry bracels we are going to assign the properties of the class to the arguments of cpnstructor values.

  constructor(title,image,desc,price){
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price

  }
}
// how to add that class then as the new object then, you just go where you need it and use new then class name remember this will be assigned as a new object with same properties as the reference class.



// now that we created the array for the products, now we are going to create the object to store that the above commented array

const productsList = {
  products: [
    // then since the products are the ones which hold object of on product then 
    // we are going to call the instance of a class here using the new keyword
    new Product(
                'Ferari portofino',
                'https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-portofino-m-117-1621623712.jpg?crop=0.720xw:0.540xh;0.104xw,0.364xh&resize=1200:*',
                'This is a nive ferari incase you miss it.',
                23.5
                ),
    new Product(
                'Mercedes-Benz C-Class',
                'https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg',
                'This is a smooth sport car you have ever taste.',
                50
                )  
  ],

  // now we are going to create a render method as the third element of the object productsList
  // again the render method is going to hold all the functionalities to render the product to the user interface.

  render() {
    // lets first target the dicision from html where the ul and li's are going to be appended
    const productsDiv = document.querySelector('#app');
    // now lets just create a new element which is a ul element
    const prodList = document.createElement('ul')
    // now lets assing a class to the prodList variable
    prodList.classList.add('product-list');
    // now that we have the ul lets now add each product then as ana element to achieve this we are going to use for each on products to target each product
    // we are going to use this keyword since we are targeting the products array from this produtsList object
    this.products.forEach(prod => {
      // let first create that li element
      const productElement = document.createElement('li');
      // Lets assign a class on it
      productElement.classList.add('product-item');
      // lets then use innerHtml to add the obect literals
      productElement.innerHTML = `
  <div>
    <img src="${prod.imageUrl}" alt="${prod.title}">
    
    <div class="product-item__content">
    
      <h2>${prod.title}</h2>
    
      <h3>\$${prod.price}</h3>
    
      <p>${prod.description}</p>
    
      <button>Add to Cart</button>

    </div>
</div> 
    
    `
    // we are going to append elements accordingly
    prodList.prepend(productElement);
    productsDiv.prepend(prodList);
    })
  }
}

productsList.render();