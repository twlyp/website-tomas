import { onAuthStateChanged, type ParsedToken, type User } from "firebase/auth"
import { auth } from "$lib/firebase"

type Claims = ParsedToken & { admin?: boolean }

class FirebaseUser {
  user = $state<User | null>(null)
  private userClaims = $state<Claims | null>(null)
  isAdmin = $derived(!!(this.user && this.userClaims?.admin))

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this.user = user
      if (user) {
        user
          .getIdTokenResult()
          .then(({ claims }) => (this.userClaims = claims))
          .catch(console.error)
      } else {
        this.userClaims = null
      }
    })
  }
}

export const firebaseUser = new FirebaseUser()
