'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear)
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle)
}


function compareTitle(a, b) {
  let aTitle = a.title;
  let bTitle = b.title;

  if(a.title.slice(0, 4) === 'The ') aTitle = a.title.slice('4');
  if(b.title.slice(0, 4) === 'The ') bTitle = b.title.slice('4');

  // if(a.title.includes('The ')) a.title.replace('The ', '');
  // if(b.title.includes('The ')) b.title.replace('The ', '');
  // if(a.title === b.title) return 0;
  // if(a.title < b.title) return 1;
  // if(a.title > b.title) return -1;

  return aTitle > bTitle ? 1 : -1;
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle}