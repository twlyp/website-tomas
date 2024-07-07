<script lang="ts">
const ASPECT_RATIO = 7 / 4;

// biome-ignore lint/style/useConst: <explanation>
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
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
