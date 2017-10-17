Silmätaudit
===========

Kohonnut silmänpaine
--------------------

.. mermaid::

   graph TD
      A((Silmänpaine)) -->|yli 40 mmHg| Ba
      A -->|yli 30 mmHg| C(<strong>Ganfort</strong> 1 x 1</br><strong>Azopt</strong> 1 x 1</br><strong>Alphagan</strong> 1 x 1)
      Bb --> C
      C --> D("Painemittaus 30 min välein")
      D -->|Paine 30 mmHg tai alle| E(Reseptille</br><strong>Asetatsoliamidi</strong> 250 mg 1 x 1</br><strong>Lumigan</strong> 1 x 1</br><strong>Azarga</strong> 1 x 2)
      E --> F("Painekontrolli hoitajalle 1 viikon kuluttua</br>Reagointipaine esim. 25 mmHg</br>Jatkokontrolli esim. 1 kk")
      subgraph ""
      Ba(Kammiokulma)
      Bb(<strong>Asetatsoliamidi</strong> 250 mg 2 x 1)
      Bc(Laseriridotomia)
      Ba -->|Avoin| Bb
      Ba -->|Kiinni| Bc
      Bc -->|"Paine koholla"| Bb
      end

Värikalvotulehdus
-----------------

.. mermaid::

graph TD
   subgraph Hoito
   Da("Lievä</br>
Prednisoloni tipat 1 x 8 ja annoslasku kahdella tipalla viikoittain</br>
Tropikamidi tipat 1 x 3 - viikon ajan</br>
Prednisoloni 5 mg/g yöksi 4 viikon ajan") --- Daa(Seurantakäynti 4 viikon kuluttua)
   end
   subgraph Löydökset
      Ca(Sidekalvo) --- Caa(Sarveiskalvoa reunustava verestys)
      Cb(Sarveiskalvo)
      Cba(Pinnallinen vaurio) --> Cbaa(Fluoreseiinivärjäytyminen)
      Cbb(Väliaineen tulehdus) --> Cbba(Sarveiskalvon sameus)
      Cbc(Descementinkalvon poimut) --> Cbca(Merkittävä tulehdus?)
      Cbd(Sisäpinnan presipitaatit) --> Cbda(Herpesiriitti?)
      Cb --- Cba
      Cb --- Cbb
      Cb --- Cbc
      Cb --- Cbd
      Cc(Etukammio)
      Cca(Solut)
      Ccb(Valotie)
      Cc --- Cca
      Cc --- Ccb
      Cd(Lasiaistila) --- Cda(Ei soluja)
      Ce(Näköhermo) --- Cea(Normaali)
      Cf(Verkkokalvo) --- Cfa(Normaali</br>Ei retiniittiä)
   end
   subgraph Oireet
      Ba(Kipu)
      Bb(Punoitus)
      Bc(Valonarkuus)
      Bd(Näkö heikentynyt)
   end
