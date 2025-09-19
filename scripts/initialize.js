import admin from 'firebase-admin'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const serviceAccount = require('../.secrets/tomeyza-7e984-firebase-adminsdk-fbsvc-96d3b0bde2')

const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export { admin, adminApp }
