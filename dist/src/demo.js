(wx["morModuleLoader"] = wx["morModuleLoader"] || []).push([[1],{

/***/ "./rule.js":
/***/ (function(module, exports, __webpack_require__) {

var RuleEngine = __webpack_require__("./node_modules/_@alife_alsc-rule-engine@1.0.9@@alife/alsc-rule-engine/es/index.js")["default"];

var engine = RuleEngine.getInstance();
var ruleA = {
  name: 'ruleA',
  conditions: {
    all: [{
      fact: 'word',
      operator: 'equal',
      value: 'bacon'
    }]
  },
  event: {
    type: 'ruleA',
    params: {
      customProperty: 'ruleA'
    }
  }
};
var ruleB = {
  name: 'ruleB',
  conditions: {
    all: [{
      fact: 'age',
      operator: 'equal',
      value: 12
    }]
  },
  event: {
    type: 'ruleB',
    params: {
      customProperty: 'ruleB'
    }
  }
};
engine.addRule(ruleA).addRule(ruleB).addFact({
  word: 'bacon',
  age: 12
}).run(function (event) {
  console.log('success333 -> ' + event);
}, function () {
  console.log('failure');
}).then(function () {
  // 这里的fact值是word: 'bacon', age: 12
  console.log(engine._instance.facts); // 同名的fact就被覆盖

  engine.addFact({
    word: 'a',
    age: 12
  }).run(function (event) {
    // 这里的fact值是word: 'a', age: 12
    console.log(engine._instance.facts);
    console.log('success666 -> ' + event);
  }, function () {
    console.log('failure');
  });
});

/***/ })

},[["./rule.js",0,2]]]);