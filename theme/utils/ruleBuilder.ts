import { RuleSet } from 'styled-components';

export class RuleBuilder {
  private rules: RuleSet = [];

  push(rule: RuleSet): RuleBuilder {
    this.rules.push(rule);
    return this;
  }

  add(append: boolean, rule: RuleSet): RuleBuilder {
    if (append) {
      this.rules.push(rule);
    }
    return this;
  }

  build() {
    return this.rules;
  }
}
