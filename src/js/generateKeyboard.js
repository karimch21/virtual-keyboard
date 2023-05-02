import { keys, keysView, dataKeys } from './keys';
import ControlKeyboard from './useKeyboard';

class GenerateKeyboard {
  constructor() {
    this.settings = {
      lang: 'en',
      capsLock: false,
      shift: 'unshift',
      content: 'Input text',
    };
  }

  init() {
    window.addEventListener('load', () => {
      this.loadDom();
    });
    window.addEventListener('click', (e) => {
      e.preventDefault();
      (new ControlKeyboard()).windowClickHandler(e);
    });
  }

  createKeyboard() {
    if (!this.getDataLs()) this.setDataLs();
    const keyboard = document.createElement('div');
    const keyboardInnerEl = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboardInnerEl.classList.add('keyboard__inner');
    const data = this.getDataLs();
    console.log(keysView);
    for (const keysRow in keysView[data.lang][data.shift]) {
      const keyRowEl = document.createElement('div');
      keyRowEl.classList.add('keyboard__row');

      for (const key of keysView[data.lang][data.shift][keysRow]) {
        const keyEl = document.createElement('div');
        keyEl.classList.add('keyboard__key');
        if(key[1].toLowerCase() === 'space'){
          keyEl.classList.add('keyboard__key-space')
          keyEl.textContent = '';
        }
        else keyEl.textContent = key[1];

        if(this.getDataLs().capsLock){
          if(key[1].toLowerCase() === 'capslock') keyEl.classList.add('keyboard__key_on')
        }
     
       
        keyEl.dataset.keyCode = key[0];
        keyRowEl.appendChild(keyEl);
      }
      keyboardInnerEl.appendChild(keyRowEl);
    }
    keyboard.appendChild(keyboardInnerEl);
    return keyboard;
  }

  switchKeys() {
    const keysEl = document.querySelectorAll('.keyboard__key');

    const setts = this.getDataLs();
    console.log(setts, 666);
    const isShift = setts.shift === 'shift' ? 0 : 1;
    for (const keyEl of keysEl) {
      const valKey = dataKeys[setts.lang][keyEl.dataset.keyCode];

      if (Array.isArray(valKey)) {
        keyEl.textContent = valKey[isShift];
      } else{
        if(valKey.toLowerCase() === 'space'){
          console.log(1111, 'SPACE')
          keyEl.textContent = '';
        }
        else keyEl.textContent = valKey;
      } 
    }
  }

  createContentBlock() {
    const windowContent = document.createElement('div');
    const windowContentInner = document.createElement('div');
    windowContent.classList.add('content-box');
    windowContentInner.classList.add('content-box__inner');
    windowContent.appendChild(windowContentInner);
    windowContentInner.innerHTML = (this.getDataLs()).content;
    return windowContent;
  }

  setDataLs(data = this.settings) {
    localStorage.setItem('settings', JSON.stringify(data));
  }

  getDataLs() {
    if (!localStorage.getItem('settings')) new Error('Data are empty');

    return JSON.parse(localStorage.getItem('settings'));
  }

  loadDom() {
    document.body.appendChild(this.createKeyboard());
    this.showContent();
    const windowContent = document.querySelector('.content-box__inner');
    if (windowContent) {
      const control = (new ControlKeyboard());
      window.addEventListener('keydown', (e) => {
        control.keydownKeyHandler(e);
      });
      window.addEventListener('keyup', (e) => {
        control.keyupKeyHandler(e);
      });
    }
    this.createHelpText();
  }

  showContent() {
    document.body.prepend(this.createContentBlock());
  }

  createHelpText() {
    const helpTextWrap = document.createElement('div');
    const helpTextOne = document.createElement('p');
    const helpTextTwo = document.createElement('p');
    helpTextWrap.classList.add('help-text');
    helpTextOne.classList.add('help-text__one');
    helpTextTwo.classList.add('help-text__two');
    helpTextOne.textContent = 'Клавиатура создана в операционной системе Windows';
    helpTextTwo.textContent = 'Для переключения языка комбинация: ctrl + shift';
    helpTextWrap.appendChild(helpTextOne);
    helpTextWrap.appendChild(helpTextTwo);

    document.body.appendChild(helpTextWrap);
  }

  changeWindowContent(data = this.getDataLs()) {
    const contentBoxInner = document.querySelector('.content-box__inner');
    if (!contentBoxInner) return;
    contentBoxInner.innerHTML = data.content;
  }
}

export default GenerateKeyboard;
