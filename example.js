const Sequence = require('.');

const s = new Sequence([
  {
    task: (input, ctx) => {
      console.log('First task, got ' + input + ', ctx is ' + JSON.stringify(ctx)); 
      ctx.foo = 'bar';
      return 3;
    }
  },
  {
    task: (input, ctx) => {
      console.log('Second task, got ' + input + ', ctx is ' + JSON.stringify(ctx)); 
      ctx.baz = 'boo';
      return 5;
    }
  },
  {
    skip: (input, ctx) => ctx.baz === 'boo',
    task: () => console.log('This should not be seen')
  },
  {
    task: (input, ctx) => {
      console.log('Third task, got ' + input + ', ctx is ' + JSON.stringify(ctx)); 
      ctx.loo = 'goo';
      return 7;
    },
    end: (input, ctx) => input === 7
  },
  {
    task: () => console.log('This should not be seen')
  }
]);
console.log(s.run(10));
