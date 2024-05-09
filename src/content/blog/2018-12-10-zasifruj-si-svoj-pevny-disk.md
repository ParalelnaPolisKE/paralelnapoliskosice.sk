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

Ak už máš passphrase vytvorenú, môžeme sa pustiť do šifrovania. Dovoľ nám však krátku poznámku k obnovovacím kľúčom. Je možné, že budeš vyzvaný uložiť si kópiu tvojho kľúča do cloudu. To však neodporúčame.

V žiadnom prípade by si si nemal uložiť kópiu tvojho kľúča na obnovenie do svojho účtu v operačnom systéme. Ak to spravíš, tak Microsoft, Apple a prakticky ktokoľvek je povinný zdieľať tieto údaje s orgánmi činnými v trestnom konaní, spravodajskými agentúrami, a prakticky kýmkoľvek, kto hackne ich servery a ukradne ich dáta. Všetci vyššie menovaní tak budú môcť ľahko odomknúť tvoj zašifrovaný disk. Namiesto toho by si si mal uložiť tvoj kľúč na iný disk, prípadne vytlačiť na papier. Obnovovací kľúč umožňuje odomknúť tvoj disk a tak je dôležité, aby sa nedostal do nesprávnych rúk.

Šifrovací proces sa líši v závislosti od toho či používaš Windows, OS X, alebo Linux.

### Windows

Šifrovanie celého disku sa vo Windowse volá BitLocker. Celý proces sa mierne líši v závislosti od verzie Windowsu, ktorý používaš.

#### Windows 10

Postupuj podľa pokynov nižšie a potom si prečítaj "Windows < 10" sekciu pre prípadný background a odporúčania.

1. Prihlás sa do Windowsu [pod kontom správcu](https://support.microsoft.com/sk-sk/help/4026923/windows-10-create-a-local-user-or-administrator-account).
1. Klikni na ikonu **Start** a vyhľadaj **Manage BitLocker**.
1. Klikni na **Manage BitLocker** spomedzi výsledkov vyhľadávania.
1. Klikni na **Turn on BitLocker** a nasleduj uvedené pokyny.

Nezabudni, že ak neskôr budeš potrebovať svoj disk odšifrovať, budeš potrebovať svoj [kľúč na obnovenie](https://support.microsoft.com/sk-sk/help/4026181/windows-10-find-my-bitlocker-recovery-key).

#### Windows <10

Ak máš staršiu verziu Windowsu, postup je trochu komplikovanejší. Technológia BitLocker sa totiž nachádza iba na Ultimate/Enterprise edíciách Windows Vista a Windows 7 a Enterprise/Pro edíciách Windows 8 a 8.1. V žiadnej Home edícii ho nenájdeš. O to horšie je, že práve Home edícia je najbežnejšia edícia na laptopoch s predinštalovaným Windowsom. Ak chceš zistiť, či je BitLocker podporovaný tvojou verziou Windowsu, otvor si Prieskumníka, klikni pravým tlačidlom myši na disk C a pozri sa, či máš na výber možnosť **Turn on BitLocker** (ak vidíš možnosť **Manage BitLocker**, blahoželáme, tvoj disk už je zašifrovaný.).

![null](/assets/sif-win10.jpg)

Ak BitLocker nie je podporovaný tvojou verziou Windowsu, môžeš si ho upgradnúť na vyššiu verziu zakúpením licencie (otvor si **Control Panel**, **System and Security**, **System** a klikni na **Get more features with a new edition of Windows**). Ďalšou možnosťou je stiahnúť si softvér na šifrovanie celého disku, napríklad open-source program [VeraCrypt](https://www.veracrypt.fr/en/Home.html).

### OS X

Šifrovanie celého disku v OS X sa volá FileVault.
Najprv si zmeň svoje heslo na heslovú frázu, ktorú si si vygeneroval:

1. Otvor si **System Preferencies**
1. Klikni na ikonku **Security & Privacy**
1. Prepni na kartu **General**
1. Klikni na ikonku uzamknutia v ľavom dolnom rohu, aby si mohol vykonať zmeny
1. Klikni na **Change Password**

Ak máš svoje heslo aktualizované:

1. Prepni na kartu **FileVault**
1. Klikni na **Turn On FileVault** (ak máš namiesto toho možnosť **Turn Off FileVault**, blahoželáme, pretože tvoj disk je už zašifrovaný)
1. Postupuj podľa krokov zobrazených na obrazovke.

### Linux

Narozdiel od Windowsu a Mac OS X, na Linuxe si môžeš zašifrovať disk iba v momente, kedy inštaluješ operačný systém. Ak už teda máš Linux nainštalovaný, ale rád by si si zašifroval svoj disk, musíš ho najprv preinštalovať (nezabudni si predtým bezpečne zálohovať svoje dáta). Hoci existuje veľké množstvo rôznych verzií Linuxu, my použijeme ako príklad Ubuntu. Nastavenie šifrovania celého disku je však na všetkých verziách Linuxu veľmi podobné.

Začni vložením svojho inštalačného DVD alebo USB kľúča do počítača a nasleduj uvedené jednoduché pokyny pre inštaláciu Ubuntu. Keď sa dostaneš na stránku **Installation type**, zaškrtni **Encrypt the new Ubuntu installation for security** a klikni na **Install now**.

![null](/assets/sif-lin01.jpg)

Na nasledujúcej stránke **Choose a security key**, musíš vložiť svoju šifrovaciu passphrase. Budeš ju musieť písať zakaždým, keď budeš chcieť odomknúť svoj disk. Ak chceš aby tvoja passphrase mala šancu odolať aj profesionálnym hackerom, riaď sa [týmito pokynmi](/blog/2018-12-07-vytvor-si-heslo).

![null](/assets/sif-lin02.jpg)

Nakoniec klikni na **Install now** a nasleduj zvyšné pokyny až kým sa nedostaneš ku karte **Who are you**. Daj si záležať na tom, aby si si zvolil naozaj silné heslo. Ak ti niekto ukradne tvoj laptop, toto heslo je to jediné, čo stojí medzi zlodejom a tvojimi dátami. Taktiež sa uisti, že položka **Require my password to log in** je zaškrtnutá a **Log in automatically** je nezaškrtnutá. V tejto chvíli nemá žiaden zmysel vybrať možnosť **Encrypt my home folder**, keďže si si práve zašifroval celý svoj disk.

![null](/assets/sif-lin03.jpg)

Tak a to je všetko. Dúfame, že ti naše návody pomohli a že odteraz bude tvoj disk v bezpečí.
