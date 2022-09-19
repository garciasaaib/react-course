import { useState } from 'react';

export const useForm = <T extends Object>(base: T) => {
  const [form, setForm] = useState(base)

  const onChange = (value: string, campo: keyof T) => {
    setForm({
      ...form,
      [campo]: value
    })
  }
  return {
    form, onChange
  }
}
