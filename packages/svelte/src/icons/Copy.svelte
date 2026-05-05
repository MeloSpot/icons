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
  <mask id="path-1-inside-1_3404_79" fill="white">
<rect x="6" y="2" width="16" height="16" rx="1"/>
</mask>
<rect x="6" y="2" width="16" height="16" rx="1" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3404_79)"/>
<path d="M5 5H3.5C3.22386 5 3 5.22386 3 5.5V20.5C3 20.7761 3.22386 21 3.5 21H18.5C18.7761 21 19 20.7761 19 20.5V19" stroke="black" stroke-width="2"/>
</svg>