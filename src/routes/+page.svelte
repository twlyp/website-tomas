<script lang="ts">
  import { fade } from "svelte/transition"
  import { cubicInOut } from "svelte/easing"
</script>

<a
  href="mailto:tomeyzaguirre@gmail.com"
  class="text-m absolute right-12 bottom-7 font-tomeyza opacity-70"
  transition:fade={{ duration: 600, easing: cubicInOut }}
>
  contact me
</a>
