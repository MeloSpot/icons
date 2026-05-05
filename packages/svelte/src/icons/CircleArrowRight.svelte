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
  <g clip-path="url(#clip0_3406_121)">
<path d="M7.02515 13.0251C6.47286 13.0251 6.02515 12.5774 6.02515 12.0251V12.0251C6.02515 11.4728 6.47286 11.0251 7.02515 11.0251H17.0251C17.5774 11.0251 18.0251 11.4728 18.0251 12.0251V12.0251C18.0251 12.5774 17.5774 13.0251 17.0251 13.0251H7.02515Z" fill="#141313"/>
<path d="M15.1464 15.2678C14.7559 15.6583 14.1227 15.6583 13.7322 15.2678V15.2678C13.3417 14.8772 13.3417 14.2441 13.7322 13.8536L16.2071 11.3787C16.4024 11.1834 16.7189 11.1834 16.9142 11.3787L17.6213 12.0858C17.8166 12.2811 17.8166 12.5976 17.6213 12.7929L15.1464 15.2678Z" fill="#141313"/>
<path d="M17.6214 11.2071C17.8166 11.4024 17.8166 11.719 17.6214 11.9142L16.9143 12.6213C16.719 12.8166 16.4024 12.8166 16.2071 12.6213L13.7323 10.1464C13.3417 9.75592 13.3417 9.12276 13.7323 8.73223V8.73223C14.1228 8.34171 14.756 8.34171 15.1465 8.73223L17.6214 11.2071Z" fill="#141313"/>
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_3406_121">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>