import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.4.1:18',
  releaseNotes: {
    en_US: `MaVeTh patch: Blake pooled mining now uses the Prime multi-out coinbaser instead of empty type-0 / single pool-address. When /coinbaser shows multiple payout outs, mining.notify and submit use that split so share-log miners are paid on-chain. Built on Leo's pow_0.4.1_17 StartOS packaging (InnerHat tip + multi-out fix).`,
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
