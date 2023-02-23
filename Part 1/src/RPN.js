function evalRPN(tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!isNaN(token)) {
      // Push numbers onto the stack
      stack.push(parseInt(token));
    } else {
      // Evaluate expressions using the top two numbers on the stack
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          if (b === 0) {
            throw new Error('Division by zero');
          }
          stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }
    }
  }
  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }
  return stack.pop();
}
  
  const tokens = ["4","2","+","5","*"];
  // const tokens = ["4","13","5","/","+"];
  console.log(evalRPN(tokens));