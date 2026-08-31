<p align="center">
  <img src="icon.svg" alt="Datum Gateway Logo" width="21%">
</p>

# Datum Gateway on StartOS (MaVeTh multi-out patch)

Sideload build of Leo/Retropex `pow_0.4.1_17` packaging with **MaVeTh PR #5** baked in:

Blake pooled mining uses the Prime **multi-out coinbaser** instead of empty type-0 / single pool-address, so share-log miners get paid on-chain when `/coinbaser` shows a split.

- **Base packaging:** <https://github.com/Retropex/datum-gateway-startos/releases/tag/pow_0.4.1_17>
- **Gateway tip:** `56286b7` — `fix(blake): mine Prime multi-out coinbaser instead of empty type-0`
- **Upstream (InnerHat / OCEAN Blake):** <https://github.com/OCEAN-xyz/datum_gateway> @ that commit
- **Fix PR:** <https://github.com/Maveth/datum_gateway-innerhat/pull/5>

## Install (StartOS sideload)

1. Download `datum.s9pk` from the release / build artifacts for this package.
2. StartOS → **Sideload** → select the `.s9pk` → upload & install.
3. Configure pool host to your DATUM Prime (e.g. TIDES) and start.
4. Confirm `/coinbaser` shows multiple outs, then that Blake work is **not** stuck on type-0 / `coinbase_id=0`.

Version: `#pow:0.4.1:18`

[DATUM Gateway](https://github.com/ocean-xyz/datum-gateway) lets ASIC miners build their own block templates against a local Bitcoin node, mining solo or through a DATUM-supporting pool. This package wires it to your node, publishes the stratum endpoint for your miners, and asks the node to notify it on every new block.

- **Upstream repo:** <https://github.com/ocean-xyz/datum-gateway>
- **Wrapper repo:** <https://github.com/Start9Labs/datum-gateway-startos>