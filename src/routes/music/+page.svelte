<script lang="ts">
  import CardParto from "./CardParto.svelte";
  import { PAGES } from "$constants";
  import PageSection from "$components/PageSection.svelte";
</script>

<PageSection page={PAGES.MUSIC}>
  <div class="flex h-full w-full flex-row flex-wrap items-center justify-start">
    <CardParto />
  </div></PageSection
>
