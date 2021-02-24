#!/bin/bash
encode_mode=$1
echo "encode_mode is: $encode_mode"

THISDIR=`dirname "$0"`

if [ "$encode_mode" = lanchart ]
then
	echo "Encoding LANCHART corpora ..."
	# Use "bash" to not have to chmod scripts on host system.
	bash $THISDIR/encode_LANCHART.sh lanchart_amager.vrt
	bash $THISDIR/encode_LANCHART.sh lanchart_bornholm.vrt
	bash $THISDIR/encode_LANCHART.sh lanchart_koege.vrt


elif [ "$encode_mode" = memotest_all ]
then
	# Run MEMOtest corpus encoding
	echo "Encoding testcorpus ..."
	bash $THISDIR/encode_testcorpus.sh
	echo "Encoding MEMO test corpora ..."
	bash $THISDIR/encode_MEMOtestcorpus.sh
	bash $THISDIR/encode_MEMO_yearcorpora.sh
	bash $THISDIR/encode_MEMO_authcorpora.sh

elif [ "$encode_mode" = memotest ]
then
	# Run MEMOtest corpus encoding
	echo "Encoding testcorpus ..."
	bash $THISDIR/encode_testcorpus.sh
	echo "Encoding MEMO test corpus grouped by year ..."
	bash $THISDIR/encode_MEMO_yearcorpora.sh
	#echo "Loading MEMOtest timedata into MySQL ..."
	#mysql -uroot -ppassword < $THISDIR/memo_auth_time_db.sql
	#echo "Generating .info files with trend diagram timeframe for each corpus ..."
	#$THISDIR/make_cwb_info.sh
	echo "Encoding MEMO test corpus, individual novels"
	bash $THISDIR/encode_MEMO_individual_files.sh


elif [ "$encode_mode" = clarin ]
then
	echo "CLARIN encoding currently not done at build time. Not encoding any corpora."
	echo "Loading CLARIN timedata into MySQL ..."
	mysql -uroot -ppassword < $THISDIR/db_setup.sql


elif [ "$encode_mode" = all ]
then
	echo "Encoding testcorpus ..."
	bash $THISDIR/encode_testcorpus.sh

	echo "Encoding LANCHART corpora ..."
	bash $THISDIR/lanchart_corpora_encoding_script.sh lanchart_amager.vrt
	bash $THISDIR/lanchart_corpora_encoding_script.sh lanchart_bornholm.vrt
	bash $THISDIR/lanchart_corpora_encoding_script.sh lanchart_koege.vrt

	echo "Encoding MEMO test corpora ..."
	bash $THISDIR/encode_MEMOtestcorpus.sh
	bash $THISDIR/encode_MEMO_yearcorpora.sh
	bash $THISDIR/encode_MEMO_authcorpora.sh


elif [ "$encode_mode" = threats ]
then
	bash $THISDIR/encode_threats.sh


elif [ "$encode_mode" = test ]
then
	echo "Encoding testcorpus ..."
	bash $THISDIR/encode_testcorpus.sh


else
	echo "No BUILD_MODE arg provided, not encoding any corpora."
fi