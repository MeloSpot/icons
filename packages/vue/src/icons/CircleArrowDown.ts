import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const CircleArrowDown: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3366_133)'><path d='M10.9498 7C10.9498 6.44772 11.3975 6 11.9498 6C12.502 6 12.9498 6.44772 12.9498 7V17C12.9498 17.5523 12.502 18 11.9498 18C11.3975 18 10.9498 17.5523 10.9498 17V7Z' fill='#141313'/><path d='M8.70711 15.1213C8.31658 14.7308 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.7308 13.3166 10.1213 13.7071L12.5962 16.182C12.7915 16.3772 12.7915 16.6938 12.5962 16.8891L11.8891 17.5962C11.6938 17.7915 11.3772 17.7915 11.182 17.5962L8.70711 15.1213Z' fill='#141313'/><path d='M12.7678 17.5962C12.5725 17.7915 12.2559 17.7915 12.0607 17.5962L11.3536 16.8891C11.1583 16.6938 11.1583 16.3772 11.3536 16.182L13.8284 13.7071C14.219 13.3166 14.8521 13.3166 15.2426 13.7071C15.6332 14.0976 15.6332 14.7308 15.2426 15.1213L12.7678 17.5962Z' fill='#141313'/><circle cx='12' cy='12' r='9' stroke='black' stroke-width='2'/></g><defs><clipPath id='clip0_3366_133'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

CircleArrowDown.displayName = 'CircleArrowDown';
export default CircleArrowDown;