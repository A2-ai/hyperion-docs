export interface Version {
  tag: string;
  label: string;
  default?: boolean;
}

export const VERSIONS: Version[] = [
  {
    tag: "0.2.0",
    label: "v0.2.0",
    default: true,
  },
];

export const CURRENT_VERSION = "dev";
