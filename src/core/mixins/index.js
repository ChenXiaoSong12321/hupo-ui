import difference from './difference.interface'
function copyProperties(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' &&
      key !== 'prototype' &&
      key !== 'name'
    ) {
      const desc = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(target, key, desc)
    }
  }
}
function compose(...funcs) {
  if (funcs.length === 0) return arg => arg
  if (funcs.length === 1) return funcs[0]
  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(...args), last(...args))
}

const LIFE_TIMES = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']

export default function mix(...mixins) {
  const lifetimes = {}
  class Mix {
    constructor() {
      const properties = ['data', 'methods', 'computed', 'watch', 'props']
      for (const Mixin of mixins) {
        const mixin = new Mixin()
        this.composeLifetimes(mixin) // 合并生命周期
        properties.forEach(propertie => {
          if(mixin[propertie]){
            if(!this[propertie])this[propertie] = {}
            copyProperties(this[propertie], mixin[propertie])
          }
        })
      }
    }
    composeLifetimes(mixin) {
      LIFE_TIMES.forEach(lifetime => {
        // 循环合并生命周期
        if (mixin[lifetime]) {
          if (!lifetimes[lifetime])lifetimes[lifetime] = []
          // 缓存生命周期
          lifetimes[lifetime].push(mixin[lifetime])
        }
      })
    }
    beforeCreate(...args) {
      // beforeCreate -- 实例未生成，无法调用 _lifetimes 方法
      const methodsList = lifetimes['beforeCreate']
      if (methodsList && methodsList.length > 0)compose(...methodsList.reverse().map(f => f.bind(this)))(...args)
    }
    created() {
      this._lifetimes('created').apply(this, arguments)
    }
    beforeMount() {
      this._lifetimes('beforeMount').apply(this, arguments)
    }
    mounted() {
      this._lifetimes('mounted').apply(this, arguments)
    }
    beforeDestroy() {
      this._lifetimes('beforeDestroy').apply(this, arguments)
    }
    destroyed() {
      this._lifetimes('destroyed').apply(this, arguments)
    }
    methods = {
      _lifetimes(key) {
        // 执行缓存生命周期
        return function(...args) {
          const methodsList = lifetimes[key]
          if (methodsList && methodsList.length > 0)compose(...methodsList.reverse().map(f => f.bind(this)))(...args)
        }
      },
      $viewportCommonGetCurrentPage() {
        difference.viewportCommonGetCurrentPage()
      },
      $throttle(gapTime = 500) {
        return new Promise((resolve, reject) => {
          const nowTime = +new Date()
          if (!this.__lastTapTime__ || nowTime - this.__lastTapTime__ > gapTime) {
            this.__lastTapTime__ = nowTime
            resolve()
          } else {
            reject('throttle')
          }
        })
      }
    }
  }

  return Mix
}
