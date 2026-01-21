const RADII = [100, 70, 50]
export const getRadius = (layer: number) => {
    return layer < RADII.length ? RADII[layer] : RADII[RADII.length - 1]
}

export const nodeTree = [
  {
    label: "autoral",
    children: [
      {
        label: "editorial",
        children: [
          { label: "brutta - vogue italia" },
          { label: "den haag" },
          { label: "las bellas durmientes - siky" },
        ],
      },
      { label: "exibicion" },
      { label: "fotografia" },
      { label: "musica" },
      { label: "pintura" },
      { label: "retratos" },
      { label: "travestismo" },
      { label: "video" },
    ],
  },
  {
    label: "commission",
    children: [
      { label: "commission portraits" },
      { label: "creative direction" },
      { label: "art direction" },
      { label: "printed editorials" },
    ],
  },
]


