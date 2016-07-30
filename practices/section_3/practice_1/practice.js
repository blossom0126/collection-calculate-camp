'use strict'
function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let result = [];
    collection_a.map(item=> {
        if (object_b.value.find(b=>b === item.key)) {
            return result.push({key: item.key, count: item.count - 1});
        }
        else
            return result.push({key: item.key, count: item.count});
    })
    return result;
}

module.exports = create_updated_collection;
