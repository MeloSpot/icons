import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Rectangle: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<mask id='path-1-inside-1_3404_63' fill='white'><rect x='2' y='6' width='20' height='12' rx='1'/></mask><rect x='2' y='6' width='20' height='12' rx='1' stroke='black' stroke-width='4' mask='url(#path-1-inside-1_3404_63)'/>"
  });
};

Rectangle.displayName = 'Rectangle';
export default Rectangle;