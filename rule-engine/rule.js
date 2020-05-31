const RuleEngine = require('@alife/alsc-rule-engine').default;

const engine = RuleEngine.getInstance();

const ruleA = {
  name: 'ruleA',
  conditions: {
    all: [
      {
        fact: 'word',
        operator: 'equal',
        value: 'bacon'
      },
    ]
  },
  event: {
    type: 'ruleA',
    params: {
      customProperty: 'ruleA'
    }
  }
};

const ruleB = {
  name: 'ruleB',
  conditions: {
    all: [
      {
        fact: 'age',
        operator: 'equal',
        value: 12
      }
    ]
  },
  event: {
    type: 'ruleB',
    params: {
      customProperty: 'ruleB'
    }
  }
};

engine
  .addRule(ruleA)
  .addRule(ruleB)
  .addFact({
    word: 'bacon',
    age: 12
  })
  .run((event) => {
    console.log('success333 -> ' + event);
  }, () => {
    console.log('failure');
  })
  .then(() => {
    // 这里的fact值是word: 'bacon', age: 12
    console.log(engine._instance.facts);
    // 同名的fact就被覆盖
    engine.addFact({
      word: 'a',
      age: 12
    }).run((event) => {
      // 这里的fact值是word: 'a', age: 12
      console.log(engine._instance.facts);
      console.log('success666 -> ' + event);
    }, () => {
      console.log('failure');
    });
  });
