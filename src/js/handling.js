import {keysView, keys, dataKeys} from './keys';

class HandlingKeys {
  constructor() {
    this.isShift = false;
  }
  handlingCaps(setts) {
    
    if (setts.capsLock) {
      setts.capsLock = false
    }
    else setts.capsLock = true
    return setts
  }

  handlingShift(setts, valKey, keyCodeEl) {
    if (!this.isShift) {
      console.log(1234432)
      if (setts.shift === 'shift') {
        console.log(1, 44)
        setts.shift = 'unshift';
      }
      else {
        console.log(2, 44)
        setts.shift = 'shift';
      }
      console.log(setts)
      this.isShift = true;
      console.log(this.isShift, 'BEFORE')
      return setts
    }
  }
  handlingShiftUp(setts, valKey, keyCodeEl) {
    console.log(this.isShift)
    if (this.isShift) {

      if (setts.shift === 'shift') {
        setts.shift = 'unshift';
      }
      else setts.shift = 'shift';
      this.isShift = false;
      return setts
    }
  }

  handlingEnter(setts, valKey, keyCodeEl) {
    setts.content += '\n';
    return setts
  }
  handlingBackspace() {

  }
  handlingSpace(setts, valKey, keyCodeEl) {
    setts.content += ' ';
    return setts
  }
}

export default HandlingKeys