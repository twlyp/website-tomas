<script lang="ts">
  export let width = 560;
  export let height = 315;
  export let videoId: string;
</script>

<iframe
  {width}
  {height}
  src="https://www.youtube.com/embed/{videoId}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
