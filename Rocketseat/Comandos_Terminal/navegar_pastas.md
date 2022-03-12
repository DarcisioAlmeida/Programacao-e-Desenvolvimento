Navegando pelas pastas

Descrição
O comando cd (ou change directory) vai ser utilizado quando se deseja mudar de diretório, como por exemplo, ir para a pasta Downloads do seu computador, seria usado o seguinte comando (assumindo que você esteja na pasta do seu user
cd Downloads
Caso deseje voltar um diretório, use cd .. , dessa forma:
cd ..
Caso deseje voltar mais de um diretório, use uma / como separação, ex:
cd../../../
Nesse caso, voltaríamos 3 diretórios, dado que temos 3 repetições do comando.

Caso deseje voltar de onde veio, use cd ~, da seguinte forma:
cd ~
no caso de um diretório com espaços, devem-se usar as barras invertidas (ou \ ), visto que sem essas barras, o computador não consegue reconhecer o espaço no diretório e não consegue acessá-lo, deve ser utilizado da seguinte forma:
cd Diretório\ com\ espaços
ou, fazer uso de aspas, da seguinte forma:
cd "Diretório com espaços/"