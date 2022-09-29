import * as yup from "yup";
const Schema = yup.object().shape({
  Password: yup.string().required().max(6).min(6),
  UserName: yup.string().required().max(8).min(8),
});

export default Schema;
