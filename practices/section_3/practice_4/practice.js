'use strict';
function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let result = [], temp = [], c = 0;
    for (let i = 0; i < collection_a.length; i++) {
        temp[i] = {key: collection_a[0], count: 1};
    }
    for (let i = 1; i < collection_a.length; i++) {
        let flag = 0, alp = "";
        let num = 0;
        if (collection_a[i].length > 1) {
            alp = collection_a[i].charAt(0);
            num = Number(collection_a[i].match(/\d+/g));
        }
        else {
            alp = collection_a[i];
            num = 1;
        }
        for (let j = 0; j <= c; j++) {
            if (alp == temp[j].key) {
                flag = 1;
                temp[j].count += num;
            }
        }
        if (flag == 0) {
            c++;
            temp[c].key = alp;
            temp[c].count = num;
        }
    }

    for (let i = 0; i <= c; i++) {
        result[i] = temp[i];
    }
    let re = [];
    result.map(item=> {
        if (object_b.value.find(b=>b === item.key)) {
            let count = item.count - parseInt(item.count / 3);
            re.push({key: item.key, count: count})
        }
        else {
            re.push({key: item.key, count: item.count})
        }
    })
    return re;
}

module.exports = create_updated_collection;




