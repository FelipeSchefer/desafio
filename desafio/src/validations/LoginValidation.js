import * as yup from 'yup'

export const loginValidationEmail = yup.object().shape({
 email: yup.string().email().required()
}) 
export const loginValidationSenha = yup.object().shape({
 senha: yup.string().min(6).max(20).required()
}) 