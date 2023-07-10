function greetingPromise(name) {
    const greeting = `Hello, ${name}!`;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(greeting);
      }, 1000);
    });
  }
  
  const promise = greetingPromise("Mithun");
  
  promise.then((greeting) => {
    console.log(greeting); // Hello, Mithun!
  });
  