import { IDE_REPO, findAsset, getLatestIdeRelease } from "@/lib/github-release";

export type DownloadLink = {
  label: string;
  href: string;
};

export type DownloadOption = {
  platform: string;
  version: string;
  primary: DownloadLink;
  secondary?: DownloadLink;
};

const RELEASES_FALLBACK_URL = `https://github.com/${IDE_REPO}/releases/latest`;

export async function getDownloadOptions(): Promise<DownloadOption[]> {
  const release = await getLatestIdeRelease();
  const assets = release?.assets ?? [];
  const version = release?.tag_name ?? "";

  const urlFor = (matcher: (name: string) => boolean) =>
    findAsset(assets, matcher)?.browser_download_url ?? RELEASES_FALLBACK_URL;

  return [
    {
      platform: "macOS",
      version,
      primary: {
        label: "Apple Silicon (.dmg)",
        href: urlFor((n) => n.endsWith("-arm64.dmg")),
      },
      secondary: {
        label: "Intel (.dmg)",
        href: urlFor((n) => n.endsWith("-x64.dmg")),
      },
    },
    {
      platform: "Windows",
      version,
      primary: {
        label: ".exe (recomendado)",
        href: urlFor((n) => n.endsWith(".exe")),
      },
      secondary: {
        label: ".msi (instalação silenciosa)",
        href: urlFor((n) => n.endsWith(".msi")),
      },
    },
    {
      platform: "Linux",
      version,
      primary: {
        label: ".AppImage",
        href: urlFor((n) => n.endsWith(".appimage")),
      },
      secondary: {
        label: ".deb",
        href: urlFor((n) => n.endsWith(".deb")),
      },
    },
  ];
}
