import MovieList from '../components/movies';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-2 w-5/6 container h-screen max-h-[720px]">
        <div className="pt-16 pb-16 pl-28 pr-28 flex justify-start items-center">
          <div className="flex justify-center items-start gap-2 flex-col w-full">
            <p>LOGO</p>
            <div>
              <p className="text-lg text-slate-600">Bem-vinda ao</p>
              <h1 className="text-2xl text-slate-800">Cine Mercy</h1>
            </div>
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-slate-600">
                Digite seu email
              </label>
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">
                Digite sua senha
              </label>
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Senha"
              />
            </div>
            <p className="text-sm text-slate-600 font-bold self-end">
              Esqueceu sua senha?
            </p>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full mt-4"
            >
              Entrar
            </button>
            <p className="mt-4 text-sm text-slate-600">
              É nova no Cine Mercy?{' '}
              <a href="#" className="font-bold">
                Crie uma conta!
              </a>
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <MovieList />
        </div>
      </div>
    </main>
  );
}
