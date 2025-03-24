<script lang="ts" generics="T">
  import { mod } from "$utils";
  import type { Component as ComponentType } from "svelte";
  import { page } from "$app/state";
  import { swipe, type SwipeCustomEvent } from "svelte-gestures";

  interface Props {
    direction: "horizontal" | "vertical";
    Component: ComponentType<T & { class: string; style: string }>;
    data: T[];
  }
  let { direction, Component, data }: Props = $props();

  const slideParam = page.url.searchParams.get("slide");
  const parsedSlideParam = slideParam && parseInt(slideParam);
  const initialSlide =
    parsedSlideParam &&
    !isNaN(parsedSlideParam) &&
    parsedSlideParam >= 0 &&
    parsedSlideParam < data.length
      ? parsedSlideParam
      : 0;

  let currentSlide = $state(initialSlide);

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

  function onSwipe(ev: SwipeCustomEvent) {
    console.log('swipe:', ev)
    if (ev.detail.direction === "right" || ev.detail.direction === "bottom") {
      changeSlide(-1);
    } else if (ev.detail.direction === "left" || ev.detail.direction === "top") {
      changeSlide(+1);
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
  use:swipe={() => ({ timeframe: 300, minSwipeDistance: 60 })}
  onclick={() => changeSlide(+1)}
  onkeydown={onKeydown}
  onswipe={onSwipe}
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
