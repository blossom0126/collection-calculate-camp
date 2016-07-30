'use strict';
function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let result = [];
    let count = 0;
    collection_a.map(item=> {
        if (object_b.value.find(b=>b === item.key)) {
            count = item.count - parseInt(item.count / 3);
            result.push({key: item.key, count: count});
        }
        else {
            result.push({key: item.key, count: item.count});
        }
    });
    return result;
}

module.exports = create_updated_collection;
