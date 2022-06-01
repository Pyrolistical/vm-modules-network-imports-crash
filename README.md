### network imports by itself works

```
$ npm run network-imports

> network-imports
> node --experimental-network-imports network-imports.js

(node:82485) ExperimentalWarning: Network Imports is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
This string should be capitalized using an https import of lodash.capitalize
```

### vm modules by itself works

```
$ npm run vm-module

> vm-module
> node --experimental-vm-modules vm-module.js

vm modules works by itself
(node:82236) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

### vm modules + network import crashes

```
$ npm run vm-module-network-imports

> vm-module-network-imports
> node --experimental-vm-modules --experimental-network-imports vm-module-network-imports.js

(node:82287) ExperimentalWarning: Network Imports is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
node:internal/vm/module:313
        if (module[kWrap] === undefined) {
                  ^

TypeError: Cannot read properties of undefined (reading 'Symbol(kWrap)')
    at ModuleWrap.<anonymous> (node:internal/vm/module:313:19)
    at async Promise.all (index 0)
    at async SourceTextModule.<computed> (node:internal/vm/module:330:11)
    at async SourceTextModule.link (node:internal/vm/module:197:5)
    at async file:///Users/rchen/dev/projects/github.com/Pyrolistical/vm-modules-plus-network-imports/vm-module-network-imports.js:13:1

Node.js v18.2.0
```
