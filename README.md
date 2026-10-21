<p align="center">
  <img src="icon.svg" alt="Datum Gateway Logo" width="21%">
</p>

# Datum Gateway on StartOS (stock v0.5.0beta)

Sideload of CONVOY DATUM Gateway `v0.5.0beta` (`69c61a9`), the same gateway Horizon ships as `#pow:0.5.0:1`.

- **Gateway:** <https://github.com/CONVOYMining/datum_gateway/tree/v0.5.0beta>
- **Blank pool host** uses `datum-beta1.mine.convoy.xyz`
- **Blank pubkey** is fetched from the pool
- Requires a Blake2b Knots package at `#knots:29.4.1:7` or newer

## Install (StartOS sideload)

1. Download `datum_aarch64.s9pk` (Pi/ARM) or `datum_x86_64.s9pk` (Intel/AMD) from the release.
2. StartOS → **Sideload** → select the `.s9pk` → upload & install.
3. Leave the pool host blank to use CONVOY, or set another DATUM pool. Leave the pubkey blank to fetch it.

Version: `#pow:0.5.0:2`

When Template Filter is installed on the same StartOS server, this gateway asks the filter for block templates. When it is not installed, the gateway asks Bitcoin. `blocknotify` stays on Bitcoin.

[DATUM Gateway](https://github.com/ocean-xyz/datum-gateway) lets ASIC miners build their own block templates against a local Bitcoin node, mining solo or through a DATUM-supporting pool. This package wires it to your node, publishes the stratum endpoint for your miners, and asks the node to notify it on every new block.

- **Upstream repo:** <https://github.com/CONVOYMining/datum_gateway>
- **Wrapper repo:** <https://github.com/Maveth/datum-gateway-startos>
