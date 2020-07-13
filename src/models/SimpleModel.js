import { observable, computed, action } from "mobx";

export default class SimpleModel {
  @observable number = 0;

  @computed get computedNumber() {
    return this.number ** 2;
  }

  @action.bound plusNumber() {
    this.number++;
  }

  @action.bound minusNumber() {
    this.number--;
  }
}
