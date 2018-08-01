# test-beforeeach-next

> Nuxt.js project: test next() in router.beforeEach()

## Build Setup(Nuxt)

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3001
$ npm run dev

# steps of testing
0. open http://localhost:3001/
1. click "1", that will stay page "index", because run "next('/one')" in router.beforeEach().
2. click "2", that will go to page "two", because run "next()" in router.beforeEach().
3. click "back" button of the browser, back to page "index".
4. click "3", that will redirect "http://localhost:3001/one", then it will show "This page could not be found" error, also run "next('/one')" in router.beforeEach() by the way(wrong).
5. type "http://localhost:3001/one" in browser, the same as step 4.

# 
```

## Build Setup(Without Nuxt)
``` bash
# path
cd ./without_nuxt

# install dependencies
$ npm install

# serve with hot reload at localhost:7777
$ npm start

# steps of testing
0. open http://localhost:7777/
1. click "1", that will stay page "index", because run "next('/one')" in router.beforeEach().
2. click "2", that will go to page "two", because run "next()" in router.beforeEach().
3. click "back" button of the browser, back to page "index".
4. click "3", that will redirect "http://localhost:7777/one", then stay in page "index"(correct).
5. type "http://localhost:3001/one" in browser, the same as step 4.
```

