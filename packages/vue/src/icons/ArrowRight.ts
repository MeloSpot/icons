import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowRight: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_85)'><path d='M5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L5 13Z' fill='#141313'/><path d='M17.1213 15.2929C16.7308 15.6834 16.0976 15.6834 15.7071 15.2929C15.3166 14.9024 15.3166 14.2692 15.7071 13.8787L18.182 11.4038C18.3772 11.2085 18.6938 11.2085 18.8891 11.4038L19.5962 12.1109C19.7915 12.3062 19.7915 12.6228 19.5962 12.818L17.1213 15.2929Z' fill='#141313'/><path d='M19.5962 11.2322C19.7914 11.4275 19.7914 11.7441 19.5962 11.9393L18.8891 12.6464C18.6938 12.8417 18.3772 12.8417 18.182 12.6464L15.7071 10.1716C15.3166 9.78105 15.3166 9.14788 15.7071 8.75736C16.0976 8.36683 16.7308 8.36683 17.1213 8.75736L19.5962 11.2322Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_85'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;