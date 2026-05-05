import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Bolt: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M11.5 3.44336C11.8094 3.26473 12.1906 3.26473 12.5 3.44336L19.1602 7.28906C19.4694 7.46764 19.66 7.79722 19.6602 8.1543V15.8457C19.66 16.2028 19.4694 16.5324 19.1602 16.7109L12.5 20.5566C12.1906 20.7353 11.8094 20.7353 11.5 20.5566L4.83984 16.7109C4.53061 16.5324 4.33999 16.2028 4.33984 15.8457V8.1543C4.33999 7.79722 4.53061 7.46764 4.83984 7.28906L11.5 3.44336Z' stroke='black' stroke-width='2'/><circle cx='12' cy='12' r='3' stroke='black' stroke-width='2'/>"
  });
};

Bolt.displayName = 'Bolt';
export default Bolt;