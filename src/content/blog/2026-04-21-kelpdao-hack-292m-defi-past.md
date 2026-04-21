---
title: "KelpDAO hack: Ako jeden podpis zničil dôveru v cross-chain DeFi"
author: Michal Takac
cover: /assets/kelpdao-hack-cover.png
tags:
  - defi
  - bezpečnosť
  - ethereum
  - bitcoin
---

V piatok 18. apríla 2026 o 17:35 UTC niekto poslal na Ethereum sfalšovanú správu, ktorá tvrdila, že prišla z blockchainu Unichain. Protokol KelpDAO jej uveril. Výsledok: **116 500 rsETH tokenov** — v prepočte približne **292 miliónov dolárov** — bolo uvoľnených na adresu útočníka. Žiadna zraniteľnosť smart kontraktu. Žiadna chyba v kóde. Stačil jeden overovateľ, ktorý podpísal čokoľvek.

## Čo je rsETH a prečo na tom záleží

rsETH je liquid restaking token od KelpDAO — wrapper okolo stakovaného ETH, ktorý umožňuje používať ho ako zábezpeku v DeFi protokoloch (Aave, Compound, Spark) a zároveň zarábať staking odmeny. Na to, aby rsETH fungoval naprieč blockchainmi (Arbitrum, Base, Linea a ďalších 20+ sietí), používal KelpDAO **LayerZero** — infraštruktúru na posielanie cross-chain správ.

LayerZero funguje na princípe **DVN (Decentralized Verifier Network)** — sieť overovateľov, ktorí potvrdzujú, že správa z jedného blockchainu je legitímna, než ju druhý blockchain prijme. Protokoly si môžu nastaviť, koľko overovateľov vyžadujú: 2 z 3, 3 z 5, alebo aj len... **1 z 1**.

## Jeden overovateľ = jeden bod zlyhania

KelpDAO si pre svoj most medzi Unichainom a Ethereom nastavil **1-of-1 DVN konfiguráciu** — jediným overovateľom bol samotný LayerZero Labs. Žiadny záložný overovateľ. Žiadna redundancia. Protokol za miliardu dolárov chránený jedným podpisom.

Útočníci — podľa LayerZero s predbežnou istotou severokorejská skupina **Lazarus (TraderTraitor)** — kompromitovali RPC uzly, na ktoré sa overovateľ spoliehali, nahradili ich softvér podvrhnutými verziami a spustili DDoS útok na nekompromitované uzly, čím vynútili failover na tie podvrhnuté.

Výsledok: overovateľ „potvrdil" správu, ktorá nikdy nevznikla. Na Unichaine sa nič nestalo (nonce zostal na 307), ale Ethereum akceptoval paket s nonce 308 a uvoľnil 116 500 rsETH.

## 46 minút, ktoré zachránili ďalších 200 miliónov

Emergency multisig KelpDAO zmrazil protokol o 18:21 UTC — 46 minút po útoku. Dva ďalšie pokusy (o 18:26 a 18:28) sa pokúsili odčerpať ďalších 40 000 rsETH (~100 miliónov dolárov každý), ale narazili na zmrazené kontrakty.

Medzitým útočník konal rýchlo:

- **89 567 rsETH** vložil ako zábezpeku do Aave V3
- **Požičal si 126 000 WETH** (~236 miliónov dolárov)
- Časti presunul cez **Tornado Cash** do 20 minút
- **52 440 ETH** skonsolidoval na jednu adresu

## Kto zaplatí?

Aave teraz čelí **177 miliónom dolárov zlého dlhu**. Rozdelenie strát:

1. **Aave Umbrella stakers** (prvá strata): vault za 56 miliónov dolárov bol automaticky zlikvidovaný — takmer totálna strata
2. **AAVE token holderi**: zvyšných ~120 miliónov vyžaduje emisiu nových AAVE tokenov — riedenie
3. **rsETH holderi na 20+ sieťach**: štrukturálne poškodené pozície, odhad haircut 15–20%
4. **Leveraged LRT traderi**: nedobrovoľné likvidácie pri sadzbe 8–9%

Aave stratil 6 miliárd dolárov TVL za 24 hodín (z 26,4 na 20,7 mld.). Arbitrum zmrazil 71 miliónov dolárov v etheri viazaných na útočníka.

## 47% protokolov na rovnakom tenkom ľade

Podľa analýzy Dune Analytics po hacku: z približne **2 665 unikátnych OApp kontraktov** na LayerZero beží **47% na 1-of-1 DVN** — rovnakej konfigurácii, aká zlyhala u KelpDAO. Ďalších 45% používa 2-of-2 a len asi 5% má 3-of-3 alebo vyššie nastavenie.

KelpDAO tvrdí, že 1-of-1 bola **predvolená konfigurácia LayerZero** — quickstart guide aj GitHub ukázky na ňu priamo odkazujú. LayerZero oponuje, že vždy odporúčali multi-DVN nastavenie a že zodpovednosť za konfiguráciu nesie vývojár. Pravda? Obaja prispeli k výsledku.

LayerZero po útoku oznámil, že **odmietne podpisovať správy pre akýkoľvek projekt s 1-of-1 overovateľom**. Neskoro, ale aspoň niečo.

## Čo to znamená

Tento hack nie je len príbeh o jednom protokole. Je to röntgenová snímka celého cross-chain DeFi:

- **Bridging je najslabší článok.** Väčšina najväčších DeFi exploitov (Ronin, Wormhole, teraz Kelp) sa deje na mostoch — miestach, kde sa jeden blockchain musí „spoľahnúť" na druhý.
- **Predvolené nastavenia zabíjajú.** Keď 47% protokolov používa minimálnu konfiguráciu, problém nie je v jednotlivom vývojárovi. Je v systéme, ktorý to umožňuje.
- **Socialized losses sú DeFi realita.** Keď sa niečo pokazí, stratu nenesie ten, kto spravil chybu. Nesú ju stakers, token holderi a bežní používatelia — tí, čo si mysleli, že ich zábezpeka je bezpečná.

Lazarus Group má teraz na konte dva veľké DeFi útoky za 18 dní (Drift Protocol + KelpDAO) — **dohromady vyše 575 miliónov dolárov**. Severná Kórea financuje svoj jadrový program cez exploity v decentralizovaných financiách. To nie je dystopická fikcia. To je piatok v apríli 2026.

**Kto nesie zodpovednosť?** Všetci, ktorí sa tvárili, že jeden podpis stačí na ochranu miliárd.

---

*Zdroje: [Aave Governance — rsETH Incident Report](https://governance.aave.com/t/rseth-incident-report-april-20-2026/24580), [Blockaid Technical Analysis](https://www.blockaid.io/blog/how-a-single-layerzero-dvn-compromise-drained-292m-from-kelpdao), [DeFi Prime](https://defiprime.com/kelpdao-rseth-exploit), [CoinDesk](https://www.coindesk.com/tech/2026/04/19/2026-s-biggest-crypto-exploit-kelp-dao-hit-for-usd292-million-with-wrapped-ether-stranded-across-20-chains)*
