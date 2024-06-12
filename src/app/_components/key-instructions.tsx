export const KeyInstructions = () => {
  return (
    <div className="flex justify-center p-4 lg:p-10 w-full">
      <div className="bg-background-dark rounded-lg px-20 py-16 w-full max-w-[833px]">
        <h2 className="text-center text-lg text-gray font-semibold">
          Guia inicial para obter uma chave da openIA
        </h2>

        <ol className="text-white list-decimal space-y-3">
          <li>
            Realize um cadastro: Acesse o site da{" "}
            <a href="https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#setup">
              OpenAI
            </a>
            ;
          </li>
          <li>
            Acesse o Painel de API: Dentro do painel vá até o seu avatar e
            clique em View API keys;
          </li>
          <li>
            Crie uma nova chave: Ao clicar no botão de + Create new secret key
            adicione um apelido para a chave e um novo código será gerado;
          </li>
          <li>Copie a chave gerada e cole abaixo; 👇</li>
        </ol>
      </div>
    </div>
  );
};
