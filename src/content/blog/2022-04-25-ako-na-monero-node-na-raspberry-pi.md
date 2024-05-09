---
title: 'Ako na Monero node na Raspberry Pi'
author: Monika Jassova
cover: /assets/monero-node-header.png
tags:
  - návod
---

*Príspevok zhŕňa zdroje, podľa ktorých som postupovala pri inštalácii Monero nodu (uzla) na Raspberry Pi, používanie s Torom a poznatky z tohto procesu.*

## Prečo bežať vlastný node?
- vyššia bezpečnosť: celý blockchain sa sťahuje na tvoje zariadenie a všetky transakcie a blocky sa lokálne overujú. Pripojená peňaženka pre účely transakčnej histórie skenuje kópiu blockchainu na lokálnom node namiesto spoliehania sa na tretiu stranu.
- prispievaš k decentralizácii siete

### ...a prečo ho používať v kombinácii s Tor/VPN?
- vyššie súkromie: pri vysielaní do Monero siete je IP adresa odhalená, preto node, ktorý obdrží transakciu, môže identifikovať fyzickú lokáciu/identitu odosielateľa. Traffic cez nody je viditeľný aj pre poskytovateľov internetu a ďalšie strany vykonávajúce sledovanie, preto analýza trafficu nodu(-ov), ktoré obdržia viaceré transakcie pochádzajúce z rovnakej IP adresy, môže viesť k odhaleniu, že sú transakcie prepojené.
- vyhnutie sa potenciálnej cenzúre transakcií

**[Tor](https://sk.wikipedia.org/wiki/Tor_(sie%C5%A5))**: decentralizovaná open-source privátna sieť vyvinutá tak, aby žiaden účastník nevedel identifikovať zdroj konkrétneho vysielania.</br>
**[VPN](https://sk.wikipedia.org/wiki/Virtu%C3%A1lna_priv%C3%A1tna_sie%C5%A5)** (virtuálna privátna sieť): posiela traffic cez šifrovaný tunel, ktorý poskytovatelia internetu a vlády nevedia sledovať. Dôvera sa presúva na poskytovateľov VPN, ktorí však môžu držať logy.

## Čo potrebujeme
- https://github.com/monero-ecosystem/PiNode-XMR Monero node pre jednodoskové počítače s webovým rozhraním a predkonfigurovanými doplnkovými nástrojmi a s jednoduchou inštaláciou
- jednodoskový počítač: je lacný a má nízku spotrebu energie. [Prehľad podporovaných HW](https://github.com/monero-ecosystem/PiNode-XMR/wiki/Hardware#hardware), najrozšírenejšie a asi najľahšie zohnateľné je Raspberry Pi (ja som použila model 4B s 4GB RAM), autor PiNode odporúča Odroid s podporou AES pre rýchlejšie de/šifrovanie a Rock64 pre najlepší pomer cena/výkon.
- na uloženie blockchainu 256GB MicroSD kartu alebo lepšie externý disk, odkiaľ sa môže bootovať aj OS. Ja som použila SSD Samsung T5 (moje Pi s OS a kompletným Monero blockchainom momentálne zaberá takmer 140 GB).

## Postup
Stačí postupovať podľa oficiálneho manuálu, podrobný postup od inštalácie OS na Pi aj s tipmi na riešenie problémov nájdete v tomto [videotutoriáli](https://www.youtube.com/watch?v=riK8t_4llXw). Tu sú hlavné body so zameraním na Tor:
1. je potrebné začať s čerstvou inštaláciou Raspberry Pi OS Lite a defaultným userom pi https://www.raspberrypi.com/software
2. samotná inštalácia PiNode spočíva v spustení jedného skriptu: https://github.com/monero-ecosystem/PiNode-XMR/wiki/Manual#raspberry-pi, všetky ďalšie nastavenia a úkony sa robia pomocou webového rozhrania alebo systémového menu
3. v systémovom menu nezabudni zmeniť heslo pre pinodexmr usera a prípadne nastaviť prístupové údaje pre RPC spojenie: https://github.com/monero-ecosystem/PiNode-XMR/wiki/Manual#master-login-password
4. nainštaluj Tor (v menu časť Extra Network Tools): https://github.com/monero-ecosystem/PiNode-XMR/wiki/Manual#install-tor
5. na webovom rozhraní (stránka Node Control) si pridaj Tor seed peerov: https://monerodocs.org/infrastructure/tor-onion-p2p-seed-nodes a spusti node v želanom móde: https://github.com/monero-ecosystem/PiNode-XMR/wiki/Manual#anonymity-nodes. Verejnú onion adresu z tejto obrazovky použiješ na pripojenie peňaženky (pozn.: ďalšou výhodou nodu s Torom je, že netreba nastavovať presmerovanie portov na routeri).
6. ak všetko fičí - na stránke Node Status je vybraný mód active (running), node je Busy Syncing: true a blocky pribúdajú, treba počkať na stiahnutie celého blockchainu (v mojom prípade to trvalo asi 9 dní) a potom môžeš už aj posielať transakcie. Po prvotnej synchronizácii nie je beh lokálneho nodu záťažou pre procesor a sieť.

## Nastavenie peňaženky Monerujo
1. nainštaluj si [Orbot](https://guardianproject.info/apps/org.torproject.android), ktorý umožňuje používať mobilné aplikácie so sieťou Tor
2. v Orbot zapni **VPN Mode** a kolieskom v sekcii **Tor-Enabled Apps** nastav Monerujo (a ďalšie appky, ktoré chceš používať cez Tor), aby to vyzeralo takto:

   ![](/assets/monero-node-orbot.png)
   Orbot zavri.
3. spusti [Monerujo](https://www.monerujo.io) (Orbot sa na pozadí sám naštartuje), ťukni na ikonku pred názvom remote nodu, zmení sa na cibuľu Toru:

![](/assets/monero-node-01-02.jpg)

4. ťukni na node a na nasledujúcej obrazovke tlačidlom **"+"** pridaj svoj node (onion adresu, port a prípadne usera a heslo), potvrď pridanie

![](/assets/monero-node-03.jpg)

5. Monerujo by sa malo k tvojmu nodu pripojiť a existujúca/nová peňaženka by sa po otvorení mala zosynchronizovať

![](/assets/monero-node-04-05.jpg)

## Problémy a riešenia
- synchronizácia sa mi raz zasekla, v tomto prípade treba stopnúť node, využiť možnosť [Pop Blocks](https://github.com/monero-ecosystem/PiNode-XMR/wiki/Manual#pop-blocks) a naštartovať node. Skús zadať väčšie číslo, ak malé nepomôže (s desiatkami a stovkami mi to nefungovalo).
- po čase sa synchronizácia spomalila a Pi aj SSD boli dosť teplé na dotyk, pomohol patch podľa https://forums.raspberrypi.com/viewtopic.php?t=245931
- stalo sa mi, že zadaná transakcia ostala visieť v lokálnom mempoole a nebola v mempoole externého blockchain explorera (napr. [xmrchain.net](https://xmrchain.net)). Asi to spôsobilo zadanie v momente, kedy node nebol plne zosynchronizovaný, takže si treba najprv overiť na externom exploreri, či node má rovnaký počet blockov. Takto zaseknutá transakcia by mala zlyhať po 24 hodinách a prostriedky byť opäť dostupné. Mne nakoniec prešla po vyše 5 hodinách, takže príčinou mohlo byť nespoľahlivé Tor peer spojenie, aby sa vyslala ďalej do siete. Odporúča sa stopnúť node, pridať nového seed peera a reštartovať node (bod 5 postupu).
