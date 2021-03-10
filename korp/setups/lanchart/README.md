# LANCHART-setuppet

Korp-setup til LANCHART-dataene.


## OBS

- Issue med tomme opmærkninger. cwb-encode ændrer tomme opmærkninger til `__UNDEF__`. Man kan således ikke umiddelbart skelne mellem tomme og ikke-tomme intervaller.
- Issue med at "kompilere baseret på" IPA og TtT. Er tegnene i de tiers for mærkelige? (Der er også problemer med det andre steder, fx i Jens Billes visebog).


## Projektstruktur

```
lanchart/
├── README.md
├── corpora
│   ├── annotated                  # Annoterede korpusfiler (vrt-filer; git-ignores)
│   ├── data                       # Encodede korpusdata (git-ignores)
│   ├── encodingscripts            # Scripts til at encode korpusdata i CWB
│   │   ├── encode.sh              # Overordnet script der kalder encode_LANCHART.sh
│   │   ├── encode_LANCHART.sh     # Script der encoder det enkelte korpus.
│   │   └── make_cwb_info.sh       # Script til at lave korpus-info (antal sætninger etc.)
│   ├── registry                   # CWB-registry (git-ignores)
│   └── timedata                   # Mappe til data til tidsgrafen (p.t. ikke i brug)
├── docker-compose.yml             # Docker-compose-fil til at bygge Docker-setuppet
└── frontend
    ├── Dockerfile                 # Frontend-serverens Docker-fil
    ├── app
    │   ├── config.js
    │   ├── modes
    │   │   ├── common.js
    │   │   └── default_mode.js    # Konfiguration af LANCHART-korpusset
    │   └── translations           # Oversættelser af labels og variable
    └── start.sh                   # Script til at starte Korp-instansen
```

## Kør LANCHART-setuppet i Docker

Husk at stoppe evt. kørende docker-containere på port 1234 og port 9111. (Brug docker-compose down i den relevante setup-mappe).

Det grundlæggende Korp-docker-image skal være bygget og tilgængeligt før det nedenstående vil virke. Se `docker-compose.yml` i `infrastructure/korp`.

Byg det specifikke Korp-setup i lanchart-mappen. Kør herefter encodingscriptet `encode.sh` med parameteren `lanchart`, hvilket igen kører `encode_LANCHART.sh`, der indlæser diverse LANCHART-vrt-filer i CWB i Docker-backend-containeren.

```
cd setups/lanchart
docker-compose up -d --build ; docker-compose exec backend bash /opt/corpora/encodingscripts/encode.sh lanchart
```

Nu kan LANCHART-korpusset tilgås i Korp på http://localhost:9111, og backenden på http://localhost:1234.


## Frontend-konfiguration

I `frontend` konfigureres korpusserne i Korp-frontenden.

- I `config.js` specificeres de korpusfaner der skal være, i settings.modeConfig. Og  settings.korpBackendURL sættes til localhost.
- I `common.js` har jeg fjernet en del ting der ikke virkede relevante.
- I `default_mode.js` specificeres diverse attributter til LANCHART-korpusset.

Husk at validere diverse javascript-filer for at undgå at se underlige fejl i javascript-konsollen. Med https://codebeautify.org/jsvalidate eller lignende. En særlig gotcha er at variable nu bruger camelcase i stedet for snakecase, fx `settings.preselectedCorpora` i stedet for `settings.preselected_corpora`.

Husk ift. håndholdt styling af attributter i højrepanelet: The S-attrs used here should be kept under structAttributes in the corpora. Avoid displaying them twice by setting hideSidebar: true in the attribute definitions.



## Mappen corpora

Læg dine korpusser her; corpora bliver mappet til /opt/corpora i Docker-imaget.


### Indhold

- annotated: Annoteret tekstversion af korpusser (vrt-format).
- data: Korpusser der er encodet som binære filer af toolet cwb-encode.
- registry: Her holdes der styr på de korpusser der er encodet så CWB kan finde dem.
- encodingscripts: scripts til at encode korpusser i CWB.



Philip Diderichsen, februar 2020
