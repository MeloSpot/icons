import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowDown: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_78)'><path d='M11.0502 5C11.0502 4.44772 11.498 4 12.0502 4C12.6025 4 13.0502 4.44772 13.0502 5V19C13.0502 19.5523 12.6025 20 12.0502 20C11.498 20 11.0502 19.5523 11.0502 19V5Z' fill='#141313'/><path d='M8.75735 17.1213C8.36683 16.7308 8.36683 16.0976 8.75735 15.7071C9.14788 15.3166 9.78104 15.3166 10.1716 15.7071L12.6464 18.182C12.8417 18.3772 12.8417 18.6938 12.6464 18.8891L11.9393 19.5962C11.7441 19.7915 11.4275 19.7915 11.2322 19.5962L8.75735 17.1213Z' fill='#141313'/><path d='M12.818 19.5962C12.6228 19.7915 12.3062 19.7915 12.1109 19.5962L11.4038 18.8891C11.2085 18.6938 11.2085 18.3772 11.4038 18.182L13.8787 15.7071C14.2692 15.3166 14.9024 15.3166 15.2929 15.7071C15.6834 16.0976 15.6834 16.7308 15.2929 17.1213L12.818 19.5962Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_78'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;