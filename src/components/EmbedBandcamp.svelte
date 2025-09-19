<script lang="ts">
  import { COLORS_PAGES_BACKGROUND, PAGES } from "$constants"
  import type { HTMLProps } from "$types"

  interface Props extends HTMLProps {
    width?: number
    height?: number
  }

  let { width = 350, height = 470, class: klass }: Props = $props()
  const linkColor = COLORS_PAGES_BACKGROUND[PAGES.MUSIC].slice(1, 7)
</script>

<iframe
  title="auno's album parto on bandcamp"
  {width}
  {height}
  class={klass}
  style="border: 0;"
  src="https://bandcamp.com/EmbeddedPlayer/album=427081287/size=large/bgcol=333333/linkcol={linkColor}/tracklist=false/transparent=true/"
  seamless><a href="https://auno.bandcamp.com/album/part-o">part o by auno</a></iframe
>
