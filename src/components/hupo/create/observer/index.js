import { behavior } from './behavior'
import { observeProps } from './props'
export function observe(hupoOptions, options) {
  const watch = hupoOptions.watch
  const computed = hupoOptions.computed
  options.behaviors.push(behavior)

  if (watch) {
    const props = options.properties || {}
    Object.keys(watch).forEach(key => {
      if (key in props) {
        let prop = props[key]

        if (prop === null || !('type' in prop)) {
          prop = {
            type: prop
          }
        }

        prop.observer = watch[key]
        props[key] = prop
      }
    })
    options.properties = props
  }

  if (computed) {
    options.methods = options.methods || {}

    options.methods.$options = function() {
      return hupoOptions
    }

    if (options.properties) {
      observeProps(options.properties)
    }
  }
}
