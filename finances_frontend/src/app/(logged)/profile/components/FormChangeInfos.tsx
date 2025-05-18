export const FormChangeInfos = () => {
  return (
    <form className="bg-white rounded-xl p-4 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="profile-photo"
          className="text-sm font-medium text-gray-700"
        >
          Foto de Perfil
        </label>
        <div className="flex items-center">
          <label
            htmlFor="profile-photo"
            className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer relative group"
          >
            {/* Placeholder para a imagem de perfil */}
            <span className="text-gray-500 text-xl group-hover:opacity-50 transition">
              Foto
            </span>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-xs">
              Alterar
            </div>
            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Seu nome completo"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-principal-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="seu.email@exemplo.com"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-principal-500"
        />
      </div>
      <button
        type="submit"
        className="w-fit mt-4 bg-principal cursor-pointer hover:bg-background3 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        Atualizar Perfil
      </button>
    </form>
  );
};
