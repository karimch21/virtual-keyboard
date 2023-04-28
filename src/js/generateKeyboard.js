import keys from './keys';
import ControlKeyboard from './useKeyboard';

class GenerateKeyboard{
  constructor(){
    this.settings = {
      lang: 'en',
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
    for(let keysRow in keys[data.lang][data.capsLock]){
      let keyRowEl = document.createElement('div');
      keyRowEl.classList.add('keyboard__row');
      
      for(let key of keys[data.lang][data.capsLock][keysRow]){
        let keyEl = document.createElement('div');
        keyEl.classList.add('keyboard__key');
        keyEl.textContent = key;
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
    console.log(localStorage.getItem('settings'))
    return JSON.parse(localStorage.getItem('settings'))
  }
  loadDom(){
    document.body.appendChild(this.createKeyboard())
    this.showContent()
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