import Link from 'next/link';
import MovieList from '../components/movies';
import { InputField } from '../components/input';
import { Button } from '../components/button';

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-2 w-5/6 container h-screen max-h-[1024px]">
        <div className="pl-28 pr-28 flex justify-start items-center">
          <div className="flex justify-center items-start gap-2 flex-col w-full">
            <p>LOGO</p>
            <div className="mb-4">
              <p className="text-base text-slate-600">Welcome to</p>
              <h1 className="text-3xl text-slate-800 font-['Poppins'] font-bold">
                Cine Mercy
              </h1>
            </div>
            <InputField placeholder="Email" type="email" />
            <InputField placeholder="Password" type="password" />
            <Button moreClasses="mt-4">Sign In</Button>
            <div>
              <p className="mt-4 text-sm text-slate-600">
                Do you have an account?{' '}
                <Link href="/signup" className="font-bold">
                  Sign Up!
                </Link>
              </p>
              <p className="text-sm text-slate-600 font-bold">
                Forgot your password?
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <MovieList />
        </div>
      </div>
    </main>
  );
}
