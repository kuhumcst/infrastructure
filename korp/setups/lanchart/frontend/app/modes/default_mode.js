console.log('Top of default_mode.js');
settings.primaryColor = "#ccdaec";
settings.primaryLight = "#d9e9fd";
settings.autocomplete = false;
settings.lemgramSelect = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.preselectedCorpora = ['lanchart_amager'];

settings.corporafolders.lanchart = {
    title : "LANCHART-korpusset",
    contents : ['lanchart_amager', 'lanchart_bornholm', 'lanchart_koege'],
    description : "LANCHART-korpusset, delt op efter projekt."
};

console.log('default_mode.js after settings.corporafolders.lanchart');



var lanchart_ipa = { label: "IPA",
    opts: settings.defaultOptions,
    order: 0 };
var lanchart_ttt = { label: "TtT",
    opts: settings.defaultOptions,
    order: 1 };
var lanchart_redpos = { label: "RedPoS",
    opts: settings.defaultOptions,
    order: 2 };
var lanchart_pos = { label: "PoS",
    opts: settings.defaultOptions,
    order: 3 };
var lanchart_aktivitetstype = { label: "Aktivitetstype",
    opts: settings.defaultOptions,
    order: 4 };
var lanchart_genre = { label: "Genre",
    opts: settings.defaultOptions,
    order: 5 };
var lanchart_interaktionsstruktur = { label: "Interaktionsstruktur",
    opts: settings.defaultOptions,
    order: 6 };
var lanchart_makrosproghandling = { label: "Makrosproghandling",
    opts: settings.defaultOptions,
    order: 7 };
var lanchart_makrosproghandling1 = { label: "Makro-sproghandling",
    opts: settings.defaultOptions,
    order: 8 };
var lanchart_samtaletype = { label: "Samtaletype",
    opts: settings.defaultOptions,
    order: 9 };
var lanchart_udsigelse = { label: "Udsigelse",
    opts: settings.defaultOptions,
    order: 10 };
var lanchart_iiv_aig_kommentarer = { label: "IIV_AIG_kommentarer",
    opts: settings.defaultOptions,
    order: 11 };
var lanchart_iiv_smu_kommentarer = { label: "IIV_SMU_kommentarer",
    opts: settings.defaultOptions,
    order: 12 };
var lanchart_ajmarkering = { label: "AJmarkering",
    opts: settings.defaultOptions,
    order: 13 };
var lanchart_ammarkering = { label: "AMmarkering",
    opts: settings.defaultOptions,
    order: 14 };
var lanchart_anrmarkering = { label: "ANRmarkering",
    opts: settings.defaultOptions,
    order: 15 };
var lanchart_anmarkering = { label: "ANmarkering",
    opts: settings.defaultOptions,
    order: 16 };
var lanchart_dschwadmarkering = { label: "DschwaDmarkering",
    opts: settings.defaultOptions,
    order: 17 };
var lanchart_engmarkering = { label: "ENGmarkering",
    opts: settings.defaultOptions,
    order: 18 };
var lanchart_ruxmarkering = { label: "RU-markering",
    opts: settings.defaultOptions,
    order: 19 };
var lanchart_wmarkering = { label: "Wmarkering",
    opts: settings.defaultOptions,
    order: 20 };
var lanchart_xschwadmarkering = { label: "XschwaDmarkering",
    opts: settings.defaultOptions,
    order: 21 };
var lanchart_languagexrevised = { label: "Language-revised",
    opts: settings.defaultOptions,
    order: 22 };
var lanchart_languagexstated = { label: "Language-stated",
    opts: settings.defaultOptions,
    order: 23 };
var lanchart_languagerevised = { label: "Languagerevised",
    opts: settings.defaultOptions,
    order: 24 };
var lanchart_languagestated = { label: "Languagestated",
    opts: settings.defaultOptions,
    order: 25 };
var lanchart_comments_global = { label: "Comments_global",
    opts: settings.defaultOptions,
    order: 26 };
var lanchart_global_turn = { label: "global_turn",
    opts: settings.defaultOptions,
    order: 27 };
var lanchart_global_sync = { label: "global_sync",
    opts: settings.defaultOptions,
    order: 28 };
var lanchart_comments_x = { label: "Comments_x",
    opts: settings.defaultOptions,
    order: 29 };
var lanchart_Comments_y = { label: "Comments_y",
    opts: settings.defaultOptions,
    order: 30 };
var lanchart_IIV_SMUL_kommentarer = { label: "IIV_SMUL_kommentarer",
    opts: settings.defaultOptions,
    order: 31 };
var lanchart_RUmarkering = { label: "RUmarkering",
    opts: settings.defaultOptions,
    order: 32 };
var lanchart_Komm = { label: "Komm",
    opts: settings.defaultOptions,
    order: 33 };
var lanchart_ET = { label: "ET",
    opts: settings.defaultOptions,
    order: 34 };
var lanchart_EDE = { label: "EDE",
    opts: settings.defaultOptions,
    order: 35 };
