console.log('Mode file: Top of file');

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


console.log('Mode file: Common S-attrs');

var lanchart_size = { label: "size",
    order: 0 };
var lanchart_textmin = { label: "textmin",
    order: 1 };
var lanchart_textmax = { label: "textmax",
    order: 2 };
var lanchart_textduration = { label: "textduration",
    order: 3 };
var lanchart_filename = { label: "filename",
    order: 4 };
var lanchart_turnmin = { label: "turnmin",
    order: 5 };
var lanchart_turnmax = { label: "turnmax",
    order: 6 };
var lanchart_turnduration = { label: "turnduration",
    order: 7 };
var lanchart_speaker = { label: "speaker",
    order: 8 };
var lanchart_turnummer = { label: "turnummer",
    order: 9 };
var lanchart_dato = { label: "dato",
    order: 10 };
var lanchart_projekt = { label: "projekt",
    order: 11 };
var lanchart_samtaletype = { label: "samtaletype",
    order: 12 };
var lanchart_name = { label: "name",
    order: 13 };
var lanchart_koen = { label: "koen",
    order: 14 };
var lanchart_rolle = { label: "rolle",
    order: 15 };
var lanchart_foedselsaar = { label: "foedselsaar",
    order: 16 };
var lanchart_socialklasse = { label: "socialklasse",
    order: 17 };
var lanchart_label = { label: "label",
    order: 18 };

console.log('Mode file: Common P-attrs');

var lanchart_ipa = { label: "ipa",
    opts: settings.defaultOptions,
    order: 0 };
var lanchart_ttt = { label: "ttt",
    opts: settings.defaultOptions,
    order: 1 };
var lanchart_redpos = { label: "redpos",
    opts: settings.defaultOptions,
    order: 2 };
var lanchart_pos = { label: "pos",
    opts: settings.defaultOptions,
    order: 3 };
var lanchart_atxtabxekspl = { label: "atxtabxekspl",
    opts: settings.defaultOptions,
    order: 4 };
var lanchart_atxtabxeksplxkomm = { label: "atxtabxeksplxkomm",
    opts: settings.defaultOptions,
    order: 5 };
var lanchart_variantxfonetik = { label: "variantxfonetik",
    opts: settings.defaultOptions,
    order: 6 };
var lanchart_variantxfonetikxkontekstxrealiseret = { label: "variantxfonetikxkontekstxrealiseret",
    opts: settings.defaultOptions,
    order: 7 };
var lanchart_variantxfonetikxkontekstxforventet = { label: "variantxfonetikxkontekstxforventet",
    opts: settings.defaultOptions,
    order: 8 };
var lanchart_variantxfonetikxr = { label: "variantxfonetikxr",
    opts: settings.defaultOptions,
    order: 9 };
var lanchart_ledsaet = { label: "ledsaet",
    opts: settings.defaultOptions,
    order: 10 };
var lanchart_kl = { label: "kl",
    opts: settings.defaultOptions,
    order: 11 };
var lanchart_aux = { label: "aux",
    opts: settings.defaultOptions,
    order: 12 };
var lanchart_comments = { label: "comments",
    opts: settings.defaultOptions,
    order: 13 };
var lanchart_emphasis = { label: "emphasis",
    opts: settings.defaultOptions,
    order: 14 };
var lanchart_epistsxtn = { label: "epistsxtn",
    opts: settings.defaultOptions,
    order: 15 };
var lanchart_events = { label: "events",
    opts: settings.defaultOptions,
    order: 16 };
var lanchart_generisk = { label: "generisk",
    opts: settings.defaultOptions,
    order: 17 };
var lanchart_gex = { label: "gex",
    opts: settings.defaultOptions,
    order: 18 };
var lanchart_giddy = { label: "giddy",
    opts: settings.defaultOptions,
    order: 19 };
var lanchart_gramma_ii = { label: "gramma_ii",
    opts: settings.defaultOptions,
    order: 20 };
var lanchart_grammatik = { label: "grammatik",
    opts: settings.defaultOptions,
    order: 21 };
var lanchart_semvar = { label: "semvar",
    opts: settings.defaultOptions,
    order: 22 };
