'use strict';
function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let resultc = [];
    let result = [];
    let acc = collection_a.reduce
    ((acc, cur)=>(acc[cur]++ || (acc[cur] = 1), acc), {});
    let keys = Object.keys(acc);
    keys.map(key=> {
        resultc.push({key: key, count: acc[key]})
    })
    resultc.map(item=> {
        if (object_b.value.find(b=>b === item.key)) {
            let   count = item.count - parseInt(item.count / 3);
            result.push({key: item.key, count: count})
        }
        else {
            result.push({key: item.key, count: item.count})
        }
    });

    return result;
}

module.exports = create_updated_collection;
