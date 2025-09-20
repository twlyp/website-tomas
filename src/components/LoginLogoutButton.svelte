<script lang="ts">
  import { type UserProfile } from "svelte-firekit"
  import { auth } from "$firebase"
  import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth"

  type Props = {
    user: UserProfile | null
  }

  let { user }: Props = $props()
</script>

{#if user}
  <button class="btn btn-primary" onclick={() => signOut(auth)}> sign out </button>
{:else}
  <button class="btn btn-primary" onclick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
    sign in with google
  </button>
{/if}
