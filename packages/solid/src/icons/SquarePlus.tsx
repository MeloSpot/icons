import { Component, ComponentProps } from 'solid-js';

const SquarePlus: Component<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7Z" fill="#141313"/>
<path d="M7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11L17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13L7 13Z" fill="#141313"/>
<rect x="3" y="3" width="18" height="18" rx="3" stroke="black" stroke-width="2"/>
    </svg>
  );
};
export default SquarePlus;