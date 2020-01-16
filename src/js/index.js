// import SharedLogic from './shared/shared-logic';

document.addEventListener('DOMContentLoaded', () => {
    window.refs = {
        //   sharedLogic: new SharedLogic(),
    };
    let el = document.querySelectorAll('.class');
    let length = el.length;
  
    for (let i = 0; i < length-1; i++) {
        el[i].classList.add('class1');
    }
    el[length-1].classList.add('class2');
})


