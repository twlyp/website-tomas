<script lang="ts">
  import type { ComponentProps } from "svelte";
  // biome-ignore lint/style/useImportType: it's used as component
  import CardPhoto from "./CardPhoto.svelte";
  import { swipe, type SwipeCustomEvent } from "svelte-gestures";

  export let photos: Array<ComponentProps<CardPhoto>>;
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

  function focus(element: HTMLElement) {
    element.focus();
  }
</script>

<div
  class="w-full h-full"
  use:focus
  use:swipe
  on:click|stopPropagation={() => changePhoto(+1)}
  on:keydown={onKeydown}
  on:swipe={onSwipe}
  role="button"
  tabindex="0"
>
  {#each photos as photo, idx}
    <CardPhoto
      class="absolute top-0 transition-transform duration-500 ease-in-out"
      style="left: {idx * 100}vw;
             transform: translateX({-currentPhotoIdx * 100}vw);
             "
      {...photo}
    />
  {/each}
</div>
