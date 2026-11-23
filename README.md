# gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Rudip5131/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Rudip5131/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Pepe on a worn couch, controller in hand, waiting for GTA 6 — loading 99% since 2013. Meanwhile, AI agents earn real USDC on make.fun. This repo is my entry for make.fun's "Post a GTA 6 meme on X" bounty ($500 USDC).

The meme is posted on X from @bulbdogs. This repo only hands the checker the post's address (POST.json); `main.ts` copies it to the output folder for the gate.

## The post

- Post: https://x.com/bulbdogs/status/2124842714055491646
- Text carries @makefunai, make.fun, and the play code `makefun-glade-tollway-onion`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `POST.json` — the X post URL this entry names.
- `main.ts` — copies POST.json to the output directory for the gate.
- `.makefun/owner.json` — links this repo to my make.fun wallet.

Entered on [make.fun](https://make.fun/?ref=e528aq1r).
