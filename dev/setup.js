/**
 * Para ativar este código, entre na raiz do projeto e rode o seguinte comando
 * npm run dev:setup
 * 
 * Este código cria uma arquivo .env na raiz do projeto 
 * a partir de uma cópia do arquivo .env.example
 */
const fs = require('fs');
const path = require('path');

const envExamplePath = path.join(__dirname, '..', '.env.example');
const envPath = path.join(__dirname, '..', '.env');

try{
    if(fs.existsSync(envPath)){
        fs.copyFileSync(envPath, envPath + '.old');
        fs.unlinkSync(envPath);
    }

    if(fs.existsSync(envExamplePath)){
        fs.copyFileSync(envExamplePath, envPath);
    }
}
catch(err){
    console.log('Um erro impediu o setup completo do ambiente de configuração');
    console.log(err);
}

process.exit(0);