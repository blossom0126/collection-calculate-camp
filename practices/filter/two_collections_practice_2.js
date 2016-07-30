'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  let union=collection_a.concat(collection_b.filter(item=>{
    return collection_a.find(a=>a===item)===undefined?true:false}));
  let intersection=[];
    collection_a.find(item=>collection_b.find
    (num=>{if(num===item){intersection.push(item);}}));
  let complementaire=union.filter(item=>{
    return intersection.find(b=>item===b)===undefined?true:false})
  return complementaire;
}

module.exports = choose_no_common_elements;
