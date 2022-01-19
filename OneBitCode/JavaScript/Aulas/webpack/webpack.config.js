// entry - arquivos ao qual deve ler (entrada)

const path = require("path")

module.exports = {
  entry:{
    index: './src/index.js',
    galaxy:'./src/galaxy.js'
  },

  output: {
    filename: '[name].bundle.js',
    path:path.resolve(__dirname, 'dist')
  },

  // regra pra usar babel loader // percorre todos os arquivos usar babel loarder
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader']
        }
      ]
    },
  // whatch procura por alterarções que tenha nos arquivos e quando encontra processa novamente o webpack
    
  // chave de config servidor de desenvolvimento
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
        watch: true,
      }
      
    
  }

}