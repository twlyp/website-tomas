<script lang="ts">
  import type { ComponentProps } from "svelte";
  // biome-ignore lint/style/useImportType: it's used as component
  import PhotoCard from "../../routes/photo/PhotoCard.svelte";
  import { swipe, type SwipeCustomEvent } from "svelte-gestures";
  import _ from "lodash";

  export let photos: Array<ComponentProps<PhotoCard>>;
  let currentPhotoIdx = Math.floor(Math.random() * photos.length);

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  function changePhoto(delta: number) {
    currentPhotoIdx = mod(currentPhotoIdx + delta, photos.length);
  }

  function onKeydown(ev: KeyboardEvent) {
    if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
      changePhoto(+1);
    } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
      changePhoto(-1);
    }
  }

  function onSwipe(ev: SwipeCustomEvent) {
    if (ev.detail.direction === "left") {
      changePhoto(+1);
    } else if (ev.detail.direction === "right") {
      changePhoto(-1);
    }
  }

  const WHEEL_THRESHOLD = 20;
  const WHEEL_THROTTLE_TIME = 1000;

  let isScrolling = false;
  function onWheel(ev: WheelEvent) {
    // if (ev.deltaX > WHEEL_THRESHOLD || ev.deltaY > WHEEL_THRESHOLD) {
    //   console.log("back one");
    //   changePhoto(-1);
    // } else if (ev.deltaX < -WHEEL_THRESHOLD || ev.deltaY < -WHEEL_THRESHOLD) {
    //   console.log("forward one");
    //   changePhoto(+1);
    // }

    // if (Math.sign(ev.deltaX) !== Math.sign(deltaXAccumulator)) {
    //   deltaXAccumulator = 0;
    // }
    // if (Math.sign(ev.deltaY) !== Math.sign(deltaYAccumulator)) {
    //   deltaYAccumulator = 0;
    // }

    // deltaXAccumulator += ev.deltaX;
    // deltaYAccumulator += ev.deltaY;
    // const data = {
    //   deltaX: ev.deltaX,
    //   deltaY: ev.deltaY,
    //   deltaXAccumulator,
    //   deltaYAccumulator,
    // };

    // console.log(data);

    // const isXAboveThreshold = Math.abs(deltaXAccumulator) > WHEEL_THRESHOLD;
    // const isYAboveThreshold = Math.abs(deltaYAccumulator) > WHEEL_THRESHOLD;

    // if (isXAboveThreshold || isYAboveThreshold) {
    //   const argument = isXAboveThreshold
    //     ? deltaXAccumulator
    //     : deltaYAccumulator;
    //   console.log("argument", argument);

    //   const sign = -Math.sign(argument);
    //   changePhoto(sign);
    //   deltaXAccumulator = 0;
    //   deltaYAccumulator = 0;
    // }
    if (isScrolling) return;
    isScrolling = true;
    if (ev.deltaX > WHEEL_THRESHOLD || ev.deltaY > WHEEL_THRESHOLD) {
      changePhoto(-1);
    } else if (ev.deltaX < -WHEEL_THRESHOLD || ev.deltaY < -WHEEL_THRESHOLD) {
      changePhoto(+1);
    }

    setTimeout(() => {
      isScrolling = false;
    }, WHEEL_THROTTLE_TIME);
  }

  function focus(element: HTMLElement) {
    element.focus();
  }
</script>

<div
  class="w-full h-full overflow-hidden"
  use:focus
  use:swipe
  on:click|stopPropagation={() => changePhoto(+1)}
  on:keydown={onKeydown}
  on:swipe={onSwipe}
  on:wheel|preventDefault={onWheel}
  role="button"
  tabindex="0"
>
  {#each photos as photo, idx}
    <PhotoCard
      class="absolute top-0 transition-transform duration-500 ease-in-out"
      style="left: {idx * 100}vw;
             transform: translateX({-currentPhotoIdx * 100}vw);
             "
      {...photo}
    />
  {/each}
</div>
