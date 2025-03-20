<script lang="ts">
  interface Props {
    width?: number;
    height?: number;
  }

  // biome-ignore lint/style/useConst: props
  let { width = 350, height= 720 }: Props = $props();
</script>

<!-- use inline-CSS width and height to show only the current track -->
<iframe
  title="auno's album parto on bandcamp"
  {width}
  {height}
  style="border: 0;"
  src="https://bandcamp.com/EmbeddedPlayer/album=427081287/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
  seamless
  ><a href="https://auno.bandcamp.com/album/part-o">part o by auno</a></iframe
>
