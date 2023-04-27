import keys from './keys';

class GenerateKeyboard{
  constructor(){
    this.settings = {
      lang: 'en',
      capsLock: 'unshift',
      content: ''
    }
  }
  createKeyboard(){
    this.setDataLs()
    let keyboard = document.createElement('div');
    let keyboardInnerEl = document.createElement('div');
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
  setDataLs(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
  getDataLs(){
    if(!localStorage.getItem('settings')) new Error('Data are empty');
    console.log(localStorage.getItem('settings'))
    return JSON.parse(localStorage.getItem('settings'))
  }
}

export default GenerateKeyboard;