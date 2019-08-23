export const getViewId = instance => instance.__wxWebviewId__ || instance.$route.path
export const getComponentName = instance => instance.__cml_originOptions__ ? instance.__cml_originOptions__.componentName : instance.$options.componentName
