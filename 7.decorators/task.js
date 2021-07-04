function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => hash === item.hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(f, ms) {
    let timeout;
    let flag = false;
  
    return function(...args) {
      if (!flag) {
       f(args);
       flag = true;
       timeout = setTimeout(() => {flag = false;}, ms);
      }
      else {
       return;
      }  
    };
}

function debounceDecorator2(f, ms) {
    let timeout;
    let flag = false;
    let count = 0;
    return function (...args) {
      if (!flag) {
       f(args);
       count++;
       console.log (count);
       flag = true;
       timeout = setTimeout(() => {flag = false;}, ms);
      }
      else {
       return;
      }  
    };
}