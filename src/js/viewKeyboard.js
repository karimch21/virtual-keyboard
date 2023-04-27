import GenerateKeyboard from "./generateKeyboard";

class View{
  constructor(){
    this.genKeyboard = new GenerateKeyboard();
    this.keyboardEl = this.genKeyboard.createKeyboard();
  }
  loadDom(){
    this.showContent()
    document.body.appendChild(this.keyboardEl)
  }
  showContent(){
    document.body.appendChild(this.createContentBlock());
  }
  createContentBlock(){
    let windowContent = document.createElement('div');
    let windowContentInner = document.createElement('div');
    windowContent.classList.add('content-box');
    windowContentInner.classList.add('content-box__inner');
    windowContent.appendChild(windowContentInner)
    windowContentInner.textContent = (this.genKeyboard.getDataLs()).content;
    return windowContent
  }
}

window.addEventListener('load', (new View()).loadDom())
