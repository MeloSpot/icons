import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const List: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M3 16C3.55228 16 4 16.4477 4 17C4 17.5523 3.55228 18 3 18C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16Z' fill='#141313'/><path d='M3 11C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11Z' fill='#141313'/><path d='M3 6C3.55228 6 4 6.44772 4 7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6Z' fill='#141313'/><path d='M21 6C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8L7 8C6.44771 8 6 7.55228 6 7C6 6.44772 6.44771 6 7 6L21 6Z' fill='#141313'/><path d='M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L7 13C6.44771 13 6 12.5523 6 12C6 11.4477 6.44771 11 7 11L21 11Z' fill='#141313'/><path d='M21 16C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18L7 18C6.44771 18 6 17.5523 6 17C6 16.4477 6.44771 16 7 16L21 16Z' fill='#141313'/>"
  });
};

List.displayName = 'List';
export default List;