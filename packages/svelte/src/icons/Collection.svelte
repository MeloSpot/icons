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
  <mask id="path-1-inside-1_3404_72" fill="white">
<rect x="2" y="9" width="20" height="12" rx="1"/>
</mask>
<rect x="2" y="9" width="20" height="12" rx="1" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3404_72)"/>
<rect x="20" y="6" width="2" height="16" rx="0.5" transform="rotate(90 20 6)" fill="#141313"/>
<rect x="18" y="3" width="2" height="12" rx="0.5" transform="rotate(90 18 3)" fill="#141313"/>
</svg>