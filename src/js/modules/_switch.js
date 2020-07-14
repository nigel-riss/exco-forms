export default class Switch {
  constructor() {
    this._tabsContainer = null;
    this._tabs = null;
    this._sheets = null;

    if(this._init()) {
      this._addListeners();
    }
  }

  _init() {
    this._tabsContainer = document.querySelector(`.sheet-switch`);
    if(!this._tabsContainer) {
      return false;
    }

    this._tabs = document.querySelector(``);
    this._sheets = document.querySelector(``);
    return true;
  }

  _addListeners() {
    
  }
}
