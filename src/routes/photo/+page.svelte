<script lang="ts">
  import muiopotamos from "$lib/photo/Meta-B54_1340_c.jpg";
  import prologo from "$lib/photo/ASR171_TE_PROLOGO_1_3-7-13-24_1340_c.jpg";
  import vegan from "$lib/photo/ASR184_TE_SV_EDEN_19569_V1A_1340_c.jpg";
  import Carousel from "./Carousel.svelte";
  import PageSection from "$components/PageSection.svelte";
  import { PAGES } from "$constants";

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
</script>

<PageSection page={PAGES.PHOTO}>
  <Carousel {photos} />
</PageSection>
