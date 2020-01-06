class Sequence {
  constructor(tasks) {
    this.tasks = tasks;
  }
  run(initial) {
    let input = initial;
    let ctx = {};
    for (const task of this.tasks) {
      if (task.skip && task.skip(input, ctx)) { continue; }
      input = task.task(input, ctx);
      if (task.end && task.end(input, ctx)) { break; }
    }
    return input;
  }
}

module.exports = Sequence;
