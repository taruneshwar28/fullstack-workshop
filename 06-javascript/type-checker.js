function getType(value) {
    if(value===null){
        return "null";
    }
    else if(Array.isArray(value)){
        return "array";
    }
    return typeof value;
}

console.log(getType(null));        // "null"
console.log(getType([1, 2, 3]));   // "array"
console.log(getType({ a: 1 }));    // "object"
console.log(getType(() => {}));    // "function"
console.log(getType(42));          // "number"
console.log(getType("hello"));     // "string"