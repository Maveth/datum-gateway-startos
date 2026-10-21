Stock DATUM Gateway v0.5.0beta (`69c61a9`), the same gateway as Horizon `#pow:0.5.0:1`, plus the template-filter hook.

When Template Filter is installed, block templates come from the filter. Otherwise they come from Bitcoin. `blocknotify` stays on Bitcoin. A blank pool host uses `datum-beta1.mine.convoy.xyz`. A blank pubkey is fetched from the pool.

This is `#pow:0.5.0:2`. It installs over Horizon's `:1` and over our old `:1`. The RIPTIDE package `#pow:0.5.0:3` is a higher revision and keeps the coinbaser patches.

### Which file

| File | Use on |
|------|--------|
| datum_aarch64.s9pk | Raspberry Pi / ARM |
| datum_x86_64.s9pk | Intel/AMD |

### Install

1. StartOS → Sideload → upload the matching `.s9pk`
2. This upgrades the existing Datum Gateway (`id: datum`)
3. Leave the pool host blank for CONVOY, or set another DATUM pool

Source: https://github.com/CONVOYMining/datum_gateway/tree/v0.5.0beta
