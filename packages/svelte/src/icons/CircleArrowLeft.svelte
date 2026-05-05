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
  <g clip-path="url(#clip0_3406_129)">
<path d="M17.0251 10.9749C17.5774 10.9749 18.0251 11.4226 18.0251 11.9749V11.9749C18.0251 12.5272 17.5774 12.9749 17.0251 12.9749L7.02515 12.9749C6.47286 12.9749 6.02515 12.5272 6.02515 11.9749V11.9749C6.02515 11.4226 6.47286 10.9749 7.02515 10.9749L17.0251 10.9749Z" fill="#141313"/>
<path d="M8.90386 8.73223C9.29438 8.34171 9.92754 8.34171 10.3181 8.73223V8.73223C10.7086 9.12276 10.7086 9.75592 10.3181 10.1464L7.8432 12.6213C7.64793 12.8166 7.33135 12.8166 7.13609 12.6213L6.42898 11.9142C6.23372 11.719 6.23372 11.4024 6.42898 11.2071L8.90386 8.73223Z" fill="#141313"/>
<path d="M6.42893 12.7929C6.23367 12.5976 6.23367 12.2811 6.42893 12.0858L7.13604 11.3787C7.3313 11.1834 7.64788 11.1834 7.84315 11.3787L10.318 13.8536C10.7085 14.2441 10.7085 14.8772 10.318 15.2678V15.2678C9.92749 15.6583 9.29433 15.6583 8.90381 15.2678L6.42893 12.7929Z" fill="#141313"/>
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_3406_129">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>