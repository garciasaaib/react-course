import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
}).required();


export const loginResolver = yupResolver(loginSchema);
