let err
if (typeof window !== 'undefined') {
  window.addEventListener('error', function(e) {
    err = e.error
  })
}
const loadScript = url => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.charset = 'utf-8'
  script.async = true
  script.addEventListener('error', () => {
    reject(new Error(`Error loading ${url}`))
  })
  script.addEventListener('load', () => {
    document.head.removeChild(script)
    // Note URL normalization issues are going to be a careful concern here
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
  script.src = url
  document.head.appendChild(script)
})

export default loadScript
