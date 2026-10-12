<p align="center">
  <img src="icon.svg" alt="Datum Gateway Logo" width="21%">
</p>

# Datum Gateway on StartOS (RIPTIDE)

Sideload of `riptide_current_gw_reuse` (`1dd17cc`): Luke v0.5 plus refetch, replace-current-job, and coinbaser reuse default on.

Blake pooled mining commits to Prime **type 4** (multi-out coinbaser) instead of empty type-0 / single pool-address.

- **Base packaging:** <https://github.com/Retropex/datum-gateway-startos/releases/tag/pow_0.4.1_17>
- **Gateway tip:** `1dd17cc` — <https://github.com/Maveth/datum_gateway/tree/riptide_current_gw_reuse>
- **No `pool_pubkey` auto-fetch** — paste the 128-hex Prime pubkey (blank will fail to start in pooled mode)

## Install (StartOS sideload)

1. Download `datum_aarch64.s9pk` (Pi/ARM) or `datum_x86_64.s9pk` (Intel/AMD) from the release.
2. StartOS → **Sideload** → select the `.s9pk` → upload & install.
3. Configure pool host/port to your DATUM Prime (e.g. TIDES `:28916`) and **set pool pubkey**.
4. Confirm `/coinbaser` shows multiple outs; shares should report `cb_id=4` (not `0`).

Version: `#pow:0.4.1:24`

[DATUM Gateway](https://github.com/ocean-xyz/datum-gateway) lets ASIC miners build their own block templates against a local Bitcoin node, mining solo or through a DATUM-supporting pool. This package wires it to your node, publishes the stratum endpoint for your miners, and asks the node to notify it on every new block.

- **Upstream repo:** <https://github.com/ocean-xyz/datum-gateway>
- **Wrapper repo:** <https://github.com/Start9Labs/datum-gateway-startos>
