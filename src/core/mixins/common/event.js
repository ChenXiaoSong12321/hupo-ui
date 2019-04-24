import difference from '../../difference/difference.interface'

export default class Event {
  mounted() {
    const app = difference.getApp()
    console.log(app)
  }
  methods = {
  }
}
