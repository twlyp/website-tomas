import { collection, addDoc } from "firebase/firestore"
import { firestore } from "$firebase"
import type { PhotoItem } from "../firebase.types"

export const photoCollectionRef = collection(firestore, "photo")

export async function addPhotoItem(item: PhotoItem) {
  return await addDoc(photoCollectionRef, item)
}
