import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.4.1:20',
  releaseNotes: {
    en_US: `MaVeTh: FlyTheElephant tip 121edd0 (Jason #17 blake2b_coinbase_index multi-out). No pool_pubkey auto-fetch — paste the 128-hex Prime pubkey. Based on Leo pow_0.4.1_17 packaging.`,
    es_ES: `MaVeTh: tip FlyTheElephant 121edd0 (multi-out blake2b_coinbase_index). Sin auto-fetch de pool_pubkey — pegar la clave 128-hex de Prime.`,
    de_DE: `MaVeTh: FlyTheElephant Tip 121edd0 (Multi-Out blake2b_coinbase_index). Kein pool_pubkey Auto-Fetch — 128-Hex-Prime-Pubkey einfügen.`,
    pl_PL: `MaVeTh: tip FlyTheElephant 121edd0 (multi-out blake2b_coinbase_index). Bez auto-fetch pool_pubkey — wklej 128-hex klucz Prime.`,
    fr_FR: `MaVeTh : tip FlyTheElephant 121edd0 (multi-out blake2b_coinbase_index). Pas d'auto-fetch pool_pubkey — coller la clé 128-hex de Prime.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
    other: {
        ['*']: {
            up: async ({ effects }) => {},
            down: async ({ effects }) => {},
        }
    }
  },
})
