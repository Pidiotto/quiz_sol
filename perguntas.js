const questions = [
    {
        question: "1. A cor das lixeiras de reciclagem é verde.",
        answer: true,
        explanation: {
            correct: "Correto! As lixeiras de reciclagem geralmente são verdes.",
            incorrect: "Incorreto. As lixeiras de reciclagem são geralmente verdes."
        }
    },
    {
        question: "2. É importante manter o local de trabalho limpo e organizado.",
        answer: true,
        explanation: {
            correct: "Correto! Manter o local de trabalho limpo e organizado é fundamental para a segurança e eficiência.",
            incorrect: "Incorreto. Manter o local de trabalho limpo e organizado é importante para a segurança e eficiência."
        }
    },
    {
        question: "3. O EPI (Equipamento de Proteção Individual) é opcional no trabalho.",
        answer: false,
        explanation: {
            correct: "Correto! O EPI é obrigatório para a segurança dos trabalhadores.",
            incorrect: "Incorreto. O EPI é obrigatório para a segurança dos trabalhadores."
        }
    },
    {
        question: "4. As saídas de emergência devem ser mantidas desobstruídas.",
        answer: true,
        explanation: {
            correct: "Correto! É fundamental manter as saídas de emergência desobstruídas para garantir a segurança.",
            incorrect: "Incorreto. As saídas de emergência devem ser mantidas desobstruídas para garantir a segurança."
        }
    },
    {
        question: "5. Incêndios podem ser combatidos com água em todos os casos.",
        answer: false,
        explanation: {
            correct: "Correto! Nem todos os incêndios podem ser combatidos com água; o tipo de extintor correto deve ser usado.",
            incorrect: "Incorreto. Nem todos os incêndios podem ser combatidos com água; o tipo de extintor correto deve ser usado."
        }
    },
    {
        question: "6. O uso de capacete de segurança é obrigatório em locais de construção.",
        answer: true,
        explanation: {
            correct: "Correto! O uso de capacete de segurança é obrigatório em locais de construção para prevenir lesões na cabeça.",
            incorrect: "Incorreto. O uso de capacete de segurança é obrigatório em locais de construção para prevenir lesões na cabeça."
        }
    },
    {
        question: "7. Produtos químicos devem ser armazenados em recipientes adequados e identificados.",
        answer: true,
        explanation: {
            correct: "Correto! Produtos químicos devem ser armazenados de forma segura e identificados corretamente para evitar acidentes.",
            incorrect: "Incorreto. Produtos químicos devem ser armazenados de forma segura e identificados corretamente para evitar acidentes."
        }
    },
    {
        question: "8. É seguro sobrecarregar uma tomada elétrica.",
        answer: false,
        explanation: {
            correct: "Correto! Sobrecarregar uma tomada elétrica pode causar sobreaquecimento e incêndio.",
            incorrect: "Incorreto. Sobrecarregar uma tomada elétrica pode causar sobreaquecimento e incêndio."
        }
    },
    {
        question: "9. O descarte de resíduos perigosos deve seguir regulamentações específicas.",
        answer: true,
        explanation: {
            correct: "Correto! O descarte de resíduos perigosos deve seguir regulamentações rigorosas para proteger o meio ambiente e a saúde humana.",
            incorrect: "Incorreto. O descarte de resíduos perigosos deve seguir regulamentações rigorosas para proteger o meio ambiente e a saúde humana."
        }
    },
    {
        question: "10. Uma saída de emergência pode ser usada como área de armazenamento.",
        answer: false,
        explanation: {
            correct: "Correto! Saídas de emergência não devem ser usadas para armazenamento, pois isso pode impedir a evacuação.",
            incorrect: "Incorreto. Saídas de emergência não devem ser usadas para armazenamento, pois isso pode impedir a evacuação."
        }
    },
    {
        question: "11. Equipamentos de segurança, como extintores, devem ser verificados regularmente.",
        answer: true,
        explanation: {
            correct: "Correto! Equipamentos de segurança devem ser verificados regularmente para garantir que funcionem quando necessário.",
            incorrect: "Incorreto. Equipamentos de segurança devem ser verificados regularmente para garantir que funcionem quando necessário."
        }
    },
    {
        question: "12. A cor das lixeiras de reciclagem é azul.",
        answer: true,
        explanation: {
            correct: "Correto! As lixeiras de reciclagem geralmente são azuis.",
            incorrect: "Incorreto. As lixeiras de reciclagem geralmente são azuis."
        }
    },
    {
        question: "13. A sinalização de segurança deve ser ignorada em caso de pressa.",
        answer: false,
        explanation: {
            correct: "Correto! A sinalização de segurança deve ser seguida sempre, para evitar acidentes.",
            incorrect: "Incorreto. A sinalização de segurança deve ser seguida sempre, para evitar acidentes."
        }
    },
    {
        question: "14. Itens pesados devem ser armazenados em prateleiras instáveis.",
        answer: false,
        explanation: {
            correct: "Correto! Itens pesados devem ser armazenados em prateleiras estáveis e seguras.",
            incorrect: "Incorreto. Itens pesados devem ser armazenados em prateleiras estáveis e seguras."
        }
    },
    {
        question: "15. O uso de EPI é opcional durante a manipulação de produtos químicos.",
        answer: false,
        explanation: {
            correct: "Correto! O uso de EPI é essencial durante a manipulação de produtos químicos para evitar exposições perigosas.",
            incorrect: "Incorreto. O uso de EPI é essencial durante a manipulação de produtos químicos para evitar exposições perigosas."
        }
    },
    {
        question: "16. Equipamentos elétricos devem ser inspecionados regularmente quanto à segurança.",
        answer: true,
        explanation: {
            correct: "Correto! Equipamentos elétricos devem ser inspecionados regularmente para garantir que estejam em boas condições.",
            incorrect: "Incorreto. Equipamentos elétricos devem ser inspecionados regularmente para garantir que estejam em boas condições."
        }
    },
    {
        question: "17. Produtos químicos podem ser armazenados perto de alimentos.",
        answer: false,
        explanation: {
            correct: "Correto! Produtos químicos não devem ser armazenados perto de alimentos para evitar contaminações.",
            incorrect: "Incorreto. Produtos químicos não devem ser armazenados perto de alimentos para evitar contaminações."
        }
    },
    {
        question: "18. A sinalização de segurança é apenas uma sugestão.",
        answer: false,
        explanation: {
            correct: "Correto! A sinalização de segurança deve ser seguida e não é apenas uma sugestão.",
            incorrect: "Incorreto. A sinalização de segurança deve ser seguida e não é apenas uma sugestão."
        }
    },
    {
        question: "19. As caixas de distribuição elétrica não devem ser bloqueadas.",
        answer: true,
        explanation: {
            correct: "Correto! As caixas de distribuição elétrica devem permanecer desobstruídas para acesso em caso de emergência.",
            incorrect: "Incorreto. As caixas de distribuição elétrica devem permanecer desobstruídas para acesso em caso de emergência."
        }
    },
    {
        question: "20. A exposição prolongada ao ruído não é prejudicial à audição.",
        answer: false,
        explanation: {
            correct: "Correto! A exposição prolongada ao ruído pode ser prejudicial à audição; a proteção auditiva é importante.",
            incorrect: "Incorreto. A exposição prolongada ao ruído pode ser prejudicial à audição; a proteção auditiva é importante."
        }
    },
    {
        question: "21. A sigla 'SOL' significa 'Segurança Organização e Logística'",
        answer: false,
        explanation: {
            correct: "Correto! O significado de SOL é Segurança Organização e Limpeza.",
            incorrect: "Incorreto. O significado de SOL é Segurança Organização e Limpeza."
        }
    },
    // Adicione mais perguntas e explicações conforme necessário
];

export default questions;
