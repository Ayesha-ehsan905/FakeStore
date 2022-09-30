import * as yup from "yup";
const Schema = yup.object().shape({
  Password: yup.string().required(),
  UserName: yup.string().required(),
  Title: yup.string().required(),
  Price: yup.number().required().min(0.0).max(1000),
  Category: yup.string().required(),
  Description: yup.string().required(),
  Image: yup.string().required(),
});

export default Schema;
