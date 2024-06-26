const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let ficha = []

function exibirMenu() {
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

function criarFicha(){
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

function listarFichas() {
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

function editarFicha() {
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

function removerFicha(){
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

exibirMenu()