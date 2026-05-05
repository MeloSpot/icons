import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowUpRight: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_113)'><path d='M7.76471 17.6391C7.37418 18.0296 6.74102 18.0296 6.3505 17.6391C5.95997 17.2486 5.95997 16.6154 6.3505 16.2249L16.25 6.32538C16.6405 5.93485 17.2737 5.93485 17.6642 6.32538C18.0547 6.7159 18.0547 7.34907 17.6642 7.73959L7.76471 17.6391Z' fill='#141313'/><path d='M17.9571 10.6893C17.9571 11.2416 17.5094 11.6893 16.9571 11.6893C16.4048 11.6893 15.9571 11.2416 15.9571 10.6893V7.18934C15.9571 6.9132 16.181 6.68934 16.4571 6.68934H17.4571C17.7332 6.68934 17.9571 6.9132 17.9571 7.18934V10.6893Z' fill='#141313'/><path d='M16.8358 6.06802C17.1119 6.06802 17.3358 6.29188 17.3358 6.56802V7.56802C17.3358 7.84416 17.1119 8.06802 16.8358 8.06802H13.3358C12.7835 8.06802 12.3358 7.6203 12.3358 7.06802C12.3358 6.51574 12.7835 6.06802 13.3358 6.06802H16.8358Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_113'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowUpRight.displayName = 'ArrowUpRight';
export default ArrowUpRight;