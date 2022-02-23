/* jshint esversion: 6 */
/* jshint strict: false */
/* jshint node: true */
/* jshint browser: true */
/* jshint strict: global */

'use strict';

const search = function() {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');

    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    });
};

search();