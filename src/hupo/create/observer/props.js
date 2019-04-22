export function observeProps(props) {
  if (!props) {
    return
  }

  Object.keys(props).forEach(key => {
    let prop = props[key]

    if (prop === null || !('type' in prop)) {
      prop = {
        type: prop
      }
    }

    const _prop = prop
    let observer = _prop.observer

    prop.observer = function() {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer]
        }

        observer.apply(this, arguments)
      }

      this.set()
    }

    props[key] = prop
  })
}
