import difference from '../../core/difference/difference.interface'
export default class ImageMixins {
  data = {
    unloadImg: require("./assets/images/image-load-background.png"),
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
      default: "scaleToFill"
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
  watch = {
    src() {
      this.init()
    }
  }
  methods = {
    async init() {
      if (!this.src) return;
      const data = await difference.getNetworkType()
      if (data.networkType == "none") {
        this.status = this.reload ? "load-refresh" : "load-fail";
      } else {
        this.status = 'loading'
        this.url = this.src;
      }
    },
    __imageOnLoad() {
      this.status = "load-complete";
      this.$cmlEmit("load");
    },
    __imageOnLoadError() {
      this.status = this.reload ? "load-refresh" : "load-fail";
      this.$cmlEmit("error");
    },
    reloadImage() {
      if (this.status == "load-complete") return false;
      let i = this.i;
      this.url = oprateUrl.addUrlParam(this.src, { i });
      this.i = i++;
      this.status = "loading";
    }
  }
}
