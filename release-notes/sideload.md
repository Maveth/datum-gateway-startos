RIPTIDE gateway `riptide_current_gw_reuse` (`1dd17cc`): Luke v0.5 plus refetch, replace-current-job, and coinbaser reuse default on.

When Template Filter is installed, block templates come from the filter. Otherwise they come from Bitcoin. `blocknotify` stays on Bitcoin.

This is `#pow:0.5.0:3`. It installs over `#pow:0.5.0:1` and over the stock `#pow:0.5.0:2` package. Installing `:2` afterwards is a downgrade.

### Which file

| File | Use on |
|------|--------|
| datum_aarch64.s9pk | Raspberry Pi / ARM |
| datum_x86_64.s9pk | Intel/AMD |

### Install

1. StartOS → Sideload → upload the matching `.s9pk`
2. This upgrades the existing Datum Gateway (`id: datum`)
3. Set the pool host and paste the 128-hex pool pubkey

Source: https://github.com/Maveth/datum_gateway/tree/riptide_current_gw_reuse
