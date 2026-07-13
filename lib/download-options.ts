export type DownloadOption = {
  platform: string;
  version: string;
  href: string;
};

// TODO: apontar para os builds reais de cada plataforma.
export const downloadOptions: DownloadOption[] = [
  { platform: "macOS", version: "Apple Silicon e Intel", href: "#" },
  { platform: "Windows", version: "Windows 10 ou superior", href: "#" },
  { platform: "Linux", version: ".AppImage e .deb", href: "#" },
];
