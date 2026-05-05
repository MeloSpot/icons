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
  <g clip-path="url(#clip0_3406_113)">
<path d="M13.0502 17C13.0502 17.5523 12.6025 18 12.0502 18V18C11.4979 18 11.0502 17.5523 11.0502 17L11.0502 7C11.0502 6.44772 11.4979 6 12.0502 6V6C12.6025 6 13.0502 6.44772 13.0502 7L13.0502 17Z" fill="#141313"/>
<path d="M15.2929 8.87868C15.6834 9.2692 15.6834 9.90237 15.2929 10.2929V10.2929C14.9024 10.6834 14.2692 10.6834 13.8787 10.2929L11.4038 7.81802C11.2085 7.62276 11.2085 7.30617 11.4038 7.11091L12.1109 6.4038C12.3062 6.20854 12.6228 6.20854 12.818 6.4038L15.2929 8.87868Z" fill="#141313"/>
<path d="M11.2323 6.40381C11.4275 6.20855 11.7441 6.20855 11.9394 6.40381L12.6465 7.11091C12.8417 7.30618 12.8417 7.62276 12.6465 7.81802L10.1716 10.2929C9.78108 10.6834 9.14791 10.6834 8.75739 10.2929V10.2929C8.36686 9.90237 8.36686 9.26921 8.75739 8.87868L11.2323 6.40381Z" fill="#141313"/>
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_3406_113">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>