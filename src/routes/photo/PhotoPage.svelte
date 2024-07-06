<script lang="ts">
  import muiopotamos from "$lib/photo/Meta-B54_1340_c.jpg";
  import prologo from "$lib/photo/ASR171_TE_PROLOGO_1_3-7-13-24_1340_c.jpg";
  import vegan from "$lib/photo/ASR184_TE_SV_EDEN_19569_V1A_1340_c.jpg";

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

  function focus(element: HTMLElement) {
    element.focus();
  }
</script>

{#each photos as photo, idx}
  {#if idx === currentPhotoIdx}
    <div
      class="w-full h-full flex flex-row items-end"
      on:click|stopPropagation={() => changePhoto(+1)}
      on:keydown={onKeydown}
      role="button"
      tabindex="0"
      use:focus
    >
      <div>
        <h3>{photo.title}</h3>
        <h4>{photo.location}, {photo.date}</h4>
      </div>
      <img
        class="max-h-full max-w-full flex-grow object-contain"
        src={photo.imageSrc}
        alt={photo.title}
      />
    </div>
  {/if}
{/each}
