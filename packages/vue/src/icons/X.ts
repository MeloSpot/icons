import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const X: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3366_114)'><path d='M5.07107 6.34315C4.68054 5.95262 4.68054 5.31946 5.07107 4.92893C5.46159 4.53841 6.09476 4.53841 6.48528 4.92893L19.2132 17.6569C19.6037 18.0474 19.6037 18.6805 19.2132 19.0711C18.8227 19.4616 18.1895 19.4616 17.799 19.0711L5.07107 6.34315Z' fill='#141313'/><path d='M6.48528 19.0711C6.09476 19.4616 5.46159 19.4616 5.07107 19.0711C4.68054 18.6805 4.68054 18.0474 5.07107 17.6569L17.799 4.92893C18.1895 4.53841 18.8227 4.53841 19.2132 4.92893C19.6037 5.31946 19.6037 5.95262 19.2132 6.34315L6.48528 19.0711Z' fill='#141313'/></g><defs><clipPath id='clip0_3366_114'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

X.displayName = 'X';
export default X;