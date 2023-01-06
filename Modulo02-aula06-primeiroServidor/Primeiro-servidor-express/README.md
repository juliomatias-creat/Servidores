1° npm init -y (inicializa um projeto npm padrão)
2° Criar o arquivo .gitignore para inserir a pasta nod_modules para ela não subir no versionamento
3° criar a pasta src (source) para armazenar todo o código-fonte do meu prjoeto
4° dentro da pasta src, criar o arquivo index.js que será o arquivo principal do meu projeto
5° abrir terminal para Instalar a biblioteca do express: npm install express
6° Começar a implementar dentro do arquivo index.js o meu primeiro seridor usando express
7° Importar a biblioteca express: require('express') e armazenar na constante de mesmo nome da biblioteca
8° O express é semelhante a uma instância do objeto do express, pra isso temos que criar/inicializar declarando a const app = express(); app(padrão, pra dizer que são métodos da minha aplicação que eu vou utilizar o express).
Com isso a const app virou uma instância do objeto express.
10° Criar uma rota: app.get('/', (requisicao, resposta) => {}); (esse método do express com o verbo get cria uma rota), ele recebe utro argumento que será a função que irá manipular a requisição que chegará aqui dentro do meu servidor.
11° Dentro dessa função a gente recebe dois argumentos: o 1° é a requisição, o 2° é a resposta. 
12° Dentro da função eu posso pegar tudo que vem na requisição através do 'req' e posso mandar tudo que eu quiser através do 'res'
13° Vou mandar uma respostar através do método send:  app.get('/', (requisicao, resposta) => {
    resposta.send('Olá... Esse é o meu primeiro servidor');
});
16° Agora basta definir a porta para que seja possível a comunicação com o meu servidor. Isso é feito através do app.listen(3000);