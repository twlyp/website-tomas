<script lang="ts">
// biome-ignore lint/style/useConst: <explanation>
export let width = 350;
$: height = width * 1.5;
</script>

<iframe
  title="auno's album parto on bandcamp"
  style="border: 0;"
  {width}
  {height}
  src="https://bandcamp.com/EmbeddedPlayer/album=427081287/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
  seamless
  ><a href="https://auno.bandcamp.com/album/part-o">part o by auno</a></iframe
>
