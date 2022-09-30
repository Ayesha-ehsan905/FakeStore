import * as yup from "yup";
const Schema = yup.object().shape({
  Password: yup.string().required(),
  UserName: yup.string().required(),
});

export default Schema;