var lanchart_Blxdt_d = { label: "Blxdt_d",
    opts: settings.defaultOptions,
    order: 36 };
var lanchart_blxdt_d = { label: "blxdt_d",
    opts: settings.defaultOptions,
    order: 37 };
var lanchart_Stxdafv = { label: "Stxdafv",
    opts: settings.defaultOptions,
    order: 38 };
var lanchart_stxdafv = { label: "stxdafv",
    opts: settings.defaultOptions,
    order: 39 };
var lanchart_Fynsk_int = { label: "Fynsk_int",
    opts: settings.defaultOptions,
    order: 40 };
var lanchart_Palatalisering = { label: "Palatalisering",
    opts: settings.defaultOptions,
    order: 41 };
var lanchart_Leksis = { label: "Leksis",
    opts: settings.defaultOptions,
    order: 42 };
var lanchart_leksis = { label: "leksis",
    opts: settings.defaultOptions,
    order: 43 };
var lanchart_Prxp = { label: "Prxp",
    opts: settings.defaultOptions,
    order: 44 };
var lanchart_Mgl_vokalkontrast = { label: "Mgl_vokalkontrast",
    opts: settings.defaultOptions,
    order: 45 };
var lanchart_Mgl_vokalkonstrast = { label: "Mgl_vokalkonstrast",
    opts: settings.defaultOptions,
    order: 46 };
var lanchart_Stemt_klusil = { label: "Stemt_klusil",
    opts: settings.defaultOptions,
    order: 47 };
var lanchart_Fortsxtterint = { label: "Fortsxtterint",
    opts: settings.defaultOptions,
    order: 48 };
var lanchart_Ustemt_r = { label: "Ustemt_r",
    opts: settings.defaultOptions,
    order: 49 };
var lanchart_aux = { label: "AUX",
    opts: settings.defaultOptions,
    order: 50 };
var lanchart_Case = { label: "Case",
    opts: settings.defaultOptions,
    order: 51 };
var lanchart_comments = { label: "Comments",
    opts: settings.defaultOptions,
    order: 52 };
var lanchart_DP = { label: "DP",
    opts: settings.defaultOptions,
    order: 53 };
var lanchart_emphasis = { label: "emphasis",
    opts: settings.defaultOptions,
    order: 54 };
var lanchart_epistsxtn = { label: "epistsætn",
    opts: settings.defaultOptions,
    order: 55 };
var lanchart_events = { label: "events",
    opts: settings.defaultOptions,
    order: 56 };
var lanchart_generisk = { label: "generisk",
    opts: settings.defaultOptions,
    order: 57 };
var lanchart_gex = { label: "GEX",
    opts: settings.defaultOptions,
    order: 58 };
var lanchart_giddy = { label: "GIDDY",
    opts: settings.defaultOptions,
    order: 59 };
var lanchart_global_events = { label: "global_events",
    opts: settings.defaultOptions,
    order: 60 };
var lanchart_gramma_ii = { label: "gramma_II",
    opts: settings.defaultOptions,
    order: 61 };
var lanchart_grammatik = { label: "grammatik",
    opts: settings.defaultOptions,
    order: 62 };
var lanchart_Kommentarer = { label: "Kommentarer",
    opts: settings.defaultOptions,
    order: 63 };
var lanchart_ordstil = { label: "ordstil",
    opts: settings.defaultOptions,
    order: 64 };
var lanchart_Part = { label: "Part",
    opts: settings.defaultOptions,
    order: 65 };
var lanchart_semvar = { label: "semvar",
    opts: settings.defaultOptions,
    order: 66 };
var lanchart_SH = { label: "SH",
    opts: settings.defaultOptions,
    order: 67 };
var lanchart_Syntax = { label: "Syntax",
    opts: settings.defaultOptions,
    order: 68 };
var lanchart_translation = { label: "translation",
    opts: settings.defaultOptions,
    order: 69 };
var lanchart_TRDK = { label: "TRDK",
    opts: settings.defaultOptions,
    order: 70 };
var lanchart_trdk1 = { label: "TR-DK",
    opts: settings.defaultOptions,
    order: 71 };
var lanchart_turn = { label: "turn",
    opts: settings.defaultOptions,
    order: 72 };
var lanchart_turnummer = { label: "turnummer",
    opts: settings.defaultOptions,
    order: 73 };
var lanchart_uncertain_transcription = { label: "uncertain_transcription",
    opts: settings.defaultOptions,
    order: 74 };
var lanchart_xmin = { label: "xmin",
    opts: settings.defaultOptions,
    order: 75 };
var lanchart_xmax = { label: "xmax",
    opts: settings.defaultOptions,
    order: 76 };
var lanchart_xlength = { label: "xlength",
    opts: settings.defaultOptions,
    order: 77 };
var lanchart_sync = { label: "sync",
    displayType: "hidden"};
var lanchart_phonetic = { label: "phonetic",
    displayType: "hidden"};

