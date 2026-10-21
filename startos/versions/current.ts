import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.5.0:2',
  releaseNotes: {
    en_US: `Stock DATUM Gateway v0.5.0beta (69c61a9), the same gateway as Horizon #pow:0.5.0:1. When Template Filter is installed, block templates come from the filter. Otherwise they come from Bitcoin. A blank pool host uses CONVOY. A blank pubkey is fetched from the pool.`,
    es_ES: `DATUM Gateway v0.5.0beta (69c61a9), el mismo gateway que Horizon #pow:0.5.0:1. Con Template Filter instalado, las plantillas salen del filtro. Si no, de Bitcoin. Un host vacío usa CONVOY. Una pubkey vacía se obtiene del pool.`,
    de_DE: `DATUM Gateway v0.5.0beta (69c61a9), dasselbe Gateway wie Horizon #pow:0.5.0:1. Mit installiertem Template Filter kommen die Vorlagen vom Filter, sonst von Bitcoin. Ein leerer Host nutzt CONVOY. Ein leerer Pubkey wird vom Pool geholt.`,
    pl_PL: `DATUM Gateway v0.5.0beta (69c61a9), ta sama brama co Horizon #pow:0.5.0:1. Gdy Template Filter jest zainstalowany, szablony idą z filtra, inaczej z Bitcoin. Pusty host używa CONVOY. Pusty pubkey jest pobierany z puli.`,
    fr_FR: `DATUM Gateway v0.5.0beta (69c61a9), la même passerelle que Horizon #pow:0.5.0:1. Si Template Filter est installé, les modèles viennent du filtre, sinon de Bitcoin. Un hôte vide utilise CONVOY. Une pubkey vide est récupérée auprès du pool.`,
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