var lanchart_trxdk = { label: "trxdk",
    opts: settings.defaultOptions,
    order: 23 };
var lanchart_uncertainxtranscription = { label: "uncertainxtranscription",
    opts: settings.defaultOptions,
    order: 24 };
var lanchart_xmin = { label: "xmin",
    opts: settings.defaultOptions,
    order: 25 };
var lanchart_xmax = { label: "xmax",
    opts: settings.defaultOptions,
    order: 26 };
var lanchart_xlength = { label: "xlength",
    opts: settings.defaultOptions,
    order: 27 };
var lanchart_phonetic = { label: "phonetic",
    opts: settings.defaultOptions,
    order: 28 };

console.log('Mode file: Hidden P-attrs');



console.log('Mode file: Individual corpus configs');


settings.corpora.lanchart_amager = {
    id : "lanchart_amager",
    title : "Amager",
    description : "Korpus af udskrifterne fra Amager-projektet",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : {
        ipa : lanchart_ipa,
        ttt : lanchart_ttt,
        redpos : lanchart_redpos,
        pos : lanchart_pos,
        aux : lanchart_aux,
        comments : lanchart_comments,
        epistsxtn : lanchart_epistsxtn,
        events : lanchart_events,
        generisk : lanchart_generisk,
        gex : lanchart_gex,
        giddy : lanchart_giddy,
        gramma_ii : lanchart_gramma_ii,
        grammatik : lanchart_grammatik,
        semvar : lanchart_semvar,
        uncertainxtranscription : lanchart_uncertainxtranscription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_size : lanchart_size,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration,
        turn_speaker : lanchart_speaker,
        turn_turnummer : lanchart_turnummer,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse
    }
    };



settings.corpora.lanchart_bornholm = {
    id : "lanchart_bornholm",
    title : "Bornholm",
    description : "Korpus af udskrifterne fra Bornholm-projektet",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : {
        ipa : lanchart_ipa,
        ttt : lanchart_ttt,
        redpos : lanchart_redpos,
        pos : lanchart_pos,
        comments : lanchart_comments,
        events : lanchart_events,
        uncertainxtranscription : lanchart_uncertainxtranscription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_size : lanchart_size,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration,
        turn_speaker : lanchart_speaker,
        turn_turnummer : lanchart_turnummer,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse
    }
    };



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
        atxtabxekspl : lanchart_atxtabxekspl,
        atxtabxeksplxkomm : lanchart_atxtabxeksplxkomm,
        variantxfonetik : lanchart_variantxfonetik,
        variantxfonetikxkontekstxrealiseret : lanchart_variantxfonetikxkontekstxrealiseret,
        variantxfonetikxkontekstxforventet : lanchart_variantxfonetikxkontekstxforventet,
        variantxfonetikxr : lanchart_variantxfonetikxr,
        ledsaet : lanchart_ledsaet,
        kl : lanchart_kl,
        comments : lanchart_comments,
        emphasis : lanchart_emphasis,
        events : lanchart_events,
        grammatik : lanchart_grammatik,
        trxdk : lanchart_trxdk,
        uncertainxtranscription : lanchart_uncertainxtranscription,
        xmin : lanchart_xmin,
        xmax : lanchart_xmax,
        xlength : lanchart_xlength,
        phonetic : lanchart_phonetic
    },
    structAttributes : {
        corpus_label : lanchart_label,
        text_size : lanchart_size,
        text_textmin : lanchart_textmin,
        text_textmax : lanchart_textmax,
        text_textduration : lanchart_textduration,
        text_filename : lanchart_filename,
        text_dato : lanchart_dato,
        text_projekt : lanchart_projekt,
        text_samtaletype : lanchart_samtaletype,
        text_name : lanchart_name,
        turn_turnmin : lanchart_turnmin,
        turn_turnmax : lanchart_turnmax,
        turn_turnduration : lanchart_turnduration,
        turn_speaker : lanchart_speaker,
        turn_turnummer : lanchart_turnummer,
        turn_koen : lanchart_koen,
        turn_rolle : lanchart_rolle,
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse
    }
    };



settings.corpusListing = new CorpusListing(settings.corpora);