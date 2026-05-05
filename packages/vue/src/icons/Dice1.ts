import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Dice1: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2L21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4L3 4Z' fill='#141313'/><path d='M3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2L21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4L3 4Z' fill='#141313'/><path d='M3 22C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22L3 22Z' fill='#141313'/><path d='M2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3Z' fill='#141313'/><path d='M2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3Z' fill='#141313'/><path d='M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z' fill='#141313'/><path d='M12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11Z' fill='#141313'/>"
  });
};

Dice1.displayName = 'Dice1';
export default Dice1;