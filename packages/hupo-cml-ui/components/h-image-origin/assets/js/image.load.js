export default src => new Promise((resolve, reject) => {
  if(!src)reject()
  const img = new Image()
  img.onload = resolve
  img.onerror = reject
  img.src = src
  if(img.complete) {
    resolve()
  }
})
