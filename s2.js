function manipulateString(string) {
    const uppercaseString = string.toUpperCase();
  
    const logString = () => {
      console.log(`The manipulated string is: ${uppercaseString}`);
    };
  
    return logString;
  }
  
  const string = "hello world";
  
  const logString = manipulateString(string);
  logString(); // The manipulated string is: HELLO WORLD
  