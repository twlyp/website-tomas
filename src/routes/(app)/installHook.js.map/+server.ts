// this is a workaround to make firefox shut up about sourcemaps

import { json } from "@sveltejs/kit"

export function GET() {
  return json({ version: "0", sources: "" })
}
