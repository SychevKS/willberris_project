/* jshint esversion: 6 */
/* jshint strict: false */
/* jshint node: true */
/* jshint browser: true */
/* jshint strict: global */

'use strict';


const cart = function() {
    const btnCart = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const closeBtnCart = cart.querySelector('.modal-close');

    btnCart.addEventListener('click', function() {
        cart.style.display = 'flex';
    });

    closeBtnCart.addEventListener('click', function() {
        cart.style.display = '';
    });
};

cart();