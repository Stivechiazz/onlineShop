import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js';


async function loadPage(){
    await loadProductsFetch()

    await new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

    renderOrderSummary();
    renderPaymentSummary();   
}
loadPage();


/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })  
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary(); 
});
*/

/*
new Promise((resolve) =>{   
    loadProducts(()=>{  
        resolve('value1')
    });   
}).then((value)=>{
    console.log(value);
    
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });   
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/



// below is the callback bt ther is too much nesting
/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
