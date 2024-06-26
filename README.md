# Legend Forge

Legend Forge é uma aplicação que tem como função registrar os dados e equipamentos de um personagem em Dungeons & Dragons, um dosRpg de mesa mais famosos dos últimos tempos.
     
## Como funciona?

Basicamente os jogadores podem registrar suas fichas neste aplicativo mantendo elas registradas durante a aventura. A ficha contem informações de raças, nomes, classes, equipamentos e a distribuição de pontos de personagem.

## Escolhas para sua ficha
Você tem varias opções de caracteristicas para escolher.

### Raças
As opções de raças variam entre:
- Anão;
- Elfo;
- Humano;
- Draconato;
- Meio-Elfo;
- Meio-Orc

### Nomes
Você tem a liberdade de escolher qualquer nome para seu personagem, independente da raça ou das opções disponiveis no manual do jogador.

### Classes
Você pode escolher varias classes as quais podem influencias no que seu personagem se dedica a fazer, suas habilidades, seus equipamentos e até mesmo seus ideais. Entre elas são:
- Bárbaro
- Bardo
- Bruxo
- Clérigo
- Druida
- Feiticeiro
- Guerreiro
- Ladino
- Mago
- Monge
- Paladino
- Patrulheiro

### Equipamentos
Você pode escolher qualquer equipamento, isso vai depender da escolha do mestre da mesa caso ele queira que você siga a risca qual equipamento você tem direito ou se você é livre para escolher o que você quiser.

### Distribuição de pontos de Habilidade
Depois que sortear os valores de pontos nos dados você poderá distribui-los na sua ficha para que fiquem registrados o quão bom você é. você terá que distribuir entre as seguintes opções:
- Força
- Destreza
- Constituição
- Inteligencia
- Sabedoria
- Carisma

## Funcionamento Técnico

A aplicação funciona com varias funções, dentre elas tem uma que chama o menu inicial, uma para adicionar uma nova ficha, uma para listar todas as fichas, uma para editar uma ficha e uma para remover uma ficha de um aventureiro caído.

### Read Line
A biblioteca do readline é chamada pelas seguintes linhas de código:
```const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
```

### Objeto Ficha
Nesta linha de código é declarado o objeto ficha:

```let ficha = []```

### Menu por console.log()
As informações do menu aparecem através de um console.() para informar o usuário quais ações ele pode tomar. Ele funciona da seguinte forma:



