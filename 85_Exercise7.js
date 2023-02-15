// Make a password Generator
class GeneratePassword {
    constructor() {
      console.log("Constructor called");
    }
  
    //  FOR STRONG PASSWORD
    strongPassword() {
      let password = "";
      for (let i = 0; i < 2; i++) {
        let sCharacter = Math.floor(Math.random() * (47 - 34)) + 33;
        sCharacter = String.fromCharCode(sCharacter);
  
        let nCharacter = Math.floor(Math.random() * (57 - 49) + 48);
        nCharacter = String.fromCharCode(nCharacter);
  
        let cCharacter = Math.floor(Math.random() * (90 - 66) + 65);
        cCharacter = String.fromCharCode(cCharacter);
  
        let smallCharacter = Math.floor(Math.random() * (123 - 98) + 97);
        smallCharacter = String.fromCharCode(smallCharacter);
  
        password += sCharacter + nCharacter + cCharacter + smallCharacter;
      }
      return password;
    }
  
    // FOR FUNNY PASSWORD
    funnyPassword() {
      let password = "";
      let arr = ['loveYouTeacher', 'password', 'nariyalTel', 'sunnyLeone', 'badamTel', 'harpic', 'jhadooPochha', 'creamPowder']
      let rm = Math.floor(Math.random() * arr.length);
      password = arr[rm];
      return password;
    }
  
  
    // FOR WEAK PASSWORD
    weakPassword() {
      let password = "";
      let rm = Math.floor(Math.random() * 2);
      for (let i = 0; i < 6; i++) {
        if (rm == 0) {
          let nCharacter = Math.floor(Math.random() * (57 - 49) + 48);
          nCharacter = String.fromCharCode(nCharacter);
          password += nCharacter;
        }
        if (rm == 1) {
          let cCharacter = Math.floor(Math.random() * (90 - 66) + 65);
          cCharacter = String.fromCharCode(cCharacter);
          password += cCharacter;
        }
        if (rm == 2) {
  
          let smallCharacter = Math.floor(Math.random() * (123 - 98) + 97);
          smallCharacter = String.fromCharCode(smallCharacter);
          password += smallCharacter;
        }
      }
      return password;
    }
  
  }
  
  let c1 = new GeneratePassword();
  
  
  let addTxt = document.getElementById("addTxt");
  function sBtn() {
    let sPass = c1.strongPassword();
    console.log(sPass);
    addTxt.innerText = sPass;
  }
  function fBtn() {
    let fPass = c1.funnyPassword();
    console.log(fPass);
    addTxt.innerText = fPass;
  }
  function wBtn() {
    let wPass = c1.weakPassword();
    console.log(wPass);
    addTxt.innerText = wPass;
  }
  