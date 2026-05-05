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
  <g clip-path="url(#clip0_3340_58)">
<path d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 5C11 4.44771 11.4477 4 12 4C12.5523 4 13 4.44771 13 5L13 19Z" fill="#141313"/>
<path d="M15.2929 6.87868C15.6834 7.2692 15.6834 7.90237 15.2929 8.29289C14.9024 8.68342 14.2692 8.68342 13.8787 8.29289L11.4038 5.81802C11.2085 5.62276 11.2085 5.30617 11.4038 5.11091L12.1109 4.4038C12.3062 4.20854 12.6228 4.20854 12.818 4.4038L15.2929 6.87868Z" fill="#141313"/>
<path d="M11.2322 4.40381C11.4275 4.20855 11.7441 4.20855 11.9393 4.40381L12.6464 5.11091C12.8417 5.30618 12.8417 5.62276 12.6464 5.81802L10.1716 8.2929C9.78105 8.68342 9.14788 8.68342 8.75736 8.2929C8.36683 7.90237 8.36683 7.26921 8.75736 6.87868L11.2322 4.40381Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3340_58">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>