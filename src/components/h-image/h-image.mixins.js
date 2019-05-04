export default class ImageMixins {
  data = {
    unloadImg: require("./image-load-background.png"),
    show: false,
    url: "",
    i: 0,
    status: "loading"
  };
  props = {
    src: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "widthFix"
    },
    loadingHeight: {
      type: String,
      default: ""
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    reload: {
      type: Boolean,
      default: false
    }
  }
}
