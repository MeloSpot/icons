import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ArrowDownLeft: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_3340_127)'><path d='M16.2855 6.36091C16.676 5.97039 17.3092 5.97039 17.6997 6.36091C18.0903 6.75143 18.0903 7.3846 17.6997 7.77512L7.80024 17.6746C7.40972 18.0651 6.77655 18.0651 6.38603 17.6746C5.9955 17.2841 5.9955 16.6509 6.38603 16.2604L16.2855 6.36091Z' fill='#141313'/><path d='M6.09312 13.3107C6.09312 12.7584 6.54084 12.3107 7.09312 12.3107C7.64541 12.3107 8.09312 12.7584 8.09312 13.3107V16.8107C8.09312 17.0868 7.86927 17.3107 7.59312 17.3107H6.59312C6.31698 17.3107 6.09312 17.0868 6.09312 16.8107V13.3107Z' fill='#141313'/><path d='M7.21446 17.932C6.93832 17.932 6.71446 17.7081 6.71446 17.432V16.432C6.71446 16.1558 6.93832 15.932 7.21446 15.932H10.7145C11.2667 15.932 11.7145 16.3797 11.7145 16.932C11.7145 17.4843 11.2667 17.932 10.7145 17.932H7.21446Z' fill='#141313'/></g><defs><clipPath id='clip0_3340_127'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

ArrowDownLeft.displayName = 'ArrowDownLeft';
export default ArrowDownLeft;