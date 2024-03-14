let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]


function listarAlunos(chamadaDeAlunos) {
    listarAlunos.forEach(aluno => {
        console.log('nome:${aluno.nome}, chamada:${aluno.numeroDaChamada}')
        
    });
    
}

function buscarAlunoChamada(numeroDaChamada) {
    const alunoEncontrado =
    chamadaDeAlunos.find(aluno => aluno.numeroChamada);
  if (alunoEncontrado) {
    console.log("aluno nao encontrado")

    
  }
}




function listarAlunosAprovados(chamadaDeAlunos) {
    chamadaDeAlunos.forEach(aluno => {
        const aprovado= aluno.mateias.some(materia =>materia.nota >= 6 )
        if (!aprovado) {
            console.log('${aluno.nome} esta aprovado');
            
        }
        
    });
    
}

function listarAlunosAprovados(chamadaDeAlunos) {
    chamadaDeAlunos.forEach(aluno => {
        const reprovado= aluno.mateias.some(materia =>materia.nota <= 6 )
        if (!reprovado) {
            console.log('${aluno.nome} esta reprovado');
            
        }
        
    });
    
}



function listarPorMes(chamadaDeAlunos,mes,ano) {
    const alunosFiltrados=
    chamadaDeAlunos.filter(aluno=>{
        const[anoMatricula, mesMatricula]=
        aluno.matriculadoEm.splite('/') 
        return anoMatricula=== ano && mesMatricula === mes
    })
    



alunosFiltrados.forEach(aluno =>{
    console.log('${aluno.nome} foi matriculado em ${mes}/${ano}')
})
}
