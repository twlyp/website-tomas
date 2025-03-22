<script lang="ts">
  import { PAGES } from "$constants";
  import PageSection from "$components/PageSection.svelte";
  import CardMusic from "./CardMusic.svelte";
  import EmbedBandcamp from "$components/EmbedBandcamp.svelte";
</script>

<PageSection page={PAGES.MUSIC}>
  <div class="flex h-full w-full flex-col items-center justify-start my-5">
    <CardMusic title="auno - part o" text="first album by auno">
      <EmbedBandcamp />
    </CardMusic>
  </div>
</PageSection>
