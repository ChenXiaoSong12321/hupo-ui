export const beforeCreate = ctx => {
  // #ifdef H5
  ctx.$options.components.hRichTextParseBase = require('./components/base/h-rich-text-parse-base').default
  // #endif
}
