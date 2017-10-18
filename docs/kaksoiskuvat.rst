############
Kaksoiskuvat
############

Tutkittava kaksoiskuvien näkyminen

- Lähelle ja etäälle
- Yksittäisillä silmillä ja molemmilla silmillä

Jos epäily jättisoluvaltimotulehduksesta, ota päivystyksellisesti

- PVK
- CRP
- Lasko

**************************
Yhdellä silmällä katsoessa
**************************

Silmän taittavien väliaineiden ongelma.


*****************************
Molemmilla silmillä katsoessa
*****************************

Vaihtelevasti kahtena näkemistä
===============================

.. mermaid::

  graph TD
  Liikerajoitus{Liikerajoitus}
  Liikerajoitus -->|Kyllä| Myastenia(Myastenia?)
  Liikerajoitus -->|Ei| Liikerajoitus_ei(Phoria</br>dekomp)


Jatkuvasti kahtena näkemistä
===============================

.. attention::
  Päivystyksenä neurologin tekemä arviointi ja kuvantaminen

Syitä
-----

- Aivohermopareesi
- INO

  - Lähennysvajaus + silmävärve
  - Kohdistus toimii

- Jättisoluvaltimotulehdus
- Sinus cavernosus oireyhtymä

  - Kongestio
  - Trigeminusvaurio
  - Yleisoireet

- Silmäkuopan ylimääräinen aines

  - Exophtalmus
  - Kemoosi
  - Hidas kehittyminen

- Trauma


Oculomotorius
-------------

- Alas ja ulos
- Laajentunut mustuainen


.. mermaid::

  graph LR
  Neurologia_kons_kuvaus_paivystys("Päivystyksenä neurologin tekemä arviointi ja kuvantaminen")
  Neurologia_kons_kuvaus_kiireellinen("Kiireellisenä neurologin tekemä arviointi ja kuvantaminen")

  Kriteerit("<ul>
   <li>Mustuaisaffiisio</li>
   <li>Alle 55 vuotias</li>
   <li>Muita neurologisia oireita</li>
  </ul>")
  Kriteerit -->|Kyllä| Neurologia_kons_kuvaus_paivystys
  Kriteerit -->|Ei| Neurologia_kons_kuvaus_kiireellinen


Trochlearis
-----------

- Pystysuuntainen tai vino kaksoiskuva
- 3 step test


.. mermaid::

  graph LR
  Neurologia_kons_kuvaus_paivystys("Päivystyksenä neurologin tekemä arviointi ja kuvantaminen")
  Neurologia_kons_kuvaus_kiireellinen("Kiireellisenä neurologin tekemä arviointi ja kuvantaminen")

  Kriteerit("<ul>
   <li>Muita aivohermooireita</li>
   <li>Alle 45 vuotias eikä traumaa</li>
   <li>Alle 45-55 vuotias eikä diabetesta tai verenpainetautia</li>
  </ul>")
  Kriteerit -->|Kyllä| Neurologia_kons_kuvaus_paivystys
  Kriteerit -->|Ei| Neurologia_kons_kuvaus_kiireellinen


Abducens
--------

- Vaakasuuntainen kaksoiskuva


.. mermaid::

  graph LR
  Neurologia_kons_paivystys("Päivystyksenä neurologin tekemä arviointi")

  Kriteerit("<ul>
   <li>Alle 45 vuotias</li>
   <li>Alle 45-55 vuotias eikä diabetesta tai verenpainetautia</li>
   <li>Kova kipu</li>
   <li>Syöpä</li>
   <li>Molemminpuoleinen</li>
   <li>Näköhermonystyn turvotus</li>
   <li>Muita neurologisia oireita</li>
  </ul>")
  Kriteerit -->|Kyllä| Neurologia_kons_paivystys
  Kriteerit -->|Ei| Seuranta


