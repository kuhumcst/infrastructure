#!/bin/bash

CORPUSNAMES=`mysql -B -uroot -p1234 korp --disable-column-names -e "select distinct corpus from timedata"`
  
for CORPUSNAME in $CORPUSNAMES
do

    CORPUSLOWER=${CORPUSNAME,,}
    INFOPATH="/opt/korp-backend/corpora/data/$CORPUSLOWER/.info"

    firstdate=`mysql -B -uroot -p1234 korp --disable-column-names -e "select min(datefrom) from timedata where corpus = '"$CORPUSNAME"'"`
    lastdate=`mysql -B -uroot -p1234 korp --disable-column-names -e "select max(dateto) from timedata where corpus = '"$CORPUSNAME"'"`

    touch $INFOPATH
    echo "FirstDate: $firstdate" >> $INFOPATH
    echo "LastDate: $lastdate" >> $INFOPATH
done