### Função menuExecutar()
Esta função chama o menu inicial que contem as informações do menu aparecem através de um console.() para informar o usuário quais ações ele pode tomar e utilizando um switch para decidir qual função chamar com base no valor de entrada do rl.question. O mesmo ira fechar o programa caso o valor seja '5'. Ele funciona da seguinte forma:
```function exibirMenu() {
    console.log(`
        Menu:
        1. Criar ficha do novo jogador.
        2. Listar todas as fichas disponiveis.
        3. Editar uma ficha.
        4. Remover a ficha de um guerreiro caido ;-;.
        5.Sair do programa.
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                criarFicha()
                break
            case '2':
                listarFichas()
                break
            case '3':
                editarFicha()
                break
            case '4':
                removerFicha()
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}
```

### Função criarFicha()
Esta função ao ser chamada permite criar a ficha do personagem, ela utiliza vários rl.question para perguntar cada caracteristica e valor de ser personagem e encrementa os valores dentro do objeto ficha da seguinte forma:
```function criarFicha(){
    console.log(`
    Bem vindo a área de criação de fichas de D&D! Vamos começar com sua raça.\n
    Segue as opções de raças:
    - Anão;
    - Elfo;
    - Humano;
    - Draconato;
    - Meio-Elfo;
    - Meio-Orc;
    `)
    rl.question('Digite qual dessas raças você prefere. (digite em minusculo)\n', (raca) => {                                                                                                                               //; if(raca == elfo){console.log('tchola...')}
        rl.question('Digite o nome do seu personagem.\n', (nome) => {
            console.log(`
                    Escolha uma das 12 classes disponíveis.
                    - Bárbaro
                    - Bardo
                    - Bruxo
                    - Clérigo
                    - Druida
                    - Feiticeiro
                    - Guerreiro
                    - Ladino
                    - Mago
                    - Monge
                    - Paladino
                    - Patrulheiro
                `)
            rl.question('Digite a classe do seu personagem.\n', (classe) => {
                rl.question('Digite os equipamentos do seu personagem.\n', (equipamento) => {
                    console.log('Agora vamos distribuir os pontos de habilidade.\n')
                    rl.question('Força: ', (forca) => {
                        rl.question('Destreza: ', (destreza) => {
                            rl.question('Constituição: ', (constituicao) => {
                                rl.question('Inteligencia: ', (inteligencia) => {
                                    rl.question('Sabedoria: ', (sabedoria) => {
                                        rl.question('Carisma: ', (carisma) => {
                                            ficha.push({
                                                raca: raca,
                                                nome: nome,
                                                classe: classe,
                                                equipamento: equipamento,
                                                forca: forca,
                                                destreza: destreza,
                                                constituicao: constituicao,
                                                inteligencia: inteligencia,
                                                sabedoria: sabedoria,
                                                carisma: carisma
                                            })
                                            console.log('Cadastrou')
                                            exibirMenu()
                                        })
                                    })
                                })
                            })
                        })  
                    })
                })
            })
        })
    })
    
}
```

### Função listarFicha()
Esta função ao ser chamada lista todas as fichas já criadas. Ela verifica se a ficha está vazia, caso não esteja ela utiliza forEach para listar todas as fichas de forma numerada. Isto acontece da seguinte forma:
```function listarFichas() {
    if (ficha.length === 0) {
        console.log('Nenhuma Ficha cadastrada.')
    } else {
        console.log('Lista de todas as fichas:')
        ficha.forEach((ficha, index) => {
            console.log(`
                ${index + 1}. 
                Raça: ${ficha.raca}
                Nome: ${ficha.nome}
                Classe: ${ficha.classe}
                Equipamentos: ${ficha.equipamento}
                Força: ${ficha.forca}
                Destreza: ${ficha.destreza} 
                Constituição: ${ficha.constituicao} 
                Inteligencia: ${ficha.inteligencia} 
                Sabedoria: ${ficha.sabedoria} 
                Carisma: ${ficha.carisma}
            `)
        })
    }
    exibirMenu()
}
```

### Função editarFicha()
Esta função ao ser chamada permite o usuário editar uma das fichas. Ele comaça listando todas as fichas da mesma forma que a função listarFicha(), logo em seguida ele pede para digitar o nomero da ficha que deseja editar e depois pergunta todos os dados da ficha para ser atualizada da mesma forma que a função criarFicha(), porém, ele não utiliza o comando ficha.push e sim ficha[número - 1] = {} para sobrescrever os dados. Isto é feito da seguinte forma:
```function editarFicha() {
    if (ficha.length == 0) {
        console.log('Não há aventureiros ainda.')
        exibirMenu()
    } else {
        ficha.forEach((ficha, index) => {
            console.log(`
                ${index + 1}. 
                Raça: ${ficha.raca}
                Nome: ${ficha.nome}
                Classe: ${ficha.classe}
                Equipamentos: ${ficha.equipamento}
                Força: ${ficha.forca}
                Destreza: ${ficha.destreza} 
                Constituição: ${ficha.constituicao} 
                Inteligencia: ${ficha.inteligencia} 
                Sabedoria: ${ficha.sabedoria} 
                Carisma: ${ficha.carisma}
            `)
        })
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if (numero > 0 && numero <= ficha.length) {
                rl.question('Digite qual dessas raças você prefere. (digite em minusculo)\n', (raca) => {                                                                                                                               //; if(raca == elfo){console.log('tchola...')}
                    rl.question('Digite o nome do seu personagem.\n', (nome) => {
                        rl.question('Digite a classe do seu personagem.\n', (classe) => {
                            rl.question('Digite os equipamentos do seu personagem.\n', (equipamento) => {
                                console.log('Agora vamos distribuir os pontos de habilidade.\n')
                                rl.question('Força: ', (forca) => {
                                    rl.question('Destreza: ', (destreza) => {
                                        rl.question('Constituição: ', (constituicao) => {
                                            rl.question('Inteligencia: ', (inteligencia) => {
                                                rl.question('Sabedoria: ', (sabedoria) => {
                                                    rl.question('Carisma: ', (carisma) => {
                                                        ficha[numero - 1] = {
                                                            raca,
                                                            nome,
                                                            classe,
                                                            equipamento,
                                                            forca,
                                                            destreza,
                                                            constituicao,
                                                            inteligencia,
                                                            sabedoria,
                                                            carisma
                                                        }
                                                        console.log('Editado com sucesso!')
                                                        exibirMenu()
                                                    })
                                                })
                                            })
                                        })
                                    })  
                                })
                            })
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}
```

### Função removerFicha()
Esta função ao ser chamada permite o usuário remover uma ficha, ele lista todas as fichas e pede para selecionar uma ficha igual a função editarFicha, porém, ao invéz de pedir as novas informações ele apenas utilizara ficha.splice para remover a ficha escolhida. Isto acontece da seguinte forma:
```function removerFicha(){
    if (ficha.length == 0) {
            console.log('Nada cadastrado.')
            exibirMenu()
    } else {
        console.log('Lista de elementos')
        ficha.forEach((ficha, index) => {
            console.log(`
            ${index + 1}. 
            Raça: ${ficha.raca}
            Nome: ${ficha.nome}
            Classe: ${ficha.classe}
            Equipamentos: ${ficha.equipamento}
            Força: ${ficha.forca}
            Destreza: ${ficha.destreza} 
            Constituição: ${ficha.constituicao} 
            Inteligencia: ${ficha.inteligencia} 
            Sabedoria: ${ficha.sabedoria} 
            Carisma: ${ficha.carisma}
            `)
        })
        rl.question('Digite a ficha que deseja remover: ', (numero) => {
            if (numero > 0 && numero <= ficha.length) {
                ficha.splice(numero - 1, 1)
                console.log('Enterro feito com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}
```

