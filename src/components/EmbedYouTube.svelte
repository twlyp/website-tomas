<script lang="ts">
  interface Props {
    width?: number;
    videoId: string;
  }

  const ASPECT_RATIO = 7 / 4;

  let { width = 560, videoId }: Props = $props();
  const height = $derived(width / ASPECT_RATIO);
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
