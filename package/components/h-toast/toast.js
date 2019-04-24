import difference from '../../core/difference/difference.interface';
const isObj = x => {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  duration: 3000,
  selector: 'h-toast'
}

const parseOptions = message => isObj(message) ? message : { message };

let queue = [];
let currentOptions = { ...defaultOptions };

function Toast(options = {}) {
  options = {...currentOptions,...parseOptions(options)}
  
  let ctx = difference.getCurrentPage()
  const toast = difference.selectComponent(ctx,options.selector)

  delete options.selector;

  queue.push(toast);
  Object.keys(options).forEach(key=>{
    console.log(key,toast[key],options[key])
    toast[key] = options[key]
  })
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.show = false
      queue = queue.filter(item => item !== toast);
    }, options.duration);
  }

  return toast;
}

const createMethod = type => {
  return options => Toast({
    type, ...parseOptions(options)
  })
}

['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  queue.forEach(toast => {
    toast.show = false
  });
  queue = [];
};

Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
};

export default Toast;
