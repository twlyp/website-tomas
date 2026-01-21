const RADII = [100, 70, 50]
export const getRadius = (layer: number) => {
  return layer < RADII.length ? RADII[layer] : RADII[RADII.length - 1]
}

export type TreeNode = {
  label: string
  children?: TreeNode[]
  isOpen?: boolean
  slug?: string
}

export const nodeTree: TreeNode[] = [
  {
    label: "autoral",
    children: [
      {
        label: "editorial",
        children: [
          { label: "brutta - vogue italia", slug: "" },
          { label: "den haag", slug: "" },
          { label: "las bellas durmientes - siky", slug: "" },
        ],
      },
      { label: "exibicion", slug: "autoral/exibicion" },
      { label: "fotografia", slug: "autoral/fotografia" },
      { label: "musica", slug: "" },
      { label: "pintura", slug: "" },
      { label: "retratos", slug: "" },
      { label: "travestismo", slug: "" },
      { label: "video", slug: "" },
    ],
  },
  {
    label: "commission",
    children: [
      { label: "commission portraits", slug: "" },
      { label: "creative direction", slug: "" },
      { label: "art direction", slug: "" },
      { label: "printed editorials", slug: "" },
    ],
  },
]
