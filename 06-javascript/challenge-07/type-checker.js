const typeOf = (value) => {
  if (value === null) return "null";
  if (Number.isNaN(value)) return "nan";

  const type = typeof value;

  if (type !== "object") return type;

  const tag = Object.prototype.toString.call(value);

  switch (tag) {
    case "[object Array]": return "array";
    case "[object Date]": return "date";
    case "[object Map]": return "map";
    case "[object Set]": return "set";
    case "[object RegExp]": return "regexp";
    case "[object Error]": return "error";
    case "[object Promise]": return "promise";
    default: return "object";
      
  }
};
