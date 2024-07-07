<script lang="ts">
import logo from "$lib/logo_tomas.png";
import { COLORS_BACKGROUND_GRADIENT } from "./constants";

export let width: number;
export let height: number;

const logoPadding = 50;

const stopOffsets = [0, 25, 50, 75, 100];

const getStopIdx = (idx: number) => (idx < 3 ? idx : stopOffsets.length - idx - 1);
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
    {#each stopOffsets as offset, idx}
      <stop
        offset="{offset}%"
        style="stop-color:{COLORS_BACKGROUND_GRADIENT[getStopIdx(idx)].color};
          stop-opacity:{COLORS_BACKGROUND_GRADIENT[getStopIdx(idx)].opacity}"
      />
    {/each}
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
