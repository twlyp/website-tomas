<script lang="ts">
  import CardPhoto, { type Props as CardPhotoProps } from "./CardPhoto.svelte";
  import { mod, randomInt } from "$utils";

  interface Props {
    photos: CardPhotoProps[];
  }
  let { photos }: Props = $props();

  let currentPhotoIdx = $state(randomInt(photos.length - 1));

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

  function focus(element: HTMLElement) {
    element.focus();
  }
</script>

<div
  class="relative h-full w-full"
  use:focus
  onclick={() => changePhoto(+1)}
  onkeydown={onKeydown}
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
