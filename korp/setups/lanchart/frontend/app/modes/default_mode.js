console.log('Mode file: Top of file');

settings.primaryColor = "#ccdaec";
settings.primaryLight = "#d9e9fd";
settings.autocomplete = false;
settings.lemgramSelect = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.preselectedCorpora = ['lanchart_bornholm'];

settings.corporafolders.lanchart = {
    title : "LANCHART-korpusset",
    contents : ['lanchart_bornholm'],
    description : "LANCHART-korpusset, delt op efter projekt."
};


// From https://github.com/spraakbanken/korp-frontend/blob/dev/doc/frontend_devel.md:
// customAttributes: creates fields in the sidebar that have no corresponding attribute in the backend. Useful for combining two different attributes. All settings concerning sidebar format for normal attributes apply in addition to:
//    customType: "struct" / "pos" - decides if the attribute should be grouped under word attributes or text attributes.
//    pattern: Same as pattern for normal attributes, but struct_attrs and pos_attrs also available. Example: '<p style="margin-left: 5px;"><%=struct_attrs.text_title - struct_attrs.text_description%></p>'

// PD: The S-attrs used here should be kept under structAttributes in the corpora.
// Avoid displaying them twice by setting hideSidebar: true in the attribute definitions.
settings.lanchartCustomAttrs = {
    speaker_cust : {
        label : "speaker_custom",
        order : 0,
        customType : "struct",
        // TODO: This should be done using Angular in order to enable translations of each attribute label.
        pattern : '<%=struct_attrs.turn_speaker%> <p style="margin-left: 10px; margin-bottom: 5px">Køn: <%=struct_attrs.turn_koen%>, Født: <%=struct_attrs.turn_foedselsaar%> (<%=Number(new Date().getFullYear()) - Number(struct_attrs.turn_foedselsaar)%> år siden), Socialklasse: <%=struct_attrs.turn_socialklasse || "?"%>, Rolle: <%=struct_attrs.turn_rolle%></p>'
    },
    file_cust : {
        label : "file_custom",
        order : 1,
        customType : "struct",
        // TODO: This should be done using Angular in order to enable translations of each attribute label.
        pattern : '<%=struct_attrs.text_filename%> <p style="margin-left: 10px; margin-bottom: 5px">Dato: <%=struct_attrs.text_dato || "?"%>, Samtaletype: <%=struct_attrs.text_samtaletype || "?"%>, Projekt: <%=struct_attrs.text_name || "?"%>, Samtalelængde: <%=struct_attrs.text_textduration || "?"%></p>'
    },
    partitur_cust : {
        label : "partiturlink_custom",
        order : 0,
        customType : "pos",
        // TODO: This should be done using Angular in order to enable translations of each attribute label.
        pattern : '"' + '<a href="http://127.0.0.1:5000/?label=<%=struct_attrs.corpus_label%>&start=<%=pos_attrs.xmin%>&end=<%=Number(pos_attrs.xmin) + 3%>' + '&file=<%=encodeURIComponent(struct_attrs.text_filename)%>' + '" target="_blank"><%=pos_attrs.word%></a>"'
        }
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
var lanchart_turnummer = { label: "turnummer",
    order: 8 };
var lanchart_dato = { label: "dato",
    order: 9 };
var lanchart_projekt = { label: "projekt",
    order: 10 };
var lanchart_samtaletype = { label: "samtaletype",
    order: 11 };
var lanchart_name = { label: "name",
    order: 12 };
var lanchart_label = { label: "label",
    order: 13 };

console.log('Mode file: Custom S-attrs');

var lanchart_size = { label: "size",
    hideSidebar: true,
    order: 0 };

var lanchart_textmin = { label: "textmin",
    hideSidebar: true,
    order: 1 };

var lanchart_textmax = { label: "textmax",
    hideSidebar: true,
    order: 2 };

var lanchart_textduration = { label: "textduration",
    hideSidebar: true,
    order: 3 };

var lanchart_filename = { label: "filename",
    hideSidebar: true,
    order: 4 };

var lanchart_turnmin = { label: "turnmin",
    hideSidebar: true,
    order: 5 };

var lanchart_turnmax = { label: "turnmax",
    hideSidebar: true,
    order: 6 };

var lanchart_turnduration = { label: "turnduration",
    hideSidebar: true,
    order: 7 };

var lanchart_speaker = { label: "speaker",
    hideSidebar: true,
    order: 8 };

var lanchart_dato = { label: "dato",
    hideSidebar: true,
    order: 9 };

var lanchart_projekt = { label: "projekt",
    hideSidebar: true,
    order: 10 };

var lanchart_samtaletype = { label: "samtaletype",
    hideSidebar: true,
    order: 11 };

var lanchart_name = { label: "name",
    hideSidebar: true,
    order: 12 };

var lanchart_koen = { label: "koen",
    hideSidebar: true,
    order: 13 };

var lanchart_foedselsaar = { label: "foedselsaar",
    hideSidebar: true,
    order: 14 };

var lanchart_socialklasse = { label: "socialklasse",
    hideSidebar: true,
    order: 15 };

var lanchart_rolle = { label: "rolle",
    hideSidebar: true,
    order: 16 };


console.log('Mode file: Common P-attrs');

var lanchart_ipa = { label: "ipa",
    opts: settings.defaultOptions,
    order: 1 };
var lanchart_ttt = { label: "ttt",
    opts: settings.defaultOptions,
    order: 2 };
var lanchart_redpos = { label: "redpos",
    opts: settings.defaultOptions,
    order: 3 };
var lanchart_pos = { label: "pos",
    opts: settings.defaultOptions,
    order: 4 };
var lanchart_comments = { label: "comments",
    opts: settings.defaultOptions,
    order: 5 };
var lanchart_events = { label: "events",
    opts: settings.defaultOptions,
    order: 6 };
var lanchart_uncertainxtranscription = { label: "uncertainxtranscription",
    opts: settings.defaultOptions,
    order: 7 };
var lanchart_xmin = { label: "xmin",
    opts: settings.defaultOptions,
    order: 8 };
var lanchart_xmax = { label: "xmax",
    opts: settings.defaultOptions,
    order: 9 };
var lanchart_xlength = { label: "xlength",
    opts: settings.defaultOptions,
    order: 10 };
var lanchart_phonetic = { label: "phonetic",
    opts: settings.defaultOptions,
    order: 11 };

console.log('Mode file: Hidden P-attrs');



console.log('Mode file: Individual corpus configs');


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
        turn_foedselsaar : lanchart_foedselsaar,
        turn_socialklasse : lanchart_socialklasse,
        turn_rolle : lanchart_rolle
    },
    customAttributes : settings.lanchartCustomAttrs
    };



settings.corpusListing = new CorpusListing(settings.corpora);
