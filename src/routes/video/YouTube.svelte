<script lang="ts">
  const ASPECT_RATIO = 7 / 4;

  // biome-ignore lint/style/useConst: this is a prop
  export let width = 560;
  export let videoId: string;

  $: height = width / ASPECT_RATIO;
</script>

<iframe
  {width}
  {height}
  src="https://www.youtube.com/embed/{videoId}"
  title="YouTube video player"
  frameborder="0"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
