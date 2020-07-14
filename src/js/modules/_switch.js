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
    this._sheets = Array.from(document.querySelectorAll(`.print-sheet`));
    console.dir(this._sheets);
    
    if(!this._tabsContainer || !this._sheets) {
      return false;
    }

    this._tabs = Array.from(this._tabsContainer.querySelectorAll(`.sheet-switch__link`));
    return true;
  }

  _addListeners() {
    this._tabsContainer.addEventListener(`click`, (evt) => {
      if(evt.target.classList.contains(`sheet-switch__link`)) {
        const tab = evt.target;
        this._resetTabsClass();
        tab.classList.add(`sheet-switch__link--current`);
        this._switchTab(tab.dataset.tab);
      }
    })
  }

  _resetTabsClass() {
    this._tabs.forEach((tab) => {
      tab.classList.remove(`sheet-switch__link--current`);
    })
  }

  _switchTab(tabID) {
    this._sheets.forEach((sheet) => {
      console.dir(sheet);
      if(sheet.id === tabID) {
        sheet.classList.add(`print-sheet--shown`);
      } else {
        sheet.classList.remove(`print-sheet--shown`);
      }
    })
  }
}
