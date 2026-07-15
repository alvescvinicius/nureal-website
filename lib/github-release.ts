// Busca o release "latest" do app Nureal Database IDE direto na API do GitHub,
// para que os botoes de download sempre apontem para os executaveis mais
// recentes, mesmo quando o nome do arquivo muda de versao para versao
// (ex: Nureal-Database-IDE-0.7.1.exe -> Nureal-Database-IDE-0.8.0.exe).

export const IDE_REPO = "alvescvinicius/nureal-database-ide";

export type GithubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

export type GithubRelease = {
  tag_name: string;
  html_url: string;
  assets: GithubReleaseAsset[];
};

export async function getLatestIdeRelease(): Promise<GithubRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${IDE_REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        // revalida a cada hora, evitando bater na API do GitHub a cada request
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return null;
    return (await res.json()) as GithubRelease;
  } catch {
    return null;
  }
}

export function findAsset(
  assets: GithubReleaseAsset[],
  matcher: (nameLowerCase: string) => boolean,
): GithubReleaseAsset | undefined {
  return assets.find((asset) => matcher(asset.name.toLowerCase()));
}
