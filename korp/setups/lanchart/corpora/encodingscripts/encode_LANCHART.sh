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
elif [ "$CORPUSUPPER" = LANCHART_AMAGER ] ; then ATTRS="-S corpus:0+label -S text:0+size+textmin+textmax+textduration+filename+dato+projekt+samtaletype+name -S turn:0+turnmin+turnmax+turnduration+speaker+turnummer+koen+foedselsaar+socialklasse+rolle -P ipa -P ttt -P redpos -P pos -P aux -P comments -P epistsxtn -P events -P generisk -P gex -P giddy -P gramma_ii -P grammatik -P semvar -P uncertainxtranscription -P xmin -P xmax -P xlength -P phonetic"
elif [ "$CORPUSUPPER" = LANCHART_BORNHOLM ] ; then ATTRS="-S corpus:0+label -S text:0+size+textmin+textmax+textduration+filename+dato+projekt+samtaletype+name -S turn:0+turnmin+turnmax+turnduration+speaker+turnummer+koen+foedselsaar+socialklasse+rolle -P ipa -P ttt -P redpos -P pos -P comments -P events -P uncertainxtranscription -P xmin -P xmax -P xlength -P phonetic"
elif [ "$CORPUSUPPER" = LANCHART_KOEGE ] ; then ATTRS="-S corpus:0+label -S text:0+size+textmin+textmax+textduration+filename+dato+projekt+samtaletype+name -S turn:0+turnmin+turnmax+turnduration+speaker+turnummer+koen+foedselsaar+socialklasse+rolle -P ipa -P ttt -P redpos -P pos -P atxtabxekspl -P atxtabxeksplxkomm -P variantxfonetik -P variantxfonetikxkontekstxrealiseret -P variantxfonetikxkontekstxforventet -P variantxfonetikxr -P ledsaet -P kl -P comments -P emphasis -P events -P grammatik -P trxdk -P uncertainxtranscription -P xmin -P xmax -P xlength -P phonetic"
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
