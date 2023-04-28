
import GenerateKeyboard from './generateKeyboard';

class ControlKeyboard{
  constructor(){
    this.genData = new GenerateKeyboard();
    this.specialKey = ['tab','capslock','alt', '', 'ctrl', 'backspace',"left","down", "right", "shift","up","win", "enter"];
  }
  clickKeyHandler(keyEl){
    let valKey = (keyEl.textContent).toLowerCase();
    this.addKeyActiveStyle(keyEl)
    let setts =  this.genData.getDataLs()
    if(!this.specialKey.includes(valKey) && setts){
      setts.content += valKey;
      this.genData.setDataLs(setts)
      this.genData.changeWindowContent()
    }
  }
  addKeyActiveStyle(keyEl){
    keyEl.classList.add('keyboard__key_active')
    setTimeout(()=>{
      keyEl.classList.remove('keyboard__key_active')
    },2000)
  }
  windowClickHandler(e){
    let keyEl = e.target.closest('.keyboard__key');
    if(keyEl) this.clickKeyHandler(keyEl)
    console.log(keyEl)
  }
  
}




export default ControlKeyboard