<script lang="ts">
  export let size: number | string = 24;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 2;
  export let width: number | string = size;
  export let height: number | string = size;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
>
  <g clip-path="url(#clip0_3333_465)">
<path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V3Z" fill="#141313"/>
<path d="M3 22C2.44772 22 2 21.5523 2 21V21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21V21C22 21.5523 21.5523 22 21 22L3 22Z" fill="#141313"/>
<path d="M20 15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V15Z" fill="#141313"/>
<path d="M2 15C2 14.4477 2.44772 14 3 14V14C3.55228 14 4 14.4477 4 15V21C4 21.5523 3.55228 22 3 22V22C2.44772 22 2 21.5523 2 21V15Z" fill="#141313"/>
<path d="M8.70711 15.1213C8.31658 14.7308 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.7308 13.3166 10.1213 13.7071L12.5962 16.182C12.7915 16.3772 12.7915 16.6938 12.5962 16.8891L11.8891 17.5962C11.6938 17.7915 11.3772 17.7915 11.182 17.5962L8.70711 15.1213Z" fill="#141313"/>
<path d="M12.7678 17.5962C12.5725 17.7915 12.2559 17.7915 12.0607 17.5962L11.3536 16.8891C11.1583 16.6938 11.1583 16.3772 11.3536 16.182L13.8284 13.7071C14.219 13.3166 14.8521 13.3166 15.2426 13.7071C15.6332 14.0976 15.6332 14.7308 15.2426 15.1213L12.7678 17.5962Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3333_465">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>