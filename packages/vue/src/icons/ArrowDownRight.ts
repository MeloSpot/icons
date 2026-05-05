import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowDownRight: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_99)'><path d='M6.38603 7.73959C5.99551 7.34907 5.99551 6.71591 6.38603 6.32538C6.77656 5.93486 7.40972 5.93486 7.80024 6.32538L17.6997 16.2249C18.0903 16.6154 18.0903 17.2486 17.6997 17.6391C17.3092 18.0296 16.6761 18.0296 16.2855 17.6391L6.38603 7.73959Z' fill='#141313'/><path d='M13.3358 17.932C12.7835 17.932 12.3358 17.4843 12.3358 16.932C12.3358 16.3797 12.7835 15.932 13.3358 15.932H16.8358C17.1119 15.932 17.3358 16.1558 17.3358 16.432V17.432C17.3358 17.7081 17.1119 17.932 16.8358 17.932H13.3358Z' fill='#141313'/><path d='M17.9571 16.8107C17.9571 17.0868 17.7332 17.3107 17.4571 17.3107H16.4571C16.181 17.3107 15.9571 17.0868 15.9571 16.8107V13.3107C15.9571 12.7584 16.4048 12.3107 16.9571 12.3107C17.5094 12.3107 17.9571 12.7584 17.9571 13.3107V16.8107Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_99'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowDownRight.displayName = 'ArrowDownRight';
export default ArrowDownRight;