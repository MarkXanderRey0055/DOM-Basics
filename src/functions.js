const main = document.getElementById('main');

const products = Array.from (main 
                .firstElementChild
                .lastElementChild
                .children);

const cart = main.firstElementChild.nextElementSibling;


products.forEach ((product) => {
    product.addEventListener ('click', () => {
        const div = document.createElement ('div');
        const productName = document.createElement ('h6');
        const price = document.createElement ('small');
        
        productName.innerText = product 
                                .nextElementSibling
                                .innerText
                                
        div.classList.add('bg-pink-400','p-10');
        div.append(productName);
        console.log(div);
        
    // console.log ( product 
    //                .nextElementSibling
    //               .innerText)

    cart.append(div);
    })
})

// .firstElementChild
//         .firstElementChild
//         .nextElementSibling
//         .children;