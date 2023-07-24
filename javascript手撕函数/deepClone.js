const deepClone = (target, map = new WeakMap()) => {
    //1.处理普通数据类型
    if(target === null || typeof target !== 'object') {
        console.log('=>'  + target);
        return target;
    }
    let cloneTarget;
    const targetType = Object.prototype.toString.call(target);

    //2.处理循环引用对象
    if(map.has(target)) {
        console.log('>>' + JSON.stringify(map.get(target)));
        return map.get(target);           //即返回cloneTarget本身
    }

    //3.处理可遍历的对象
    switch(targetType) {
        //Set对象
        case '[object Set]':
            cloneTarget = new Set();
            map.set(target, cloneTarget);
            target.forEach(value => {
                cloneTarget.add(deepClone(value, map));
            });
            return cloneTarget;
        case '[object Map]':
            cloneTarget = new Map();
            map.set(target, cloneTarget);
            target.forEach((value, key) => {
                cloneTarget.set(key, deepClone(value, map));
            })
            return cloneTarget;
        case '[object Array]':
            cloneTarget = [];
            map.set(target, cloneTarget);
            target.forEach((value, index) => {
                cloneTarget[index] = deepClone(value, map);
            })
            return cloneTarget;
        case '[object Object]':
            cloneTarget = {};
            map.set(target, cloneTarget);
            [...Object.keys(target), ...Object.getOwnPropertySymbols(target)].forEach((item) => {
                console.log(item + ':');
                cloneTarget[item] = deepClone(target[item], map)
            });
            return cloneTarget;
        default:
            return target;
    }
}

const circularObj = { a: 1, b: 2 };
const circularObj2 = { a: 1, b: 2 };
circularObj.c= circularObj;
const clonedCircularObj = deepClone(circularObj); 
console.dir(circularObj);
// console.dir(circularObj2);