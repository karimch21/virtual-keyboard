
import GenerateKeyboard from './generateKeyboard';
import { keysView, keys, dataKeys} from './keys';
import HandlingKeys from './handling'

class ControlKeyboard {
  constructor() {
    this.genData = new GenerateKeyboard();
    this.specialKey = ['Tab', 'CapsLock', 'Alt', '', 'Ctrl', 'Backspace', "left", "down", "right", "Shift", "up", "win", "Enter", "Space"];
    this.keydownSpecKeys = []
    this.handlingKeys = new HandlingKeys();
  }
  clickKeyHandler(keyEl) {
    let keyCodeEl = +keyEl.dataset.keyCode
    this.addKeyActiveStyle(keyEl)
    this.changeContent(keyCodeEl)
  }
  keydownKeyHandler(e) {
    e.preventDefault()
    this.switchLang(e)
    let keysEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);
    this.addKeyActiveStyle(keysEl)
    this.changeContent(e.keyCode)
  }
  keyupKeyHandler(e) {
    e.preventDefault()
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.shift][e.keyCode]
    let keyEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);

    let data = null;


    if (valKey === 'Shift') {
      console.log('-------keyUp-------')
      data = this.handlingKeys.handlingShiftUp(setts, valKey, e.keyCode)
      console.log(data, 'data')
      if (data) {
        console.log(77)
        this.genData.setDataLs(data)
        this.genData.switchKeys()
      }
      console.log('END-------keyUp-------')
    }
  }

  changeContent(keyCodeEl) {
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.shift][keyCodeEl]

    let data = null;

    if (valKey === 'Enter') {
      data = this.handlingKeys.handlingEnter(setts, valKey, keyCodeEl)
      this.genData.setDataLs(data)
    }
    if (valKey === 'Space') {
      data = this.handlingKeys.handlingSpace(setts, valKey, keyCodeEl)
      this.genData.setDataLs(data)
    }

    if (valKey === 'Shift') {
      data = this.handlingKeys.handlingShift(setts, valKey, keyCodeEl)
      if (data) {
        this.genData.setDataLs(data)
        this.switchShiftKeys()
      }
      return
    }

    if (valKey === 'CapsLock') {
      data = this.handlingKeys.handlingCaps(setts, valKey, keyCodeEl)
      if (data) {
        this.genData.setDataLs(data)
        this.switchCapsKeys()
      }
    }

    if (valKey === 'Backspace') {
      data = this.handlingKeys.handlingBackspace(setts, valKey, keyCodeEl)
      if (data) {
        this.genData.setDataLs(data)
        this.genData.changeWindowContent()
        return
      }
    }

    if (valKey === 'Tab') {
      data = this.handlingKeys.handlingTab(setts, valKey, keyCodeEl)
      if (data) {
        this.genData.setDataLs(data)
        this.genData.changeWindowContent()
        return
      }
    }

    if (!this.specialKey.includes(valKey) && setts) {
      setts.content += valKey;
      this.genData.setDataLs(setts)
    }
    this.genData.changeWindowContent()
  }
  switchCapsKeys(){
    let keysEl = document.querySelectorAll('.keyboard__key');
    
    let setts = this.genData.getDataLs();
   
    let isShift = setts.shift === 'shift' ? 0 : 1;
    for(let keyEl of keysEl){
      console.log(keyEl, keyEl.dataset.keyCode)
      let valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];
     console.log(valKey, keyEl.dataset.keyCode)
      if(Array.isArray(valKey)){
        keyEl.textContent = valKey[isShift];
      }
      else{
        if(setts.capsLock){
          if(valKey.length == 1){
            keyEl.textContent = valKey.toUpperCase();
          }
        }
        else{
          if(valKey.length == 1){
            keyEl.textContent = valKey.toLowerCase();
          }
        }
      }
    }
  }
  switchShiftKeys(){
    let keysEl = document.querySelectorAll('.keyboard__key');
    
    let setts = this.genData.getDataLs();
    console.log(setts, 666)
    let isShift = setts.shift === 'shift' ? 0 : 1;
    for(let keyEl of keysEl){
      let valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];
     
      if(Array.isArray(valKey)){
        keyEl.textContent = valKey[isShift];
      }
      else{
        if(setts.shift === 'shift'){
      
          if(valKey.length == 1){
            keyEl.textContent = valKey.toUpperCase();
          }
          else  keyEl.textContent = valKey;
        }
        else{
          if(valKey.length == 1){
            keyEl.textContent = valKey.toLowerCase();
          }
          else  keyEl.textContent = valKey;
        }
       
      }
    }
  }
  switchLang(e) {
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.shift][e.keyCode]
    if (valKey === 'Shift') this.keydownSpecKeys.push(valKey)
    if (valKey === 'Ctrl') this.keydownSpecKeys.push(valKey)
    if (this.keydownSpecKeys.length > 2) (this.keydownSpecKeys).splice(0, 2);

    if ((this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'Shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'Ctrl') || (this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'Shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'Ctrl')) {
      console.log(7656789)
      if (setts.lang === 'en') {
        console.log(1)
        setts.lang = 'ru'
        this.genData.setDataLs(setts)
        this.genData.switchKeys()
      }
      else {
        console.log(2)
        setts.lang = 'en'
        this.genData.setDataLs(setts)
        this.genData.switchKeys()
      }
      this.keydownSpecKeys = []
      // console.log(setts)
    }

  }
  addKeyActiveStyle(keyEl) {
    keyEl.classList.add('keyboard__key_active')
    setTimeout(() => {
      keyEl.classList.remove('keyboard__key_active')
    }, 200)
  }
  windowClickHandler(e) {
    let keyEl = e.target.closest('.keyboard__key');
    if (keyEl) this.clickKeyHandler(keyEl)

  }

}




export default ControlKeyboard

