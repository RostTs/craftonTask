// form validation
const floatInputs = document.querySelectorAll('.form-input');

floatInputs.forEach(item => {item.addEventListener('focus', () => {
    let parent = item.parentElement;
    parent.classList.add('active_field');
 })
 })

 floatInputs.forEach(item => {item.addEventListener('blur', () => {
    let parent = item.parentElement;
    if (item.value == '') {
        parent.classList.add('empty');
    }else {
        parent.classList.remove('empty');
    }
 })
 })


 // form submission

const form = document.getElementById('registerForm');


form.addEventListener('submit', () => {
    let xhr =  new XMLHttpRequest();
    let formData = new FormData(form)

    let object = {};
    formData.forEach((value, key) => object[key] = value);
    let json = JSON.stringify(object);

     xhr.open('POST','index.php',true);
     xhr.setRequestHeader('Content-type', 'application-json');

     xhr.send(json);
  });