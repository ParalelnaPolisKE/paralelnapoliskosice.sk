---
title: Stručný úvod do Bisq zmenárne
author: Erik Svagrovsky
cover: /assets/bisq.png
tags:
  - bisq
  - exchange
  - zmenáreň
---
Ako krypto nadšenec som o Bisq ako decentralizovanej zmenárni počul už dávnejšie, no až posledné týždne ma priviedli k prečítaniu si základných dokumentov. Čím som sa o Bisq ako celom projekte viac dozvedal, tým viac ma to zaujímalo, a tak som sa rozhodol, že skúsim niečo preložiť a priniesť, podľa mňa hodnotné, informácie aj ľuďom, ktorým čítanie anglických textov robí ťažkosti.

> Nasledujúci text je preklad používateľkého dokumentu [A Brief Introduction to Bisq](https://docs.bisq.network/intro.html).

## Čo je Bisq

Bisq je **decentralizovaná bitcoinová burza/zmenáreň**, ktorá sa dá najlepšie pochopiť v zmysle jej hlavných komponentov:

1. Bisq je multiplatformová **desktopová aplikácia**, ktorá umožňuje komukoľvek kúpiť a predať bitcoin za národné meny alebo iné kryptomeny.
2. Bisq je **obchodný protokol**, ktorý umožňuje jednotlivcom priamu výmenu cez internet a to bez využitia služieb dôveryhodnej tretej strany.
3. Bisq je **sieť (typu) peer to peer** tvorená Bisq aplikáciami, ktoré vzájomne komunikujú, spájajú sa a spolupracujú implementovaním Bisq obchodného protokolu. Bisq sieť je _plne_ peer-to-peer, nepotrebuje žiadne centrálne servery a tým pádom nemá zraniteľnosti z toho vyplývajúce.

Bisq **nie je spoločnosť**. Bisq je **slobodný softvér** vydaný pod GPLv3. Bisq je _postavený_ jednotlivcami z celého sveta, ktorí sa rozhodli spolupracovať. A nakoniec Bisq je _používaný_ jednotlivcami z celého sveta, ktorí sa rozhodli cez Bisq slobodne obchodovať.

## Prečo Bisq existuje

Misia pre Bisq je poskytnúť **bezpečný**, **privátny** a **cenzúre odolný** spôsob výmeny bitcoinu za národné meny a iné kryptomeny cez internet.

Keď hovoríme **bezpečný**, myslíme tým bezpečnosť pre prostriedky užívateľov. Väčšina súčasných bitcoinových zmenární je _centralizovaná_, vyžadujúca držanie bitcoinov, minimálne na určitý čas, na serveroch zmenární. Pri tisícoch užívateľov to dokáže vytvoriť extrémne silný motív k hacknutiu daných serverov a odcudzeniu bitcoinov týchto užívateľov. K takýmto hackom dochádza neustále.

Keď hovoríme **privátny**, myslíme tým kontrolu užívateľov nad vlastnými informáciami. Dnes väčšina centralizovaných zmenární požaduje osobné informácie k zriadeniu účtu a vytvoreniu tak prepojenia medzi obchodnou aktivitou a príslušnou identitou. Takéto konanie vytvára pre užívateľa extrémne riziko, že jeho osobné údaje a finančné informácie budú odcudzené, vyzradené alebo akokoľvek použité proti jeho záujmom.

Keď hovoríme **odolný voči cenzúre**, myslíme tým možnosť užívateľov slobodne obchodovať medzi sebou bez zasahovania tretej strany. Súčasné centralizované zmenárne sú veľmi citlivé na takéto zasahovanie. Pre ich podstatu sú nútené pôsobiť v rámci jednej alebo druhej právnej jurisdikcie a riskovať, že budú pokutované alebo zrušené, ak nie sú v súlade so zákonmi a inými pravidlami danej jurisdikcie. To môže znamenať aj obmedzenia, komu je obchodovanie dovolené, s čím sa môže obchodovať a takmer stále to obsahuje požiadavky na zber osobných informácií popísaných vyššie.

Čo je potrebné, je zmenáreň, kde užívatelia majú **kontrolu nad svojimi peniazmi**, **súkromie je predvolené** a je zabezpečená **sloboda prevodov**. Bisq sme vytvorili so zreteľom na tieto potreby.

Ako je motto pre Bitcoin "buď si vlastnou bankou", motto pre Bisq je "**buď si vlastnou zmenárňou**."

## Ako Bisq funguje

### V stručnosti

Predstav si, že si chceš kúpiť bitcoin (BTC) výmenou za euro (EUR). V Bisq terminológii vystupuješ ako _kupujúci_ BTC, hľadajúc _predávajúceho_ BTC, ktorý akceptuje rovnakú cenu a platbu v EUR. Na vykonanie takéhoto obchodu v Bisq musíš prejsť sériou krokov podobných týmto:

1. Stiahneš a nainštaluješ si aplikáciu Bisq na desktop alebo laptop
2. Nastavíš v Bisq detaily pre spôsob platby
3. Prelistuješ si zoznam existujúcich ponúk na predaj BTC za EUR
4. Vyberieš si existujúcu ponuku a odsúhlasíš kúpu BTC od predávajúceho za tvoje EUR
5. Pošleš EUR zo svojho bankového účtu na účet predávajúceho a v Bisq uvedieš, že si tak spravil
6. Spolu s predávajúcim vyčkáte na vykonanie bankového prevodu
7. Predávajúci v Bisq potvrdí zrealizovaný bankový prevod
8. Od predávajúceho získavaš BTC a obchod je dokončený

Tieto kroky sa môžu líšiť v závislosti od toho či chceš kupovať alebo predávať bitcoin, či si ponuku _vytvoril_ alebo _prijal_, aké platobné metódy máš k dispozícii a podobne. V každom prípade kroky spomenuté vyššie sú pre podobné obchody skôr odlišné od krokov na centralizovaných zmenárňach.

### Čím sa obchodovanie na Bisq odlišuje

Okrem zjavného rozdielu v tom, že Bisq je desktopová aplikácia a nie webová aplikácia v prehliadači, prvým rozdielom, ktorý si skúsený obchodník všimne je **absencia automatického párovania ponúk** v Bisq zmenárni. Užívatelia si skôr manuálne hľadajú a vyberajú ponuky, ktoré vyhovujú ich kritériám. Takýto prístup umožňuje ozajstné peer-to-peer obchodovanie a zabezpečuje, že užívatelia majú plnú kontrolu nad tým, s kým obchod uzavrú.

Bisq je medzi decentralizovanými bitcoin zmenárňami jedinečný tiež v spôsobe akým koordinuje **"out-of-band fiat" platby**. Bisq nemá integrovaný bankový ani iný platobný systém pre národné meny. Bisq obchodný protokol skôr organizuje proces spolupráce medzi predávajúcim a kupujúcim za účelom fiat platby _mimo_ Bisq aplikácie ako bolo prezentované v krokoch 5-7 vyššie.

Tieto a ďalšie rozdiely majú pre Bisq užívateľov za následok istý kompromis. A tým je, že **uzatvorenie obchodu trvá dlhšie**, no samotný **obchod je oveľa bezpečnejší**, **privátny** a **odolný voči cenzúre**.

### Ako Bisq uchováva prostriedky v bezpečí

* Bisq je **kompletne "non-custodial"** - užívatelia majú celý čas kontrolu nad svojimi fiat alebo kryptomenovými prostriedkami
* Obchody zahrnujú **kauciu** od kupujúceho a predávajúceho za účelom predchádzania podvodov
* Prostriedky na obchodovanie a kaucie sú uzamknuté v **"2-of-3 multisig escrow"**
* Spory sú riešené cez **ľudský decentralizovaný arbitrážny systém**

### Ako Bisq uchováva dáta privátne

* V Bisq **nepotrebujete žiadnu registráciu**, **ani centralizované overovanie totožnosti**
* Každá Bisq aplikácia je **služba skrytá za Tor**
* Bisq **nemá centrálne servery alebo databázu** na záznam údajov
* **Dáta sú šifrované** spôsobom, ktorý dovoľuje čítať údaje o obchode iba zúčastneným stranám

### Ako je Bisq odolný voči cenzúre

* Bisq sieť je **plne distribuovaná P2P sieť**, a tak je ju veľmi ťažko vypnúť
* Bisq sieť je **postavená nad Torom**, a tým zdedila aj jeho odolnosť voči cenzúre
* **Bisq je kód**, nie spoločnosť; nie je zapísaný do registra a nemôže byť zrušený
