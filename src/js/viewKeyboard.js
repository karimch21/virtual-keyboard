import GenerateKeyboard from "./generateKeyboard";

class View{
  constructor(){
    this.genKeyboard = new GenerateKeyboard();
    this.keyboardEl = this.genKeyboard.createKeyboard();
  }
  loadDom(){
    document.body.appendChild(this.keyboardEl)
  }
}

window.addEventListener('load', (new View()).loadDom())
