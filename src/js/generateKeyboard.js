import {keys, keysView} from './keys';
import ControlKeyboard from './useKeyboard';

class GenerateKeyboard{
  constructor(){
    this.settings = {
      lang: navigator.language,
      capsLock: 'unshift',
      content: 'mmkmk'
    }
  }
  init(){
    window.addEventListener('load',()=>{
      this.loadDom()
    });
    window.addEventListener('click',(e)=>{
      (new ControlKeyboard()).windowClickHandler(e)
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
    for(let keysRow in keysView[data.lang][data.capsLock]){
      let keyRowEl = document.createElement('div');
      keyRowEl.classList.add('keyboard__row');
      
      for(let key of keysView[data.lang][data.capsLock][keysRow]){
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
  createContentBlock(){
    let windowContent = document.createElement('div');
    let windowContentInner = document.createElement('div');
    windowContent.classList.add('content-box');
    windowContentInner.classList.add('content-box__inner');
    windowContent.appendChild(windowContentInner)
    windowContentInner.textContent = (this.getDataLs()).content;
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
    }
  }
  showContent(){
    document.body.prepend(this.createContentBlock());
  }
  changeWindowContent(data = this.getDataLs()){
    let contentBoxInner = document.querySelector('.content-box__inner');
    if(!contentBoxInner) return
    contentBoxInner.textContent = data.content;
  }

}

export default GenerateKeyboard;