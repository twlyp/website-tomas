<script lang="ts">
  import VideoCard from "./VideoCard.svelte";

  const videos = [{ title: "Transitions - nowness", videoId: "6VCX670GnpU" }];
</script>

<div>
    {#each videos as { title, videoId }}
        <VideoCard {title} {videoId} />
    {/each}
</div>
