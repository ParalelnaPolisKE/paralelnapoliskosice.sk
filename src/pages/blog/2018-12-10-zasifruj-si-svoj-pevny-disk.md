---
title: 'Zašifruj si svoj pevný disk'
author: Jakub Hricov
cover: /assets/bekir-donmez-708863-unsplash-04.jpg
tags:
  - návod
  - rýchlokurz
---

> Ako môžu obyčajní ľudia začať so šifrovaním? Prvá vec, ktorá človeku príde na um je šifrovanie celého disku, ktoré prináša značné benefity v ochrane súkromia a zároveň to zvládne takmer každý. Toto šifrovanie je zabudované prakticky do všetkých známych operačných systémov na trhu. Častokrát je to jediná možnosť ako ochrániť svoje dáta v prípade straty, či krádeže tvojho laptopu a pritom si vyžaduje skutočne len minimálne úsilie.

> Ak sa niekto fyzicky dostane do tvojho počítača a ty nemáš zašifrovaný disk, môže ti veľmi ľahko ukradnúť všetky súbory. Nezáleží na tom, či máš dobré heslo. Zašifrovanie disku ochráni teba a tvoje dáta v prípade, že by sa dostali do nesprávnych rúk (či už by si si ho niekde zabudol, vlámali by sa ti do bytu, či kancelárie, alebo by sa ho zmocnili vládni agenti).

\- z článku [“Encrypting Your Laptop Like You Mean It”](https://theintercept.com/2015/04/27/encrypting-laptop-like-mean/)

Odporúčame ti prečítať si celý článok až do konca. Je krátky a poskytne ti skvelý prehľad základných konceptov, na ktorých je šifrovanie celého disku postavené. Tvoja domáca úloha je súhrnom krokov popísaných v tomto článku, ale:

Ak si chceš zašifrovať svoj pevný disk a skutočne ochrániť všetky svoje dáta, nestačí len bezducho nasledovať vyššie popísané kroky. Musíš skutočne porozumieť tomu, pred čím šifrovanie disku chráni a pred čím nie, a ako sa vyhnúť bežným chýbam, ktoré by útočníkovi umožnili tvoje šifrovanie ľahko obísť.

## Úloha

Priprav si kocky, lebo je čas na [vytvorenie ďalšej passphrase](/blog/2018-12-07-vytvor-si-heslo). Tá bude slúžiť na zašifrovanie tvojho disku.

Ak už máš passphrase vytvorenú, môžeme sa pustiť do šifrovania. Dovoľ nám však krátku poznámku k aktivačným kľúčom. Je možné, že budeš vyzvaný uložiť si kópiu tvojho kľúča do cloudu. To však neodporúčame.

V žiadnom prípade by si si nemal uložiť kópiu tvojho aktivačného kľúča do svojho účtu v operačnom systéme. Ak to spravíš, tak Microsoft, Apple a prakticky ktokoľvek je povinný zdieľať tieto údaje s orgánmi činnými v trestnom konaní, spravodajskými agentúrami, a prakticky kýmkoľvek, kto hackne ich servery a ukradne ich dáta. Všetci vyššie menovaní tak budú môcť ľahko odomknúť tvoj zašifrovaný disk. Namiesto toho by si si mal uložiť tvoj kľúč na iný disk, prípadne vytlačiť na papier. Aktivačný kľúč umožňuje odomknúť tvoj disk a tak je dôležité, aby sa nedostal do nesprávnych rúk.

Šifrovací proces sa líši v závislosti od toho či používaš Windows, OS X, alebo Linux.

### Windows

Šifrovanie celého disku sa vo Windowse volá BitLocker. Celý proces sa mierne líši v závislosti od verzie Windowsu, ktorý používaš.

#### Windows 10

Postupuj podľa pokynov návodu k Microsoftu a potom si prečítaj “Windows <10” sekciu pre prípadný background a odporúčania.

#### Windows <10

Postupuj podľa pokynov návodu od The Intercept. Je dôkladný, ale pritom stručný.

### OS X

Šifrovanie celého disku v OS X sa volá FileVault.
Najprv si zmeň svoje heslo na heslovú frázu, ktorú si si vygeneroval:

1. Otvor si “System Preferencies”
1. Klikni na ikonku “Security & Privacy”
1. Prepni na kartu “General”
1. Klikni na ikonku uzamknutia v ľavom dolnom rohu, aby si mohol vykonať zmeny
1. Klikni na “Change Password”

Ak máš svoje heslo aktualizované:

1. Prepni na kartu FileVault
1. Klikni na “Turn On FileVault” (ak máš namiesto toho možnosť Turn Off FileVault, blahoželáme, pretože tvoj disk je už zašifrovaný)
1. Postupuj podľa krokov zobrazených na obrazovke.

### Linux

Postupuj podľa pokynov [návodu od The Intercept](https://theintercept.com/2015/04/27/encrypting-laptop-like-mean/#linux). Je dôkladný, ale pritom stručný.
