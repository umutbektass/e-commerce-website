import * as yup from 'yup'

const validations = yup.object().shape({
    email:yup.string().email("Lütfen geçerli e-mail adresi girin.").required("Zorunlu alan"),
    password:yup.string().min(5,"Parolanız en az 5 karakterli olmalıdır.").required("Zorunlu alan"),
    confirmpassword:yup.string().oneOf([yup.ref("password")],"Paralolar uyuşmuyor.").required("Zorunlu alan")
})

export default validations;