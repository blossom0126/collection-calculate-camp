'use strict';
var single_element = function(collection) {
    let result = collection.filter((item, key)=>key % 2 !==0 );
    let keys = result.filter((item, key, self)=> {
        return item === self[key + 1];
    });
    return result.filter((item)=> {
       return keys.find(b=>b===item)===undefined?true:false;
        });
};
module.exports = single_element;
