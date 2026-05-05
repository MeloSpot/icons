import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const CircleSlash: FunctionalComponent<SVGAttributes> = (props, context) => {
  const { attrs } = context;
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    ...attrs,
    ...props,
    innerHTML: "<g clip-path='url(#clip0_3387_59)'><circle cx='12' cy='12' r='9' stroke='black' stroke-width='2'/><path d='M15.7782 9.70711C16.1687 9.31658 16.1687 8.68342 15.7782 8.29289V8.29289C15.3877 7.90237 14.7545 7.90237 14.364 8.29289L8.70711 13.9497C8.31658 14.3403 8.31658 14.9734 8.70711 15.364V15.364C9.09763 15.7545 9.7308 15.7545 10.1213 15.364L15.7782 9.70711Z' fill='#141313'/></g><defs><clipPath id='clip0_3387_59'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

CircleSlash.displayName = 'CircleSlash';
export default CircleSlash;