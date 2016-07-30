'use strict';
function count_same_elements(collection) {

    //在这里写入代码
    var result=[],temp=[],c=0,flag,alp,num;
    //初始化中间数组
    for(var i=0;i<collection.length;i++){
      temp[i]={name:collection[0],summary:1};
    }
    //判断输入数组
    for(var i=1;i<collection.length;i++){
      flag=0,alp="",num=0;
      if(collection[i].length>1){
        alp=collection[i].charAt(0);
        num=Number(collection[i].match(/\d+/g));
      }
      else{
        alp=collection[i];
        num=1;
      }
      for(var j=0;j<=c;j++){
        if(alp==temp[j].name){
          flag=1;
          temp[j].summary+=num;
        }
      }
      if(flag==0){
        c++;
        temp[c].name=alp;
        temp[c].summary=num;
      }
    }

    for(var i=0;i<=c;i++){
      result[i]=temp[i];
    }
    return result;


}

module.exports = count_same_elements;