console.log('default_mode.js after P-attrs');

var lanchart_filename = { label: "filename",
    order: 0 };
var lanchart_speaker = { label: "speaker",
    order: 1 };
var lanchart_dato = { label: "dato",
    order: 2 };
var lanchart_projekt = { label: "projekt",
    order: 3 };
var lanchart_samtaletype = { label: "samtaletype",
    order: 4 };
var lanchart_name = { label: "name",
    order: 5 };
var lanchart_koen = { label: "koen",
    order: 6 };
var lanchart_rolle = { label: "rolle",
    order: 7 };
var lanchart_foedselsaar = { label: "foedselsaar",
    order: 8 };
var lanchart_socialklasse = { label: "socialklasse",
    order: 9 };
var lanchart_label = { label: "label",
    order: 10 };
var lanchart_size = { label: "size",
    order: 11 };
var lanchart_generation = { label: "generation",
    order: 12 };
var lanchart_oldnew = { label: "oldnew",
    order: 13 };
var lanchart_textmin = { label: "textmin",
    order: 14 };
var lanchart_textmax = { label: "textmax",
    order: 15 };
var lanchart_textduration = { label: "textduration",
    order: 16 };
var lanchart_turnmin = { label: "turnmin",
    order: 17 };
var lanchart_turnmax = { label: "turnmax",
    order: 18 };
var lanchart_turnduration = { label: "turnduration",
    order: 19 };

console.log('default_mode.js after S-attrs');


settings.corpora.lanchart_amager = {
    id : "lanchart_amager",
    title : "Amager",
    description : "Optagelser fra 2009-2011¶ | Optagelser fra 2011-2013.",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : {
        ipa : lanchart_ipa,
        ttt : lanchart_ttt,
        redpos : lanchart_redpos,
        pos : lanchart_pos,
        aktivitetstype : lanchart_aktivitetstype,
        genre : lanchart_genre,
        interaktionsstruktur : lanchart_interaktionsstruktur,
        makrosproghandling1 : lanchart_makrosproghandling1,
        samtaletype : lanchart_samtaletype,
        udsigelse : lanchart_udsigelse,
        iiv_aig_kommentarer : lanchart_iiv_aig_kommentarer,
        iiv_smu_kommentarer : lanchart_iiv_smu_kommentarer,
        aux : lanchart_aux,
        comments : lanchart_comments,
        epistsxtn : lanchart_epistsxtn,
        events : lanchart_events,
        generisk : lanchart_generisk,
        gex : lanchart_gex,
        giddy : lanchart_giddy,
        global_events : lanchart_global_events,
        gramma_ii : lanchart_gramma_ii,
        grammatik : lanchart_grammatik,
        semvar : lanchart_semvar,
        turn : lanchart_turn,
        turnummer : lanchart_turnummer,
        uncertain_transcription : lanchart_uncertain_transcription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        sync : lanchart_sync,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        text_size : lanchart_size,
        text_generation : lanchart_generation,
        text_oldnew : lanchart_oldnew,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        turn_speaker : lanchart_speaker,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration
    }
};


console.log('default_mode.js after settings.corpora.lanchart_amager');



settings.corpora.lanchart_bornholm = {
    id : "lanchart_bornholm",
    title : "Bornholm",
    description : "Optagelser Bornholm 2014-15. Under Periferiprojektet.",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : {
        ipa : lanchart_ipa,
        ttt : lanchart_ttt,
        redpos : lanchart_redpos,
        pos : lanchart_pos,
        samtaletype : lanchart_samtaletype,
        comments : lanchart_comments,
        events : lanchart_events,
        turn : lanchart_turn,
        turnummer : lanchart_turnummer,
        uncertain_transcription : lanchart_uncertain_transcription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        sync : lanchart_sync,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        text_size : lanchart_size,
        text_generation : lanchart_generation,
        text_oldnew : lanchart_oldnew,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        turn_speaker : lanchart_speaker,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration
    }
};

console.log('default_mode.js after settings.corpora.lanchart_bornholm');




settings.corpora.lanchart_koege = {
    id : "lanchart_koege",
    title : "Køge",
    description : "Korpus af udskrifterne fra Køge-projektet",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : {
        ipa : lanchart_ipa,
        ttt : lanchart_ttt,
        redpos : lanchart_redpos,
        pos : lanchart_pos,
        samtaletype : lanchart_samtaletype,
        comments : lanchart_comments,
        events : lanchart_events,
        trdk1 : lanchart_trdk1,
        turnummer : lanchart_turnummer,
        uncertain_transcription : lanchart_uncertain_transcription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        text_size : lanchart_size,
        text_generation : lanchart_generation,
        text_oldnew : lanchart_oldnew,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        turn_speaker : lanchart_speaker,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration
    }
};

console.log('default_mode.js after settings.corpora.lanchart_koege');


settings.corpusListing = new CorpusListing(settings.corpora);

console.log('Bottom of default_mode.js');

