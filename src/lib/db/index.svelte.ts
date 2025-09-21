import {
  collection,
  addDoc,
  CollectionReference,
  onSnapshot,
  type DocumentData,
  type Unsubscribe,
} from "firebase/firestore"
import { firestore } from "$lib/firebase"
import type { PhotoItem, WithId } from "./types"

class Db<AppModelType extends DocumentData, DbModelType extends DocumentData> {
  items = $state<WithId<AppModelType>[]>([])
  ref: CollectionReference<AppModelType, DbModelType>
  unsubscribe: Unsubscribe

  constructor(ref: CollectionReference<AppModelType, DbModelType>) {
    this.ref = ref

    this.unsubscribe = onSnapshot(ref, (snapshot) => {
      const items: WithId<AppModelType>[] = []
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as WithId<AppModelType>)
      })
      this.items = items
    })
  }

  async add(item: AppModelType) {
    try {
      await addDoc(this.ref, item)
    } catch (e) {
      console.error(e)
    }
  }
}

export const photoDb = new Db(
  collection(firestore, "photo") as CollectionReference<PhotoItem, PhotoItem>,
)
