## rn-typescript-reacthooks-boilerplate

```
 yarn install && mkdir ~/.rncache && ./node_modules/react-native/scripts/ios-install-third-party.sh && react-native run-ios 
```

## xcode10启动正常，11会报错，解决办法是需要修改node_modules里面react-native/React/Base/RCTModuleMethod.mm文件的 static BOOL RCTParseUnused这个方法

```js
 static BOOL RCTParseUnused(const char **input)
 {
   return RCTReadString(input, "__attribute__((unused))") ||
          RCTReadString(input, "__attribute__((__unused__))") ||
          RCTReadString(input, "__unused");
 }
```

## ios13深色模式 StatusBar content无效问题

> 解决办法：https://github.com/facebook/react-native/issues/26619#issuecomment-536191518
