import { collection, addDoc } from "firebase/firestore"
import { firestore } from "$lib/firebase"
import type { PhotoItem } from "$lib/firebase.types"

export const photoCollectionRef = collection(firestore, "photo")

export async function addPhotoItem(item: PhotoItem) {
  return await addDoc(photoCollectionRef, item)
}
