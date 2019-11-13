
# rollup-typescript


## 構築手順

```
$ npm init -y
$ yarn add -D rollup typescript rollup-plugin-typescript2
$ npx tsc --init
$ vim tsconfig.json
=>
{
  "compilerOptions": {
      :
    "module": "es2015",
      :
  },
    :
}
```


## 実行手順

```
$ yarn install
$ yarn build
$ (browser) ./dist/index.html
=> console.logに`person.greeting()`の結果が出力されている
```
