import mix from './index'
export default function component(Current){
  const Component = mix(Current)
  return new Component()
}
