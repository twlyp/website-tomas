import { admin } from "./initialize.js"

const email = process.argv[2]
const isAdmin = process.argv[3] === "admin"

if (!email) {
  console.log("usage: node createUser.js <email> [admin]")
  process.exit(1)
}

async function createUser() {
  const user = await admin.auth().createUser({ email })
  await admin.auth().setCustomUserClaims(user.uid, isAdmin ? { admin: true } : {})

  console.log(`Created user: ${user.email} (${user.uid})`, isAdmin ? " as admin" : "")
}

createUser()
