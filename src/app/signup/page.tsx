'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InputField } from '@/components/components/input';
import MovieList from '@/components/components/movies';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must contain at least 3 characters.'),
  username: z.string().min(3, 'Username must contain at least 3 characters.'),
  email: z.string().email('Email must be valid.'),
  password: z.string().min(6, 'Password must contain at least 6 characters.'),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-red-500 text-xs">{message}</p>
);

const FormField = ({
  label,
  type = 'text',
  placeholder,
  register,
  error,
}: {
  label: keyof SignUpFormData;
  type?: string;
  placeholder: string;
  register: any;
  error?: any;
}) => (
  <div>
    <InputField
      placeholder={placeholder}
      type={type}
      {...register(label)}
    />
    {error && <ErrorMessage message={error.message} />}
  </div>
);

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="grid md:grid-cols-2 w-5/6 container h-screen max-h-[1024px]">
        <div className="px-28 flex justify-start items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4"
          >
            <p>LOGO</p>
            <FormField
              label="name"
              placeholder="Name"
              register={register}
              error={errors.name}
            />
            <FormField
              label="username"
              placeholder="Username"
              register={register}
              error={errors.username}
            />
            <FormField
              label="email"
              placeholder="Email"
              type="email"
              register={register}
              error={errors.email}
            />
            <FormField
              label="password"
              placeholder="Password"
              type="password"
              register={register}
              error={errors.password}
            />
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 flex items-center justify-center w-full"
            >
              Sign Up
            </button>
            <Link className="flex gap-1 items-center hover:underline" href="/">
              <ArrowLeftIcon className="size-4 text-slate-600" />
              <p className="text-sm text-slate-600 font-bold">Voltar</p>
            </Link>
          </form>
        </div>

        <div className="overflow-hidden">
          <MovieList />
        </div>
      </div>
    </main>
  );
}