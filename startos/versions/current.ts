import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.4.1:23',
  releaseNotes: {
    en_US: `MaVeTh CONVOY + PR #10 (YUGE): largest Blake coinbase class for every miner — avoids ~17-out truncate (type 2) so TIDES multi-out splits land on-chain. Gateway tip 7491a50 (CONVOYMining + https://github.com/CONVOYMining/datum_gateway/pull/10). Paste Prime pool_pubkey (128 hex).`,
    es_ES: `MaVeTh CONVOY + PR #10 (YUGE): clase de coinbase Blake más grande para todos los mineros — evita truncar ~17 outs. Tip 7491a50. Pegar pool_pubkey de Prime.`,
    de_DE: `MaVeTh CONVOY + PR #10 (YUGE): größte Blake-Coinbase-Klasse für alle Miner — vermeidet ~17-Out-Truncate. Tip 7491a50. Prime pool_pubkey einfügen.`,
    pl_PL: `MaVeTh CONVOY + PR #10 (YUGE): największa klasa coinbase Blake dla wszystkich minerów. Tip 7491a50. Wklej pool_pubkey Prime.`,
    fr_FR: `MaVeTh CONVOY + PR #10 (YUGE) : plus grande classe coinbase Blake pour tous les mineurs. Tip 7491a50. Coller pool_pubkey Prime.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
    other: {
      ['*']: {
        up: async ({ effects }) => {},
        down: async ({ effects }) => {},
      },
    },
  },
})
