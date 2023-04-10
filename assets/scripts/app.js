// lets first create the array of the products this will be pasted in the object that we will create later on

// const products = [
//   {
//     title: 'Ferari portofino',
//     ImageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-portofino-m-117-1621623712.jpg?crop=0.720xw:0.540xh;0.104xw,0.364xh&resize=1200:*',
//     price:23.5,
//     description:'This is a nive ferari incase you miss it.'
//   },
//   {
//     title: 'Mercedes-Benz C-Class',
//     ImageUrl: 'https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg',
//     price:40,
//     description:'This is a smooth sport car you have ever taste.'
//   },
// ]

// now that we created the array for the products, now we are going to create the object to store that the above commented array

const productsList = {
  products: [
    {
      title: 'Ferari portofino',
      ImageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-portofino-m-117-1621623712.jpg?crop=0.720xw:0.540xh;0.104xw,0.364xh&resize=1200:*',
      price: 23.5,
      description: 'This is a nive ferari incase you miss it.'
    },
    {
      title: 'Mercedes-Benz C-Class',
      ImageUrl: 'https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg',
      price: 40,
      description: 'This is a smooth sport car you have ever taste.'
    },
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
    <img src="${prod.ImageUrl}" alt="${prod.title}">
    
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