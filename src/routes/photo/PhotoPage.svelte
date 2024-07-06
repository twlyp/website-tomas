<script lang="ts">
  import muiopotamos from "$lib/photo/Meta-B54_1340_c.jpg";
  import prologo from "$lib/photo/ASR171_TE_PROLOGO_1_3-7-13-24_1340_c.jpg";
  import vegan from "$lib/photo/ASR184_TE_SV_EDEN_19569_V1A_1340_c.jpg";
  import PhotoCard from "./PhotoCard.svelte";

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
  $: currentPhoto = photos[currentPhotoIdx];

  function nextPhoto() {
    currentPhotoIdx = (currentPhotoIdx + 1) % photos.length;
  }

  function previousPhoto() {
    currentPhotoIdx = (currentPhotoIdx - 1) % photos.length;
  }

  function onKeydown(ev: KeyboardEvent) {
    if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
      nextPhoto();
    } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
      previousPhoto();
    }
  }
</script>

<div
  class="w-full h-full flex flex-row items-end justify-between"
  on:click|stopPropagation={nextPhoto}
  on:keydown={onKeydown}
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
