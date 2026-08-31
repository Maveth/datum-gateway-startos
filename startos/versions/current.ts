import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.4.1:19',
  releaseNotes: {
    en_US: `MaVeTh: Blake multi-out coinbaser (PR #5) + mainnet bc1/1/3 coinbaser UI (reverts lab TN4 tb hardcode). Based on Leo pow_0.4.1_17.`,
    es_ES: `Parche MaVeTh: la minería Blake en pool usa ahora el coinbaser multi-salida de Prime en lugar del type-0 vacío / una sola dirección del pool. Si /coinbaser muestra varios pagos, mining.notify y submit usan ese split.`,
    de_DE: `MaVeTh-Patch: Blake-Pool-Mining nutzt jetzt den Prime Multi-Out-Coinbaser statt leerem type-0 / einzelner Pool-Adresse. Wenn /coinbaser mehrere Auszahlungen zeigt, verwenden mining.notify und submit diesen Split.`,
    pl_PL: `Łatka MaVeTh: kopanie Blake w puli używa teraz multi-out coinbasera Prime zamiast pustego type-0 / pojedynczego adresu puli.`,
    fr_FR: `Correctif MaVeTh : le minage Blake en pool utilise désormais le coinbaser multi-sorties de Prime au lieu du type-0 vide / adresse unique du pool.`,
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
