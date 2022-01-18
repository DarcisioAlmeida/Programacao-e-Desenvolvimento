// mapear os arquivos 
// substitui toda esta configuração // npx babel src --out-dir dist --presets=@babel/preset-env 
// corejs - importa recursos que o ES% não tem nativamente ajuda a promais funcionar 
// npm install core-js --save
// npx babel src --out-dir dist

const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs:"3.20.0"
    }
  ]
]
module.exports ={presets}