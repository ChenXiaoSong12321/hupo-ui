import { basic } from './basic'
import { observe } from './observer/index'

// set properties alias
const alias = {
  data: 'data',
  props: 'properties',
  properties: 'properties',
  mixins: 'behaviors',
  behaviors: 'behaviors',
  methods: 'methods',
  mounted: 'ready',
  ready: 'ready',
  relations: 'relations',
  destroyed: 'detached',
  classes: 'externalClasses'
}

function isPlainObj(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function mapKeys(source, target, map) {
  Object.keys(map).forEach(key => {
    if (source[key]) {
      target[map[key]] = isPlainObj(target[map[key]]) ? Object.assign(target[map[key]], source[key]) : source[key]
    }
  })
}

export const HupoComponent = function(hupoOptions) {
  if (hupoOptions === void 0) hupoOptions = {}

  const options = {}
  mapKeys(hupoOptions, options, alias)
  const _hupoOptions = hupoOptions

  // add relation
  const relation = _hupoOptions.relation

  if (relation) {
    // options.relations = Object.assign(options.relations || {}, { [`../${relation.name}`/index`]: relation })  // 使用模板字符串会出问题
    options.relations = Object.assign(options.relations || {}, { ['../' + relation.name + '/index']: relation })
  }

  // add externalClasses
  options.externalClasses = options.externalClasses || []
  options.externalClasses.push('custom-class')

  // add behaviors
  options.behaviors = options.behaviors || []

  // merge properties
  options.properties = Object.assign(options.properties || {}, ...options.behaviors.map(v => isPlainObj(v) ? v.properties : {}))

  options.behaviors = options.behaviors.map(v => isPlainObj(v) ? Behavior(v) : v)
  options.behaviors.push(basic)

  // map field to form-field behavior
  if (hupoOptions.field) options.behaviors.push('wx://form-field')

  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  }

  // add watch and computed
  observe(hupoOptions, options)
  Component(options)
}
