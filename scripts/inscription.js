function submitForm() {
    const nom = document.querySelector('#input-nom').value;
    const prenom = document.querySelector('#input-prenom').value;
    const mail = document.querySelector('#input-mail').value;
    const mdp = document.querySelector('#input-mdp').value;
    const mdpConfirmation = document.querySelector('#input-mdpConfirmation').value;
    const nameRegex = /^[a-zA-Z\-]+$/ ;
    console.log(nom);
    console.log(prenom);
    console.log(mail);
    console.log(mdp);
    console.log(mdpConfirmation);
    const validationMesg = document.querySelector('.valid-name');  
    if(nom.match(nameRegex)) {
        document.querySelector('#input-nom').onblur = validationMsgForm(validationMesg); 
    }
}

function validationMsgForm(element) {

  document.querySelector('#input-nom').onblur = validationMsgForm(validationMesg); 
  element.style.display= "block";
}      