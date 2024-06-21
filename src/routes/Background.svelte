<script lang="ts">
  import logo from "$lib/logo_tomas.png";

  export let width: number;
  export let height: number;

  const logoPadding = 50;
</script>

<defs>
  <linearGradient
    id="sunsetGradient"
    x1="100%"
    y1="0"
    x2="0%"
    y2="100%"
    spreadMethod="reflect"
  >
    <stop offset="0%" style="stop-color:#FF7F50;stop-opacity:0.7" />
    <stop offset="25%" style="stop-color:#FF4500;stop-opacity:0.6" />
    <stop offset="50%" style="stop-color:#FF1493;stop-opacity:0.5" />
    <stop offset="75%" style="stop-color:#FF4500;stop-opacity:0.6" />
    <stop offset="100%" style="stop-color:#FF7F50;stop-opacity:0.7" />
    <animate
      attributeName="x1"
      values="0%;100%"
      dur="15s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y1"
      values="0%;100%"
      dur="15s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="x2"
      values="100%;200%"
      dur="15s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      values="100%;200%"
      dur="15s"
      repeatCount="indefinite"
    />
  </linearGradient>
</defs>

<rect
  x={-width / 2}
  y={-height / 2}
  {width}
  {height}
  fill="url(#sunsetGradient)"
/>

<image
  href={logo}
  x={-width / 2 + logoPadding / 2}
  y={-height / 2 + logoPadding / 2}
  width={width - logoPadding}
  height={height - logoPadding}
  opacity={0.6}
/>
