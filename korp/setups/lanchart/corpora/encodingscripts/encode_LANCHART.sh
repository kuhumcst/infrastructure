#!/bin/bash
# lanchart_corpora_encoding_script.sh
# Encode LANCHART-korpusser vha. cwb-encode.

CORPUSFILE=$1
CORPUSNAME=`echo $CORPUSFILE | sed -e 's/\.vrt//g'`

CORPUSUPPER=${CORPUSNAME^^}
CORPUSLOWER=${CORPUSNAME,,}
CORPORADIR=`dirname "$0"`/..
CORPORADIR=`realpath $CORPORADIR`

# Definer P-attributter til de forskellige korpusser.
if [ 0 = 1 ] ; then P_ATTRS=""  # Hack for at kunne generere de næste linjer ens.
elif [ "$CORPUSUPPER" = LANCHART_AMAGER ] ; then ATTRS="-S corpus:0+label -S text:0+filename+dato+projekt+samtaletype+name+size+generation+oldnew+textmin+textmax+textduration -S turn:0+speaker+koen+rolle+foedselsaar+socialklasse+turnmin+turnmax+turnduration -P ipa -P ttt -P redpos -P pos -P aktivitetstype -P genre -P interaktionsstruktur -P makrosproghandling -P makrosproghandling1 -P samtaletype -P udsigelse -P iiv_aig_kommentarer -P iiv_smu_kommentarer -P ajmarkering -P ammarkering -P anrmarkering -P anmarkering -P dschwadmarkering -P engmarkering -P rumarkering -P wmarkering -P xschwadmarkering -P languagerevised -P languagestated -P languagerevised1 -P languagestated1 -P comments_global -P global_turn -P global_sync -P comments_x -P comments_y -P iiv_smul_kommentarer -P rumarkering1 -P komm -P et -P ede -P blxdt_d -P blxdt_d1 -P stxdafv -P stxdafv1 -P fynsk_int -P palatalisering -P leksis -P leksis1 -P prxp -P mgl_vokalkontrast -P mgl_vokalkonstrast -P stemt_klusil -P fortsxtterint -P ustemt_r -P aux -P case -P comments -P dp -P emphasis -P epistsxtn -P events -P generisk -P gex -P giddy -P global_events -P gramma_ii -P grammatik -P kommentarer -P ordstil -P part -P semvar -P sh -P syntax -P translation -P trdk -P trdk1 -P turn -P turnummer -P uncertain_transcription -P xmin -P xmax -P xlength -P sync -P phonetic"
elif [ "$CORPUSUPPER" = LANCHART_BORNHOLM ] ; then ATTRS="-S corpus:0+label -S text:0+filename+dato+projekt+samtaletype+name+size+generation+oldnew+textmin+textmax+textduration -S turn:0+speaker+koen+rolle+foedselsaar+socialklasse+turnmin+turnmax+turnduration -P ipa -P ttt -P redpos -P pos -P aktivitetstype -P genre -P interaktionsstruktur -P makrosproghandling -P makrosproghandling1 -P samtaletype -P udsigelse -P iiv_aig_kommentarer -P iiv_smu_kommentarer -P ajmarkering -P ammarkering -P anrmarkering -P anmarkering -P dschwadmarkering -P engmarkering -P rumarkering -P wmarkering -P xschwadmarkering -P languagerevised -P languagestated -P languagerevised1 -P languagestated1 -P comments_global -P global_turn -P global_sync -P comments_x -P comments_y -P iiv_smul_kommentarer -P rumarkering1 -P komm -P et -P ede -P blxdt_d -P blxdt_d1 -P stxdafv -P stxdafv1 -P fynsk_int -P palatalisering -P leksis -P leksis1 -P prxp -P mgl_vokalkontrast -P mgl_vokalkonstrast -P stemt_klusil -P fortsxtterint -P ustemt_r -P aux -P case -P comments -P dp -P emphasis -P epistsxtn -P events -P generisk -P gex -P giddy -P global_events -P gramma_ii -P grammatik -P kommentarer -P ordstil -P part -P semvar -P sh -P syntax -P translation -P trdk -P trdk1 -P turn -P turnummer -P uncertain_transcription -P xmin -P xmax -P xlength -P sync -P phonetic"
elif [ "$CORPUSUPPER" = LANCHART_KOEGE ] ; then ATTRS="-S corpus:0+label -S text:0+filename+dato+projekt+samtaletype+name+size+generation+oldnew+textmin+textmax+textduration -S turn:0+speaker+koen+rolle+foedselsaar+socialklasse+turnmin+turnmax+turnduration -P ipa -P ttt -P redpos -P pos -P aktivitetstype -P genre -P interaktionsstruktur -P makrosproghandling -P makrosproghandling1 -P samtaletype -P udsigelse -P iiv_aig_kommentarer -P iiv_smu_kommentarer -P ajmarkering -P ammarkering -P anrmarkering -P anmarkering -P dschwadmarkering -P engmarkering -P rumarkering -P wmarkering -P xschwadmarkering -P languagerevised -P languagestated -P languagerevised1 -P languagestated1 -P comments_global -P global_turn -P global_sync -P comments_x -P comments_y -P iiv_smul_kommentarer -P rumarkering1 -P komm -P et -P ede -P blxdt_d -P blxdt_d1 -P stxdafv -P stxdafv1 -P fynsk_int -P palatalisering -P leksis -P leksis1 -P prxp -P mgl_vokalkontrast -P mgl_vokalkonstrast -P stemt_klusil -P fortsxtterint -P ustemt_r -P aux -P case -P comments -P dp -P emphasis -P epistsxtn -P events -P generisk -P gex -P giddy -P global_events -P gramma_ii -P grammatik -P kommentarer -P ordstil -P part -P semvar -P sh -P syntax -P translation -P trdk -P trdk1 -P turn -P turnummer -P uncertain_transcription -P xmin -P xmax -P xlength -P sync -P phonetic"
fi


# Tjek om korpusfilen findes.
if [ -f "$CORPORADIR/annotated/$CORPUSFILE" ]
then
    # Fjern encodede filer hvis de findes. Lav direktoriet til encodede filer på ny.
    rm -rf $CORPORADIR/data/$CORPUSLOWER
    mkdir -p $CORPORADIR/data/$CORPUSLOWER

    # Fjern registryindgangen.
    rm -f $CORPORADIR/registry/$CORPUSLOWER

    # Kør cwb-encode med diverse parametre:
    # -d: Det direktorie hvor de encodede filer skal ligge.
    # -R: Registryindgangen.
    # -c: Encoding.
    # -f: Inputfil (vrt-format).
    # -P: Positional attribute.
    # -S: Structural attribute.
    cwb-encode -d $CORPORADIR/data/$CORPUSLOWER \
               -R $CORPORADIR/registry/$CORPUSLOWER \
               -c utf8 \
               -f $CORPORADIR/annotated/$CORPUSFILE \
               $ATTRS
    # Gennemfør indekseringen
    cwb-makeall -V -r $CORPORADIR/registry $CORPUSUPPER
fi
