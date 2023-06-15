package com.aw.stockmanager.configuration;

import com.aw.stockmanager.model.entities.*;
import com.aw.stockmanager.model.enums.RoleName;
import com.aw.stockmanager.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
@Profile("test")
public class TestConfig implements CommandLineRunner {
    final RoleRepository roleRepository;
    final UserRepository userRepository;
    final CategoriaRepository categoriaRepository;
    final FornecedorRepository fornecedorRepository;
    final ProdutoRepository produtoRepository;

    public TestConfig(RoleRepository roleRepository, UserRepository userRepository, CategoriaRepository categoriaRepository, FornecedorRepository fornecedorRepository, ProdutoRepository produtoRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.categoriaRepository = categoriaRepository;
        this.fornecedorRepository = fornecedorRepository;
        this.produtoRepository = produtoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Role role = new Role(null, RoleName.ROLE_ADMIN);
        User user = new User(null, "test@test.com", new BCryptPasswordEncoder().encode("test"), role);
        roleRepository.save(role);
        userRepository.save(user);

        // Categorias
        Categoria categoriaTecnologia = new Categoria(null, "Eletrônicos");
        Categoria categoriaModa = new Categoria(null, "Moda");
        Categoria categoriaAcessorios = new Categoria(null, "Acessórios");
        Categoria categoriaLivros = new Categoria(null, "Livros");
        Categoria categoriaBeleza = new Categoria(null, "Beleza");
        Categoria categoriaAlimentos = new Categoria(null, "Alimentos");
        Categoria categoriaEsportes = new Categoria(null, "Esportes");
        Categoria categoriaMoveis = new Categoria(null, "Móveis");
        Categoria categoriaJogos = new Categoria(null, "Jogos");
        Categoria categoriaAutomoveis = new Categoria(null, "Automóveis");

        categoriaRepository.saveAll(List.of(
                categoriaTecnologia, categoriaModa, categoriaAcessorios, categoriaLivros, categoriaBeleza,
                categoriaAlimentos, categoriaEsportes, categoriaMoveis, categoriaJogos, categoriaAutomoveis
        ));

        // Fornecedores
        Fornecedor fornecedorTecnoBrasil = new Fornecedor(null, "TecnoBrasil", "(11) 1234-5678",
                new Endereco("Rua das Indústrias", "123", "São Paulo", "SP", "12345-678"));
        Fornecedor fornecedorFashionStyle = new Fornecedor(null, "FashionStyle", "(22) 9876-5432",
                new Endereco("Avenida da Moda", "456", "Rio de Janeiro", "RJ", "98765-432"));
        Fornecedor fornecedorAcessoriosElegantes = new Fornecedor(null, "Acessórios Elegantes", "(33) 5555-5555",
                new Endereco("Praça da Elegância", "789", "Belo Horizonte", "MG", "54321-987"));
        Fornecedor fornecedorLivrariaCultural = new Fornecedor(null, "Livraria Cultural", "(44) 1111-1111",
                new Endereco("Rua dos Livros", "246", "Porto Alegre", "RS", "13579-864"));
        Fornecedor fornecedorBelezaEstilo = new Fornecedor(null, "Beleza & Estilo", "(55) 9999-9999",
                new Endereco("Avenida da Beleza", "789", "Salvador", "BA", "54321-123"));
        Fornecedor fornecedorDeliciasGourmet = new Fornecedor(null, "Delícias Gourmet", "(66) 2222-2222",
                new Endereco("Rua das Delícias", "789", "São Paulo", "SP", "54321-123"));
        Fornecedor fornecedorEsportesRad = new Fornecedor(null, "Esportes Radicais", "(77) 3333-3333",
                new Endereco("Avenida dos Esportes", "789", "Salvador", "BA", "54321-123"));
        Fornecedor fornecedorMoveisLuxo = new Fornecedor(null, "Móveis de Luxo", "(88) 4444-4444",
                new Endereco("Rua dos Móveis", "789", "São Paulo", "SP", "54321-123"));
        Fornecedor fornecedorJogosInc = new Fornecedor(null, "Jogos Incríveis", "(99) 5555-5555",
                new Endereco("Avenida dos Jogos", "789", "Belo Horizonte", "MG", "54321-987"));
        Fornecedor fornecedorAutoLuxo = new Fornecedor(null, "Automóveis de Luxo", "(00) 6666-6666",
                new Endereco("Rua dos Automóveis", "789", "São Paulo", "SP", "54321-123"));

        fornecedorRepository.saveAll(List.of(
                fornecedorTecnoBrasil, fornecedorFashionStyle, fornecedorAcessoriosElegantes, fornecedorLivrariaCultural,
                fornecedorBelezaEstilo, fornecedorDeliciasGourmet, fornecedorEsportesRad, fornecedorMoveisLuxo,
                fornecedorJogosInc, fornecedorAutoLuxo
        ));
        
        List<Produto> produtos = new ArrayList<>();

        // Tecnologia
        produtos.add(new Produto(null, "Smartphone", "Um smartphone avançado com câmera de alta resolução.",
                "ELE001", 1499.99, LocalDate.parse("2022-01-01"), categoriaTecnologia,
                fornecedorTecnoBrasil));
        produtos.add(new Produto(null, "Notebook", "Um poderoso notebook para trabalho e entretenimento.",
                "ELE002", 2999.99,  LocalDate.parse("2022-06-01"), categoriaTecnologia,
                fornecedorTecnoBrasil));
        produtos.add(new Produto(null, "Smart TV", "Uma televisã o inteligente com alta definição.",
                "ELE003", 1999.99, LocalDate.parse("2022-06-02"), categoriaTecnologia,
                fornecedorTecnoBrasil));

        // Moda
        produtos.add(new Produto(null, "Camiseta Casual", "Camiseta de algodão confortável para uso diário.",
                "MOD001", 39.99,  LocalDate.parse("2022-02-01"), categoriaModa,
                fornecedorFashionStyle));
        produtos.add(new Produto(null, "Vestido de Festa", "Um elegante vestido de festa para ocasiões especiais.",
                "MOD002", 149.99,  LocalDate.parse("2022-06-03"), categoriaModa,
                fornecedorFashionStyle));
        produtos.add(new Produto(null, "Calça Jeans", "Uma calça jeans confortável e estilosa.",
                "MOD003", 79.99,  LocalDate.parse("2022-06-04"), categoriaModa,
                fornecedorFashionStyle));

        // Acessórios
        produtos.add(new Produto(null, "Bolsa de Couro", "Bolsa elegante feita de couro legítimo.",
                "ACE001", 299.99, LocalDate.parse("2022-03-01"), categoriaAcessorios,
                fornecedorAcessoriosElegantes));
        produtos.add(new Produto(null, "Relógio de Pulso", "Um relógio elegante para complementar seu estilo.",
                "ACE002", 199.99,  LocalDate.parse("2022-06-05"), categoriaAcessorios,
                fornecedorAcessoriosElegantes));
        produtos.add(new Produto(null, "Óculos de Sol", "Óculos de sol modernos e com proteção UV.",
                "ACE003", 99.99,  LocalDate.parse("2022-06-06"), categoriaAcessorios,
                fornecedorAcessoriosElegantes));

        // Livros
        produtos.add(new Produto(null, "Livro de Ficção", "Uma história emocionante cheia de reviravoltas.",
                "LVR001", 29.99,  LocalDate.parse("2022-04-01"), categoriaLivros,
                fornecedorLivrariaCultural));
        produtos.add(new Produto(null, "Livro de Romance", "Um romance emocionante que vai te cativar.",
                "LVR002", 24.99,  LocalDate.parse("2022-06-07"), categoriaLivros,
                fornecedorLivrariaCultural));
        produtos.add(new Produto(null, "Livro de Fantasia", "Uma aventura fantástica em um mundo imaginário.",
                "LVR003", 29.99,  LocalDate.parse("2022-06-08"), categoriaLivros,
                fornecedorLivrariaCultural));

        // Beleza
        produtos.add(new Produto(null, "Perfume Floral", "Perfume com notas florais suaves e delicadas.",
                "BEL001", 89.99,  LocalDate.parse("2022-05-01"), categoriaBeleza,
                fornecedorBelezaEstilo));
        produtos.add(new Produto(null, "Kit de Maquiagem", "Um conjunto completo de maquiagem para realçar sua beleza.",
                "BEL002", 149.99,  LocalDate.parse("2022-06-09"), categoriaBeleza,
                fornecedorBelezaEstilo));
        produtos.add(new Produto(null, "Perfume Masculino", "Perfume sofisticado para homens de personalidade.",
                "BEL003", 89.99,  LocalDate.parse("2022-06-10"), categoriaBeleza,
                fornecedorBelezaEstilo));

        // Alimentos
        produtos.add(new Produto(null, "Chocolate Amargo", "Delicioso chocolate amargo com alto teor de cacau.",
                "ALI001", 9.99,  LocalDate.parse("2022-06-11"), categoriaAlimentos,
                fornecedorDeliciasGourmet));
        produtos.add(new Produto(null, "Café Especial", "Café gourmet com grãos selecionados e sabor intenso.",
                "ALI002", 19.99,  LocalDate.parse("2022-06-12"), categoriaAlimentos,
                fornecedorDeliciasGourmet));
        produtos.add(new Produto(null, "Vinho Tinto", "Um vinho tinto encorpado e de qualidade.",
                "ALI003", 49.99,  LocalDate.parse("2022-06-13"), categoriaAlimentos,
                fornecedorDeliciasGourmet));

        // Esportes
        produtos.add(new Produto(null, "Bola de Futebol", "Uma bola de futebol de alta qualidade.",
                "ESP001", 29.99,  LocalDate.parse("2022-06-14"), categoriaEsportes,
                fornecedorEsportesRad));
        produtos.add(new Produto(null, "Raquete de Tênis", "Raquete profissional para jogadores exigentes.",
                "ESP002", 149.99,  LocalDate.parse("2022-06-15"), categoriaEsportes,
                fornecedorEsportesRad));
        produtos.add(new Produto(null, "Corda de Pular", "Corda de pular ajustável para exercícios aeróbicos.",
                "ESP003", 9.99,  LocalDate.parse("2022-06-16"), categoriaEsportes,
                fornecedorEsportesRad));

        // Móveis
        produtos.add(new Produto(null, "Sofá de Couro", "Sofá de couro luxuoso e confortável para sua sala.",
                "MOV001", 1999.99,  LocalDate.parse("2022-06-17"), categoriaMoveis,
                fornecedorMoveisLuxo));
        produtos.add(new Produto(null, "Cama King Size", "Uma cama espaçosa e confortável para noites de sono tranquilas.",
                "MOV002", 2999.99,  LocalDate.parse("2022-06-18"), categoriaMoveis,
                fornecedorMoveisLuxo));
        produtos.add(new Produto(null, "Mesa de Jantar", "Mesa de jantar elegante para receber seus convidados.",
                "MOV003", 1499.99,  LocalDate.parse("2022-06-19"), categoriaMoveis,
                fornecedorMoveisLuxo));

        // Jogos
        produtos.add(new Produto(null, "Console de Videogame", "Um console de última geração para jogar os melhores jogos.",
                "JOG001", 1999.99, LocalDate.parse("2022-06-20"), categoriaJogos,
                fornecedorJogosInc));
        produtos.add(new Produto(null, "Jogo de Tabuleiro", "Um jogo de tabuleiro divertido para toda a família.",
                "JOG002", 49.99,  LocalDate.parse("2022-06-21"), categoriaJogos,
                fornecedorJogosInc));
        produtos.add(new Produto(null, "Controle de Videogame", "Controle de videogame com tecnologia sem fio.",
                "JOG003", 99.99,  LocalDate.parse("2022-06-22"), categoriaJogos,
                fornecedorJogosInc));

        // Automóveis
        produtos.add(new Produto(null, "Ferrari", "Um carro esportivo potente e elegante.",
                "AUT001", 3800000.0,  LocalDate.parse("2022-06-23"), categoriaAutomoveis,
                fornecedorAutoLuxo));
        produtos.add(new Produto(null, "Motocicleta", "Uma motocicleta rápida e moderna para aventuras na estrada.",
                "AUT002", 49999.99,  LocalDate.parse("2022-06-24"), categoriaAutomoveis,
                fornecedorAutoLuxo));
        produtos.add(new Produto(null, "Caminhão", "Um caminhão robusto e espaçoso para transporte de carga.",
                "AUT003", 99999.99,  LocalDate.parse("2022-06-25"), categoriaAutomoveis,
                fornecedorAutoLuxo));

        produtoRepository.saveAll(produtos);
    }

}
