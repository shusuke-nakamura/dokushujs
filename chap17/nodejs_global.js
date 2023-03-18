// windowオブジェクトはない
// console.log(window);

// その代わりグローバル(global)が使用できる。
console.log(global);
/*
{
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 39.83289999992121,
      nodeStart: 1.764699999941513,
      v8Start: 4.499199999962002,
      bootstrapComplete: 29.838799999910407,
      environment: 13.794499999959953,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1679103750101.63
  },
  fetch: [AsyncFunction: fetch]
}
*/

// グローバルオブジェクト(global)は記述を省略できる。
setTimeout(() => {
  console.log("hello");
}, 1000);
