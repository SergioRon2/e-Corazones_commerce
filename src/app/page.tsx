'use client'
import ParticleComponent from "@/(features)/components/tsParticles/particles.js"

function Home() {
  return <>
      <main className="flex h-screen w-screen flex-row">
        <div className="w-2/3">
          <ParticleComponent />
        </div>
        <div className="bg-white w-1/3 z-50">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Ingresa en tu cuenta
              </h2>
            </div>
  
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Direccion de correo
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 focus:ring-black focus:outline-none px-4 focus:border-black focus:ring-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Contraseña
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-black hover:text-black">
                        Olvidaste la contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 focus:ring-black focus:outline-none px-4 focus:border-black focus:ring-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    />
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
  
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿No eres miembro?{' '}
                <a href="#" className="font-semibold text-black hover:text-gray-800">
                Comience una prueba gratuita de 14 días
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
  </>
}

export default Home