import GenerateKeyboard from './generateKeyboard';
import { keysView, keys, dataKeys } from './keys';
import HandlingKeys from './handling';

class ControlKeyboard {
  constructor() {
    this.genData = new GenerateKeyboard();
    this.specialKey = ['Tab', 'CapsLock', 'Alt', '', 'Ctrl', 'Backspace', 'Left', 'Down', 'Right', 'Shift', 'Up', 'Win', 'Enter', 'Space', 'Del'];
    this.keydownSpecKeys = [];
    this.handlingKeys = new HandlingKeys();
  }

  clickKeyHandler(keyEl) {
    const keyCodeEl = +keyEl.dataset.keyCode;
    this.addKeyActiveStyle(keyEl);
    this.changeContent(keyCodeEl);
  }

  keydownKeyHandler(e) {
    e.preventDefault();
    this.switchLang(e);
    const keysEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);
    this.addKeyActiveStyle(keysEl);
    this.changeContent(e.keyCode);
  }

  keyupKeyHandler(e) {
    e.preventDefault();
    const setts = this.genData.getDataLs();
    const valKey = keys[setts.lang][setts.shift][e.keyCode];
    const keyEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);

    let data = null;

    if (valKey === 'Shift') {
      data = this.handlingKeys.handlingShiftUp(setts, valKey, e.keyCode);
      if (data) {
        this.genData.setDataLs(data);
        this.genData.switchKeys();
      }
    }
  }

  changeContent(keyCodeEl) {
    const setts = this.genData.getDataLs();
    // const valKey = keys[setts.lang][setts.shift][keyCodeEl];
   
    const isShift = setts.shift === 'shift' ? 0 : 1; //for choice element from array, when shift down, 0 - shift=true;
    const valKey = Array.isArray(dataKeys[setts.lang][keyCodeEl]) ? (dataKeys[setts.lang][keyCodeEl])[isShift] : dataKeys[setts.lang][keyCodeEl];
    console.log(valKey)
    if(!valKey) return

    let data = null;

    if (valKey === 'Enter') {
      data = this.handlingKeys.handlingEnter(setts, valKey, keyCodeEl);
      this.genData.setDataLs(data);
    }
    if (valKey === 'Space') {
      data = this.handlingKeys.handlingSpace(setts, valKey, keyCodeEl);
      this.genData.setDataLs(data);
    }

    if (valKey === 'Shift') {
      data = this.handlingKeys.handlingShift(setts, valKey, keyCodeEl);
      if (data) {
        console.log(data.content)
        this.genData.setDataLs(data);
        this.switchShiftKeys();
      }
      return;
    }

    if (valKey === 'CapsLock') {
      data = this.handlingKeys.handlingCaps(setts, valKey, keyCodeEl);
      if (data) {
        this.genData.setDataLs(data);
        this.switchCapsKeys();
        this.switchActiveCaps(keyCodeEl)
        
      }
    }

    if (valKey === 'Backspace') {
      data = this.handlingKeys.handlingBackspace(setts, valKey, keyCodeEl);
      if (data) {
        this.genData.setDataLs(data);
        this.genData.changeWindowContent();
        return;
      }
    }

    if (valKey === 'Tab') {
      data = this.handlingKeys.handlingTab(setts, valKey, keyCodeEl);
      if (data) {
        this.genData.setDataLs(data);
        this.genData.changeWindowContent();
        return;
      }
    }

    if(valKey === 'Del'){
      
    }

    if (!this.specialKey.includes(valKey) && setts) {
      let isShift = (this.genData.getDataLs().shift) === 'shift'?true:false;
      let isCaps = this.genData.getDataLs().capsLock;

      if(isShift && isCaps){
        console.log(1)
        setts.content += valKey;
        this.genData.setDataLs(setts);
        this.genData.changeWindowContent();
        return
      }
      if(!isShift && !isCaps){
        console.log(2)
        setts.content += valKey;
        this.genData.setDataLs(setts);
        this.genData.changeWindowContent();
        return
      }
      else{
        console.log(3)
        setts.content += valKey.toUpperCase();
        this.genData.setDataLs(setts);
        this.genData.changeWindowContent();
        return
      } 
  
    }
    this.genData.changeWindowContent();
  }

  switchActiveCaps(valKey){
    let keyEl = document.querySelector(`[data-key-code="${valKey}"]`);
    console.log(valKey)
    if(keyEl){
      
      keyEl.classList.toggle('keyboard__key_on')
    }
  }

  switchCapsKeys() {
    const keysEl = document.querySelectorAll('.keyboard__key');

    const setts = this.genData.getDataLs();

    const isShift = setts.shift === 'shift' ? 0 : 1;
    for (const keyEl of keysEl) {
      const valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];
    
      if (Array.isArray(valKey)) {
        keyEl.textContent = valKey[isShift];
      } else if (setts.capsLock) {
        if (valKey.length == 1) {
          keyEl.textContent = valKey.toUpperCase();
        }
      } else if (valKey.length == 1) {
        keyEl.textContent = valKey.toLowerCase();
      }
    }
  }

  switchShiftKeys() {
    const keysEl = document.querySelectorAll('.keyboard__key');
    const setts = this.genData.getDataLs();
    const isShift = setts.shift === 'shift' ? 0 : 1;
    for (const keyEl of keysEl) {
      const valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];

      if (Array.isArray(valKey)) {
        keyEl.textContent = valKey[isShift];
      } else if (setts.shift === 'shift') {
        if (valKey.length == 1) {
          keyEl.textContent = valKey.toUpperCase();
        } else{
          if(valKey.toLowerCase() === 'space'){
            keyEl.textContent = '';
          }
          else keyEl.textContent = valKey;
        }
      } else if (valKey.length == 1) {
        keyEl.textContent = valKey.toLowerCase();
      } else keyEl.textContent = valKey;
    }
  }

  switchLang(e) {
    const setts = this.genData.getDataLs();
    const valKey = keys[setts.lang][setts.shift][e.keyCode];
    if (valKey === 'Shift') this.keydownSpecKeys.push(valKey);
    if (valKey === 'Ctrl') this.keydownSpecKeys.push(valKey);
    if (this.keydownSpecKeys.length > 2) (this.keydownSpecKeys).splice(0, 2);

    if ((this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'Shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'Ctrl') || (this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'Shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'Ctrl')) {
      if (setts.lang === 'en') {
        setts.lang = 'ru';
        this.genData.setDataLs(setts);
        this.genData.switchKeys();
      } else {
        setts.lang = 'en';
        this.genData.setDataLs(setts);
        this.genData.switchKeys();
      }
      this.keydownSpecKeys = [];
    }
  }

  addKeyActiveStyle(keyEl) {
    if(keyEl){
      keyEl.classList.add('keyboard__key_active');
      setTimeout(() => {
        keyEl.classList.remove('keyboard__key_active');
      }, 200);
    }
  }

  windowClickHandler(e) {
    const keyEl = e.target.closest('.keyboard__key');
    if (keyEl) this.clickKeyHandler(keyEl);
  }
}

export default ControlKeyboard;
