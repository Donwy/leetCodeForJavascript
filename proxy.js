const obj = { foo: 'hello', bar: 'world' }
//当一个对象有多个属性需要被处理时，我们可以使用 Object.defineProperty 来实现响应式系统
Object.defineProperty(obj, 'foo', {
  set(value) {
    // 拦截对象属性的赋值操作，实现响应式
    console.log(`Setting foo to ${value}`)
    this.value = value
  }
})

Object.defineProperty(obj, 'bar', {
  set(value) {
    // 拦截对象属性的赋值操作，实现响应式
    console.log(`Setting bar to ${value}`)
    this.value = value
  }
})

obj.foo = 'hello' // Setting foo to hello
obj.bar = 'world' // Setting bar to world



//当一个对象有多个属性需要被处理，使用proxy 写一个代码
const obj = { foo: 'hello', bar: 'world' }
const proxy = new Proxy(obj, {
  set(target, key, value) {
    // 拦截对象属性的赋值操作，实现响应式
    console.log(`Setting ${key} to ${value}`)
    target[key] = value
  }
})

proxy.foo = 'hello' // Setting foo to hello
proxy.bar = 'world' // Setting bar to world


//当使用 proxy 时，所有对属性的读写操作都会被代理，因此只需要在代理对象创建时进行拦截即可。
//而当使用 Object.defineProperty 时，每一个要实现响应式的属性都需要单独定义 setter 方法来进行拦截，
//因此每次对属性的访问都需要进行拦截。这就导致了 Object.defineProperty 的性能比 proxy 差。