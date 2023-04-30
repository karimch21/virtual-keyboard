class HandlingKeys {
  constructor(){
    this.isShift = false;
  }
  handlingCaps() {

  }
 
  handlingShift(setts,valKey,keyCodeEl){
   if(!this.isShift){
     console.log(1234432)
    if(setts.capsLock === 'shift'){
      setts.capsLock = 'unshift';
     }
     else setts.capsLock = 'shift';
     this.isShift = true;
     return setts
   }
  }
  handlingShiftUp(setts,valKey,keyCodeEl){
    if(this.isShift){
     if(setts.capsLock === 'shift'){
       setts.capsLock = 'unshift';
     
      }
      else setts.capsLock = 'shift';
      this.isShift = false;
      return setts
    }
   }
 
  handlingEnter(setts,valKey,keyCodeEl) {
    setts.content += '\n';
    return setts
  }
  handlingBackspace() {

  }
  handlingSpace(setts,valKey,keyCodeEl) {
    setts.content += ' ';
    return setts
  }
}

export default HandlingKeys