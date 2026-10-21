import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.5.0:3',
  releaseNotes: {
    en_US: `RIPTIDE gateway riptide_current_gw_reuse (1dd17cc): Luke v0.5 plus coinbaser refetch, replace-current-job, and coinbaser reuse default on. When Template Filter is installed, block templates come from the filter. Otherwise they come from Bitcoin. Paste the 128-hex pool pubkey.`,
    es_ES: `Gateway RIPTIDE 1dd17cc: v0.5 con refetch, replace y coinbaser reuse activado. Con Template Filter instalado, las plantillas salen del filtro. Si no, de Bitcoin. Pegar pool_pubkey.`,
    de_DE: `RIPTIDE-Gateway 1dd17cc: v0.5 mit Refetch, Replace und coinbaser reuse an. Mit installiertem Template Filter kommen die Vorlagen vom Filter, sonst von Bitcoin. pool_pubkey einfügen.`,
    pl_PL: `Gateway RIPTIDE 1dd17cc: v0.5 z refetch, replace i coinbaser reuse włączonym. Gdy Template Filter jest zainstalowany, szablony idą z filtra, inaczej z Bitcoin. Wklej pool_pubkey.`,
    fr_FR: `Passerelle RIPTIDE 1dd17cc : v0.5 avec refetch, replace et coinbaser reuse activé. Si Template Filter est installé, les modèles viennent du filtre, sinon de Bitcoin. Coller pool_pubkey.`,
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
