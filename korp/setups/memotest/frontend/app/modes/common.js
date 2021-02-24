
// OK, så der er et eller andet app_memotest_all/modes/config.js har som 
// app_memotest/modes/config.js ikke har!!!
// Det var attrs.baseform ...

settings.senseAutoComplete = "<autoc model='model' placeholder='placeholder' type='sense' text-in-field='textInField'/>";
settings.groupStatistics = [];

var liteOptions = {
    "is": "=",
    "is_not": "!="
};
var setOptions = {
    "is": "contains",
    "is_not": "not contains"
};

var defaultContext = {
    "1 sentence": "1 sentence"
};

var spContext = {
    "1 sentence": "1 sentence",
    "1 paragraph": "1 paragraph"
};
var spWithin = {
    "sentence": "sentence",
    "paragraph": "paragraph"
};

var attrs = {};  // positional attributes

attrs.baseform = {
    label: "baseform",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

settings.commonStructTypes = {};


module.exports = {
  spWithin,
  spContext,
  defaultContext,
  setOptions,
  liteOptions,
  attrs
};
