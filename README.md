<p align="center">
  <img src="icon.svg" alt="Datum Gateway Logo" width="21%">
</p>

# Datum Gateway on StartOS (MaVeTh / Fly tip)

Sideload build of Leo/Retropex `pow_0.4.1_17` packaging with **FlyTheElephant tip `121edd0`** (Jason #17 `blake2b_coinbase_index` multi-out).

Blake pooled mining commits to Prime **type 4** (multi-out coinbaser) instead of empty type-0 / single pool-address.

- **Base packaging:** <https://github.com/Retropex/datum-gateway-startos/releases/tag/pow_0.4.1_17>
- **Gateway tip:** `121edd0` — `stratum: Mine the pool's payout coinbase on BLAKE2b jobs`
- **Gateway mirror:** <https://github.com/Maveth/datum_gateway-fly/tree/test/console-collapse-pr14-pr17>
- **No `pool_pubkey` auto-fetch** — paste the 128-hex Prime pubkey (blank will fail to start in pooled mode)

## Install (StartOS sideload)

1. Download `datum_aarch64.s9pk` (Pi/ARM) or `datum_x86_64.s9pk` (Intel/AMD) from the release.
2. StartOS → **Sideload** → select the `.s9pk` → upload & install.
3. Configure pool host/port to your DATUM Prime (e.g. TIDES `:28916`) and **set pool pubkey**.
4. Confirm `/coinbaser` shows multiple outs; shares should report `cb_id=4` (not `0`).

Version: `#pow:0.4.1:20`

[DATUM Gateway](https://github.com/ocean-xyz/datum-gateway) lets ASIC miners build their own block templates against a local Bitcoin node, mining solo or through a DATUM-supporting pool. This package wires it to your node, publishes the stratum endpoint for your miners, and asks the node to notify it on every new block.

- **Upstream repo:** <https://github.com/ocean-xyz/datum-gateway>
- **Wrapper repo:** <https://github.com/Start9Labs/datum-gateway-startos>
