<script lang="ts">
  import { FirebaseApp } from "sveltefire"
  import { auth, firestore, storage } from "$firebase"
  import { userStore, SignedIn, SignedOut } from "sveltefire"
  import { signInWithPopup, GoogleAuthProvider, signOut, type ParsedToken } from "@firebase/auth"
  import { derived } from "svelte/store"

  const user = userStore(auth)
  const claims = derived<typeof user, ParsedToken | null>(user, ($user, set) => {
    if ($user) {
      $user.getIdTokenResult().then((result) => {
        set(result?.claims)
      })
    } else {
      set(null)
    }
  })

  let { children } = $props()
</script>

<FirebaseApp {auth} {firestore} {storage}>
  <header class="flex flex-row items-center p-2">
    <SignedOut>
      <button
        class="btn btn-primary"
        onclick={() => signInWithPopup(auth, new GoogleAuthProvider())}
      >
        sign in with google
      </button>
    </SignedOut>

    <SignedIn>
      <button class="btn btn-primary" onclick={() => signOut(auth)}> sign out </button>
    </SignedIn>
  </header>

  {#if $claims?.admin}
    {@render children()}
  {/if}
</FirebaseApp>
