
import GenerateKeyboard from './generateKeyboard';
import {keysView, keys} from './keys';
import HandlingKeys from './handling'

class ControlKeyboard{
  constructor(){
    this.genData = new GenerateKeyboard();
    this.specialKey = ['tab','capslock','alt', '', 'ctrl', 'backspace',"left","down", "right", "shift","up","win", "enter", "space"];
    this.keydownSpecKeys = []
    this.handlingKeys = new HandlingKeys();
  }
  clickKeyHandler(keyEl){
    let keyCodeEl = +keyEl.dataset.keyCode
    this.addKeyActiveStyle(keyEl)
    this.changeContent(keyCodeEl)
  }
  keydownKeyHandler(e){
 
    this.switchLang(e)
    let keysEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);
    this.addKeyActiveStyle(keysEl)
    this.changeContent(e.keyCode)
  }
  keyupKeyHandler(e){
   
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.capsLock][e.keyCode]
    let keyEl = document.querySelector(`[data-key-code="${e.keyCode}"]`);
  
    let data = null;
    
 
    if(valKey === 'shift'){
      console.log(11122)
      // data = this.handlingKeys.handlingShiftUp(setts,valKey,e.keyCode)
      // this.genData.setDataLs(data)
    }
    // this.genData.switchKeys()
    
  }
  
  changeContent(keyCodeEl){
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.capsLock][keyCodeEl]
    
    let data = null;
   
    if(valKey === 'enter'){
      data = this.handlingKeys.handlingEnter(setts,valKey,keyCodeEl)
      this.genData.setDataLs(data)
    }
    if(valKey === 'space'){
      data = this.handlingKeys.handlingSpace(setts,valKey,keyCodeEl)
      this.genData.setDataLs(data)
    }

    if(valKey === 'shift' || valKey === 'caps lock'){
      data = this.handlingKeys.handlingShift(setts,valKey,keyCodeEl)
      this.genData.setDataLs(data)
      this.genData.switchKeys()
      return
    }

   
    
    if(!this.specialKey.includes(valKey) && setts){
      setts.content += valKey;
      this.genData.setDataLs(setts)
    }
    this.genData.changeWindowContent()
  }
  switchLang(e){
    let setts = this.genData.getDataLs()
    let valKey = keys[setts.lang][setts.capsLock][e.keyCode]
    if(valKey === 'shift') this.keydownSpecKeys.push(valKey)
    if(valKey === 'ctrl') this.keydownSpecKeys.push(valKey)
    if(this.keydownSpecKeys.length > 2) (this.keydownSpecKeys).splice(0,2);

    if((this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'ctrl') || (this.keydownSpecKeys[this.keydownSpecKeys.length - 2] === 'shift' && this.keydownSpecKeys[this.keydownSpecKeys.length - 1] === 'ctrl')){
     console.log(7656789)
      if(setts.lang === 'en'){
        console.log(1)
        setts.lang = 'ru'
        this.genData.setDataLs(setts)
        this.genData.switchKeys()
      } 
      else{
        console.log(2)
        setts.lang = 'en'
        this.genData.setDataLs(setts)
        this.genData.switchKeys()
      }
      this.keydownSpecKeys = []
      // console.log(setts)
    }
    
  }
  addKeyActiveStyle(keyEl){
    keyEl.classList.add('keyboard__key_active')
    setTimeout(()=>{
      keyEl.classList.remove('keyboard__key_active')
    },200)
  }
  windowClickHandler(e){
    let keyEl = e.target.closest('.keyboard__key');
    if(keyEl) this.clickKeyHandler(keyEl)
   
  }
  
}




export default ControlKeyboard

