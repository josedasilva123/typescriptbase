import * as yup from "yup";

export const counterFormSchema = yup.object().shape({
   value: yup.string().required("O valor é obrigatório"),
   type: yup.string().required("Selecionar o valor é obrigatório"),
});
