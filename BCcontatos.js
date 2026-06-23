const BCcontatos = {
    // 1. João (Responsável Familiar)
    "345.678.901-23": {
        cidadao: { nome: "João Oliveira da Silva", cpf: "345.678.901-23" },
        govbr: {
            email: { valor: "mjdesouza@gmail.com", tipo: "Principal" },
            telefone: { valor: "(22) 99999-8888", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "joao.silva_1980@yahoo.com.br", 
                "joao.oliveira@empresa.com.br",
                "joaozinho_oficial@hotmail.com"
            ],
            telefones: [
                "(22) 88888-9999", 
                "(11) 98765-4321", 
                "(41) 3333-2222", 
                "(21) 99999-9999"
            ],
            enderecos: [
                { logradouro: "Rua do Alto, 324 - Centro - Curitiba - PR", cep: "12345-321" },
                { logradouro: "Av. Marcos Rodrigues, 324 - Centro - Curitiba - PR", cep: "12345-321" },
                { logradouro: "Rua das Palmeiras, 150 - Água Verde - Curitiba - PR", cep: "80240-000" }
            ]
        }
    },

    // 2. Maria (Cônjuge)
    "456.789.012-34": {
        cidadao: { nome: "Maria Joana de Souza", cpf: "456.789.012-34" },
        govbr: {
            email: { valor: "maria.souza@gov.br", tipo: "Principal" },
            telefone: { valor: "(11) 97777-6666", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "mariaj.souza@hotmail.com", 
                "mjoana.trabalho@contabilidade.com.br",
                "maria_joana_souza@gmail.com",
                "contato.maria@provedor.net"
            ],
            telefones: [
                "(11) 95555-4444", 
                "(11) 3222-1111",
                "(41) 99999-5555"
            ],
            enderecos: [
                { logradouro: "Rua das Orquídeas, 10 - Centro - São Paulo - SP", cep: "01000-000" },
                { logradouro: "Rua Sete de Setembro, 500 - Batel - Curitiba - PR", cep: "80230-000" }
            ]
        }
    },

    // 3. Pedro (Filho)
    "567.890.123-45": {
        cidadao: { nome: "Pedro Oliveira da Silva", cpf: "567.890.123-45" },
        govbr: {
            email: { valor: "pedro.silva@gov.br", tipo: "Principal" },
            telefone: { valor: "(41) 98888-7777", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "pedrinho_gameplay2010@gmail.com",
                "pedro.estudante@colegio.edu.br"
            ],
            telefones: [
                "(41) 91111-2222",
                "(41) 92222-3333",
                "(41) 93333-4444"
            ],
            enderecos: [
                { logradouro: "Av. Universitária, 100 - Campus - Curitiba - PR", cep: "81530-000" }
            ] 
        }
    },

    // 4. Ana (Filha - Com alerta de Revisão)
    "678.901.234-56": {
        cidadao: { nome: "Ana Oliveira da Silva", cpf: "678.901.234-56" },
        govbr: {
            email: { valor: "ana.oliveira@gov.br", tipo: "Principal" },
            telefone: { valor: "(41) 97777-8888", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Av. Sete de Setembro, 1000 - Batel", complemento: "Casa", cidade: "Curitiba - PR", cep: "80230-000" }
        },
        bases: {
            emails: [
                "ana.silva99@yahoo.com",
                "aninha.oliveira@gmail.com",
                "ana.universidade@ufpr.br",
                "ana.estagio@empresa.com"
            ],
            telefones: [
                "(41) 94444-5555",
                "(41) 96666-7777",
                "(41) 3030-4040",
                "(41) 98888-1234"
            ],
            enderecos: [
                { logradouro: "Rua das Flores, 324 - Centro - Curitiba - PR", cep: "12345-321" },
                { logradouro: "Rua XV de Novembro, 200 - Centro - Curitiba - PR", cep: "80020-310" },
                { logradouro: "Al. Doutor Muricy, 50 - Água Verde - Curitiba - PR", cep: "80240-020" }
            ]
        }
    }
};