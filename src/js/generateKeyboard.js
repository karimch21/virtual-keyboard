import {keys, keysView, dataKeys} from './keys';
import ControlKeyboard from './useKeyboard';

class GenerateKeyboard{
  constructor(){
    this.settings = {
      lang: 'en',
      capsLock: false,
      shift: 'unshift',
      content: `Input text`,

    }
  }
  init(){
    window.addEventListener('load',()=>{
      this.loadDom()
    });
    window.addEventListener('click',(e)=>{
      e.preventDefault();
      (new ControlKeyboard()).windowClickHandler(e);
    });
    
    
  }
  createKeyboard(){
    if(!this.getDataLs())  this.setDataLs()
    let keyboard = document.createElement('div');
    let keyboardInnerEl = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboardInnerEl.classList.add('keyboard__inner')
    let data = this.getDataLs();
    console.log(keysView)
    for(let keysRow in keysView[data.lang][data.shift]){
      let keyRowEl = document.createElement('div');
      keyRowEl.classList.add('keyboard__row');
      
      for(let key of keysView[data.lang][data.shift][keysRow]){
        let keyEl = document.createElement('div');
        keyEl.classList.add('keyboard__key');
        keyEl.textContent = key[1];
        keyEl.dataset.keyCode = key[0]
        keyRowEl.appendChild(keyEl);
      }
      keyboardInnerEl.appendChild(keyRowEl)
    }
    keyboard.appendChild(keyboardInnerEl);
    return keyboard;
  }
  switchKeys(){
    let keysEl = document.querySelectorAll('.keyboard__key');
    
    let setts = this.getDataLs();
    console.log(setts, 666)
    let isShift = setts.shift === 'shift' ? 0 : 1;
    for(let keyEl of keysEl){
      let valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];
     
      if(Array.isArray(valKey)){
        keyEl.textContent = valKey[isShift];
      }
      else keyEl.textContent = valKey;
      
    }
  }
  createContentBlock(){
    let windowContent = document.createElement('div');
    let windowContentInner = document.createElement('div');
    windowContent.classList.add('content-box');
    windowContentInner.classList.add('content-box__inner');
    windowContent.appendChild(windowContentInner)
    windowContentInner.innerHTML = (this.getDataLs()).content;
    return windowContent
  }
  setDataLs(data=this.settings){
    localStorage.setItem('settings', JSON.stringify(data));
  }
  getDataLs(){
    if(!localStorage.getItem('settings')) new Error('Data are empty');
    
    return JSON.parse(localStorage.getItem('settings'))
  }
  loadDom(){
    document.body.appendChild(this.createKeyboard())
    this.showContent()
    let windowContent = document.querySelector('.content-box__inner');
    if(windowContent){
      let control = (new ControlKeyboard())
      window.addEventListener('keydown', (e)=>{
        control.keydownKeyHandler(e)
      })
      window.addEventListener('keyup', (e)=>{
        control.keyupKeyHandler(e);
      })
    }
    this.createHelpText()
  }
  showContent(){
    document.body.prepend(this.createContentBlock());
  }
  createHelpText(){
    let helpTextWrap = document.createElement('div');
    let helpTextOne = document.createElement('p');
    let helpTextTwo = document.createElement('p');
    helpTextWrap.classList.add('help-text');
    helpTextOne.classList.add('help-text__one');
    helpTextTwo.classList.add('help-text__two');
    helpTextOne.textContent = 'Клавиатура создана в операционной системе Windows'
    helpTextTwo.textContent = 'Для переключения языка комбинация: левыe ctrl + alt'
    helpTextWrap.appendChild(helpTextOne);
    helpTextWrap.appendChild(helpTextTwo);

    document.body.appendChild(helpTextWrap);
  }
  changeWindowContent(data = this.getDataLs()){
    let contentBoxInner = document.querySelector('.content-box__inner');
    if(!contentBoxInner) return
    contentBoxInner.innerHTML = data.content;
  }

}

export default GenerateKeyboard;

