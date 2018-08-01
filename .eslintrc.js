// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  //add your custom rules here
  //"off" or 0 - turn the rule off
  //"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  //"error" or 2 - turn the rule on as an error (exit code will be 1)
  'rules': {
    //----------------------------------------------------------------------------------------------------
    //disallow trailing whitespace at the end of lines
    // 禁用行尾空格
    //https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 0,
    //disallow multiple empty lines
    // 不允许多个空行
    //https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 0,
    //enforce consistent spacing after the // or /* in a comment
    // 强制在注释中 // 或 /* 使用一致的空格
    //https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 0,
    // enforce consistent indentation
    //强制一致的缩进
    //https://eslint.org/docs/rules/indent
    'indent': 0,
    //disallow the use of console
    //不允许使用console
    //https://eslint.org/docs/rules/no-console
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'off', {allow: ['warn', 'error']}],
    //disallow await inside of loops
    //不允许再循环中使用await语法
    //https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 0,
    //----------------------------------------------------------------------------------------------------
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //disallow template literal placeholder syntax in regular strings
    //只能使用'`'符号用于模板语法
    //https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 2,
    //enforce valid JSDoc comments
    //强制使用正确的JSDoc
    //https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 2,
    //enforce getter and setter pairs in objects
    //强制set和get成双使用
    //https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 2,
    //enforce return statements in callbacks of array methods
    //强制给数组扩展方法带上返回值
    //https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 2,
    //enforce the use of variables within the scope they are defined
    //强制使用该变量再其变量的作用域内
    //https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 2,
    //enforce that class methods utilize this
    //在类中没有使用this的方法, 建议转换为static方法
    //https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 1,
    //enforce a maximum cyclomatic complexity allowed in a program
    //排除不合理的路径
    //https://eslint.org/docs/rules/complexity
    'complexity': 0,
    //require default cases in switch statements
    //强制switch带default
    //https://eslint.org/docs/rules/default-case
    'default-case': 2,
    //disallow the use of alert, confirm, and prompt
    //不允许使用alert,confirm,prompt
    //https://eslint.org/docs/rules/no-alert
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    //disallow the use of arguments.caller or arguments.callee
    //不允许使用arguments.caller和arguments.callee
    //https://eslint.org/docs/rules/no-caller
    'no-caller': 2,
    //disallow division operators explicitly at the beginning of regular expressions
    //不允许正则表达式开始除看起来像除法算符
    //https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 2,
    //disallow else blocks after return statements in if statements
    //不允许else块在return之后
    //https://eslint.org/docs/rules/no-else-return
    'no-else-return': 2,
    //disallow empty functions
    //不允许空函数(除非带上注释)
    //https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    //disallow null comparisons without type-checking operators
    //不允许与null作==或!=比较, 只能用===或!==
    //https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 2,
    //disallow the use of eval()
    //不允许使用eval
    //https://eslint.org/docs/rules/no-eval
    'no-eval': 2,
    //disallow extending native types
    //不允许给自带的类型用defineProperty扩展属性
    //https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 2,
    //disallow unnecessary calls to .bind()
    //不允许不必要的bind使用
    //https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 2,
    //disallow unnecessary labels
    //不允许不必要的label
    //https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,
    //disallow leading or trailing decimal points in numeric literals
    //不允许'.5'代替'0.5'类似的用法
    //https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,
    //disallow shorthand type conversions
    //避免隐晦难识别的类型转换方式
    //https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 2,
    //disallow the use of eval()-like methods
    //不允许隐晦的eval的使用
    //https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 2,
    //disallow this keywords outside of classes or class-like objects
    //不允许this关键字在非class或class类似的对象中使用
    //https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 2,
    //disallow the use of the __iterator__ property
    //不允许使用__iterator__属性(不支持的浏览器会报错)
    //https://eslint.org/docs/rules/no-iterator
    'no-iterator': 2,
    //disallow labeled statements
    //避免使用label, 防止难以发现的死循环
    //https://eslint.org/docs/rules/no-labels
    'no-labels': 2,
    //disallow unnecessary nested blocks
    //避免不必要的block使用
    //https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,
    //disallow function declarations and expressions inside loop statements
    //不允许在循环中定义function
    //https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 2,
    //disallow multiple spaces
    //不允许重复的空格
    //https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 2,
    //disallow multiline strings
    //不允许用/符号实现多行字符串
    //https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 2,
    //disallow new operators outside of assignments or comparisons
    //不允许无处理的new操作
    //https://eslint.org/docs/rules/no-new
    'no-new': 2,
    //disallow new operators with the Function object
    //禁止使用new Function方式创建函数
    //https://eslint.org/docs/rules/no-new-func
    'no-new-func': 2,
    //disallow new operators with the String, Number, and Boolean objects
    //不允许new操作符用在String, Number, Boolean对象
    //https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,
    //disallow octal escape sequences in string literals
    //不允许10进制用在字符串字面值
    //https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 2,
    //disallow reassigning function parameters
    //不允许函数修改参数值, 避免难以检测的问题
    //https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 2,
    //disallow the use of the __proto__ property
    //不允许使用__proto__属性, 已过期的语法
    //https://eslint.org/docs/rules/no-proto
    'no-proto': 2,
    //disallow assignment operators in return statements
    //不允许return中使用赋值语句
    //https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 2,
    //disallow unnecessary return await
    //不允许不必要的return await, 防止误解
    //https://eslint.org/docs/rules/no-return-await
    'no-return-await': 2,
    //disallow javascript: urls
    //不允许location.href = "javascript:void(0)";
    //https://eslint.org/docs/rules/no-script-url
    'no-script-url': 1,
    //disallow comparisons where both sides are exactly the same
    //不允许自相对比
    //https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 2,
    //disallow comma operators
    //逗号操作符的一些限制
    //https://eslint.org/docs/rules/no-sequences
    'no-sequences': 2,
    //disallow throwing literals as exceptions
    //限制throw必须返回Error对象
    //https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 2,
    //disallow unmodified loop conditions
    //不允许没有变化的循环条件
    //https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    //disallow unused expressions
    //不允许没有使用的表达式
    //https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 2,
    //disallow unnecessary calls to .call() and .apply()
    //不允许无用的call表达式
    //https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 2,
    //disallow unnecessary concatenation of literals or template literals
    //不允许无用的字符串拼接
    //https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,
    //disallow redundant return statements
    //不允许无用的return
    //https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 2,
    //disallow void operators
    //不允许使用void操作符
    //https://eslint.org/docs/rules/no-void
    'no-void': 2,
    //disallow with statements
    //不允许使用with操作符
    //https://eslint.org/docs/rules/no-with
    'no-with': 2,
    //require using Error objects as Promise rejection reasons
    //强制promise reject一个Error对象
    //https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 2,
    //disallow async functions which have no await expression
    //强制await和async配合使用
    //https://eslint.org/docs/rules/require-await
    'require-await': 2,
    //require parentheses around immediate function invocations
    //立即执行function的使用需要()包裹
    //https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 2,
    //require or disallow “Yoda” conditions
    //不使用yoda风格的判断语句
    //https://eslint.org/docs/rules/yoda
    'yoda': 2,
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    'no-inner-declarations': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 0,//process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-empty': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // // 要求箭头函数的参数使用圆括号
    // 'arrow-parens': 0,
    // // 强制 generator 函数中 * 号周围使用一致的空格
    // 'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-unreachable': process.env.NODE_ENV === 'production' ? 2 : 1,
    // // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    // 'semi': 'off',

    // // 强制使用一致的反勾号、双引号或单引号
    // 'quotes': 0,
    // // 禁止出现未使用过的变量
    // 'no-unused-vars': 0,
    // // 要求或禁止块内填充
    // 'padded-blocks': 0,

    // // 禁用不必要的嵌套块
    // 'no-lone-blocks': 0,
    // // 禁止使用 var 多次声明同一变量
    // 'no-redeclare': 1,
    // // 缩进
    // 'indent': 0,
    // //enforce consistent spacing before function definition opening parenthesis
    // //函数名或function与后面的'('号之间是否需要一个空格(例如:'withoutSpace(x)' 'withSpace (x)')
    // //https://eslint.org/docs/rules/space-before-function-paren
    // 'space-before-function-paren': 0,
    // //disallow the use of undeclared variables unless mentioned in /*global */ comments
    //不允许使用为声明的变量(除非给予特等的注释说明)
    //https://eslint.org/docs/rules/no-undef
    'no-undef': 0,
    // //enforce consistent spacing between keys and values in object literal properties
    // //对象中key和value之间空格的约定, 详情参考下面的地址
    // //https://eslint.org/docs/rules/key-spacing
    // 'key-spacing': 0
    'no-irregular-whitespace': 0
  }
}
