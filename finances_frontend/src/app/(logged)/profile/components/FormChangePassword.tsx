export const FormChangePassword = () => {
  return (
    <form className="bg-white rounded-xl p-4 flex flex-col gap-4 w-1/2 h-full">
      <h3 className="font-semibold text-xl text-foreground">Redefinir Senha</h3>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="passPassword"
          className="text-sm font-medium text-gray-700"
        >
          Senha Antiga
        </label>
        <input
          type="password"
          id="passPassword"
          placeholder="Sua senha antiga"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-principal-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="newPassword"
          className="text-sm font-medium text-gray-700"
        >
          Nova Senha
        </label>
        <input
          type="password"
          id="newPassword"
          placeholder="Sua nova senha"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-principal-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="repeatPassword"
          className="text-sm font-medium text-gray-700"
        >
          Repita sua senha
        </label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="Repita sua nova senha"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-principal-500"
        />
      </div>
      <button
        type="submit"
        className="w-fit cursor-pointer mt-4 bg-principal hover:bg-background3 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        Alterar Senha
      </button>
    </form>
  );
};
