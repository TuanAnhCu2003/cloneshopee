 // JS MODAL LOGIN
 const loginBtn = document.querySelector('.js-login-btn')
 const modalLogin = document.querySelector('.js-modal-login')
 const modalCloseLoginBTN = document.querySelector('.js-modal-login-close')
 const authFormLogin = document.querySelector('.js-modal-authform-login')
 // Hàm hiển thị modal (thêm class open vào modal)
 function showFormLogin() {
     modalLogin.classList.add('open')
     
 }
 // Lắng nghe hành vi click vào nút đăng nhập
 loginBtn.addEventListener('click', showFormLogin)

 // Hàm đóng modal (xóa class open)
 function closeFormLogin() {
     modalLogin.classList.remove('open')
     
 }
 // Lắng nghe hành vi click vào nút X(đóng)
 modalCloseLoginBTN.addEventListener('click',closeFormLogin)

 // Xử lý click bên ngoài form sẽ tắt form
 // Lắng nghe hành vi click của modalLogin
 // Form bấm ra ngoài hoặc bấm vào trong đều bị đóng do sự kiện nổi bọt
 modalLogin.addEventListener('click',closeFormLogin)
 // Ngăn sự kiện nổi bọt từ lớp cha(modalLogin) tới tg con
 // auth-form
 authFormLogin.addEventListener('click', function (event) {
     event.stopPropagation()

 })

 // END JS MODAL LOGIN

 // JS MODAL REGISTER
 const registerBtn = document.querySelector('.js-register')
 const modalRegister = document.querySelector('.js-modal-register')
 const modalCloseRegisterBtn = document.querySelector('.js-modal-register-close')
 const authFormRegister = document.querySelector('.js-modal-authform-register')

 function showFormRegister() {
     modalRegister.classList.add('open')
     
 }
 registerBtn.addEventListener('click',showFormRegister)


 function closeFormRegister() {
     modalRegister.classList.remove('open')

 }
 modalCloseRegisterBtn.addEventListener('click', closeFormRegister)


 modalRegister.addEventListener('click', closeFormRegister)
 // Ngăn sk nổi bọt
 authFormRegister.addEventListener('click', function (event) {
     event.stopPropagation()
 })


 // END JS MODAL REGISTER