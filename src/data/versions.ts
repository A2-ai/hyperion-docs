export interface Version {
  tag: string;
  label: string;
  default?: boolean;
}

export const VERSIONS: Version[] = [
  {
    tag: "0.1.1",
    label: "v0.1.1",
    default: true,
  },
];

export const CURRENT_VERSION = "dev";
