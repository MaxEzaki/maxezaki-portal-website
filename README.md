# maxezaki.com

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).



## ここからはログ的なやつ
### 画像パス問題
2018/10/02 -----
webpack.config.js のfile-loaderをいじることによって解決しそう
画像出力先とか参照先をここで設定できるっぽい
というかできた