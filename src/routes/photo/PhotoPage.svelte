<script lang="ts">
  import muiopotamos from "$lib/photo/Meta-B54_1340_c.jpg";
  import prologo from "$lib/photo/ASR171_TE_PROLOGO_1_3-7-13-24_1340_c.jpg";
  import vegan from "$lib/photo/ASR184_TE_SV_EDEN_19569_V1A_1340_c.jpg";
  import { writable } from "svelte/store";

  const photos = [
    {
      title: "M U I O P O T M O S - Infringe",
      location: "Berlin",
      date: "2021",
      imageSrc: muiopotamos,
    },
    {
      title: "Prologo - Fucking Young!",
      location: "Berlin",
      date: "2021",
      imageSrc: prologo,
    },
    {
      title: "Vegan Dressing - Hart Magazine",
      location: "Berlin",
      date: "2022",
      imageSrc: vegan,
    },
  ];

  const currentPhotoIdx = writable(Math.floor(Math.random() * photos.length));
  $: currentPhoto = photos[$currentPhotoIdx];

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  function changePhoto(delta: number) {
    currentPhotoIdx.set(mod($currentPhotoIdx + delta, photos.length));
  }

  function onKeydown(ev: KeyboardEvent) {
    if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
      changePhoto(+1);
    } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
      changePhoto(-1);
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

{#if currentPhoto}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-full h-full flex flex-row items-end justify-between"
    on:click|stopPropagation={() => changePhoto(+1)}
    role="button"
    tabindex="0"
  >
    <div>
      <h3>{currentPhoto.title}</h3>
      <h4>{currentPhoto.location}, {currentPhoto.date}</h4>
    </div>
    <img
      class="max-h-full max-w-full"
      src={currentPhoto.imageSrc}
      alt={currentPhoto.title}
    />
  </div>
{/if}
