# Reproduce error

```
npm install
npm run generate
npm run build
```
and finally
```
$ npm run build

> nameclashes@1.0.0 build /tmp/sic-test
> tsc -p .

$ node dist/src/main.js 
/tmp/sic-test/dist/generated/b.js:20
        return extendStatics(d, b);
               ^

TypeError: Object prototype may only be an Object or null: undefined
    at setPrototypeOf (<anonymous>)
    at extendStatics (/tmp/sic-test/dist/generated/b.js:20:16)
    at __extends (/tmp/sic-test/dist/generated/b.js:23:9)
    at /tmp/sic-test/dist/generated/b.js:59:5
    at Object.<anonymous> (/tmp/sic-test/dist/generated/b.js:106:2)
    at Module._compile (internal/modules/cjs/loader.js:1185:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1205:10)
    at Module.load (internal/modules/cjs/loader.js:1034:32)
    at Function.Module._load (internal/modules/cjs/loader.js:923:14)
    at Module.require (internal/modules/cjs/loader.js:1074:19)
```