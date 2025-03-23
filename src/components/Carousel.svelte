<script lang="ts" generics="T extends {}">
  import { mod, randomInt } from "$utils";
  import type { Component as ComponentType, ComponentProps } from "svelte";

  interface Props {
    direction: "horizontal" | "vertical";
    Component: ComponentType<T>;
    data: T[];
  }
  let { direction, Component, data }: Props = $props();

  let currentSlide = $state(randomInt(data.length - 1));

  function changeSlide(delta: number) {
    currentSlide = mod(currentSlide + delta, data.length);
  }

  function onKeydown(ev: KeyboardEvent) {
    if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
      changeSlide(+1);
    } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
      changeSlide(-1);
    }
  }

  function focus(element: HTMLElement) {
    element.focus();
  }

  const getStyle = (idx: number) => {
    return direction === "horizontal"
      ? `left: ${idx * 100}vw; transform: translateX(${-currentSlide * 100}vw);`
      : `top: ${idx * 100}vh; transform: translateY(${-currentSlide * 100}vh);`;
  };
</script>

<div
  class="relative h-full w-full overflow-hidden"
  use:focus
  onclick={() => changeSlide(+1)}
  onkeydown={onKeydown}
  role="button"
  tabindex="0"
>
  {#each data as props, idx}
    <Component
      class="absolute top-0 transition-transform duration-500 ease-in-out"
      style={getStyle(idx)}
      {...props}
    />
  {/each}
</div>
