import vm from "node:vm";

const module = new vm.SourceTextModule(`
console.log('vm modules works by itself');
`);

await module.link(() => {});

await module.evaluate();
