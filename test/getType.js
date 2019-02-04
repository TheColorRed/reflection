/// <reference path="../lib/reflect.d.ts"/>
class ObjectA {
  test() {
    console.log('test')
  }
}

let a = new ObjectA

console.log(a.getType().getProperty('test'))