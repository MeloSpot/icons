import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowLeft: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_92)'><path d='M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11L19 11Z' fill='#141313'/><path d='M6.87868 8.70711C7.2692 8.31658 7.90237 8.31658 8.29289 8.70711C8.68342 9.09763 8.68342 9.7308 8.29289 10.1213L5.81802 12.5962C5.62276 12.7915 5.30617 12.7915 5.11091 12.5962L4.4038 11.8891C4.20854 11.6938 4.20854 11.3772 4.4038 11.182L6.87868 8.70711Z' fill='#141313'/><path d='M4.40382 12.7678C4.20855 12.5725 4.20855 12.2559 4.40382 12.0607L5.11092 11.3536C5.30618 11.1583 5.62277 11.1583 5.81803 11.3536L8.2929 13.8284C8.68343 14.219 8.68343 14.8521 8.2929 15.2426C7.90238 15.6332 7.26921 15.6332 6.87869 15.2426L4.40382 12.7678Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_92'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowLeft.displayName = 'ArrowLeft';
export default ArrowLeft;