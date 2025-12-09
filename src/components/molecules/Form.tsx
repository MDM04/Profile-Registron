import { useForm } from "react-hook-form";

interface FormData {
  name?: string;
}

export function Form() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
