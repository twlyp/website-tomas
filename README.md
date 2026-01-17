# Website for Tomas

## Developing

Install: 

```bash
bun install
```

Run dev server: 

```bash
bun run dev
```

Note: to connect to local emulators, you need to set `VITE_USE_EMULATORS=true` in `.env`. Remember to start the emulators with `bun run emulators:start` first.

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.