import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Collection: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<mask id='path-1-inside-1_3404_72' fill='white'><rect x='2' y='9' width='20' height='12' rx='1'/></mask><rect x='2' y='9' width='20' height='12' rx='1' stroke='black' stroke-width='4' mask='url(#path-1-inside-1_3404_72)'/><rect x='20' y='6' width='2' height='16' rx='0.5' transform='rotate(90 20 6)' fill='#141313'/><rect x='18' y='3' width='2' height='12' rx='0.5' transform='rotate(90 18 3)' fill='#141313'/>"
  });
};

Collection.displayName = 'Collection';
export default Collection;