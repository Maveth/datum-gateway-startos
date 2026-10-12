import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.5.0:1',
  releaseNotes: {
    en_US: `RIPTIDE gateway riptide_current_gw_reuse (1dd17cc): Luke v0.5 plus coinbaser refetch, replace-current-job, and coinbaser reuse default on. A config line can still set coinbaser_reuse false. Paste the 128-hex pool pubkey. Sideload datum_aarch64.s9pk on Pi/ARM, datum_x86_64.s9pk on Intel/AMD.`,
    es_ES: `Gateway RIPTIDE 1dd17cc: v0.5 con refetch, replace y coinbaser reuse activado. Pegar pool_pubkey.`,
    de_DE: `RIPTIDE-Gateway 1dd17cc: v0.5 mit Refetch, Replace und coinbaser reuse an. pool_pubkey einfügen.`,
    pl_PL: `Gateway RIPTIDE 1dd17cc: v0.5 z refetch, replace i coinbaser reuse włączonym. Wklej pool_pubkey.`,
    fr_FR: `Passerelle RIPTIDE 1dd17cc : v0.5 avec refetch, replace et coinbaser reuse activé. Coller pool_pubkey.`,
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
