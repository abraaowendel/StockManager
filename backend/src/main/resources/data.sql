-- Exemplos para a tabela TB_CATEGORIA
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Eletrônicos');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Moda');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Acessórios');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Livros');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Beleza');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Alimentos');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Esportes');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Móveis');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Jogos');
INSERT INTO TB_CATEGORIA (nome) VALUES
    ('Automóveis');

-- Exemplos para a tabela TB_FORNECEDOR
INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('TecnoBrasil', '(11) 1234-5678', 'Rua das Indústrias', '123', 'São Paulo', 'SP', '12345-678');
INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('FashionStyle', '(22) 9876-5432', 'Avenida da Moda', '456', 'Rio de Janeiro', 'RJ', '98765-432');
INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Acessórios Elegantes', '(33) 5555-5555', 'Praça da Elegância', '789', 'Belo Horizonte', 'MG', '54321-987');
INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Livraria Cultural', '(44) 1111-1111', 'Rua dos Livros', '246', 'Porto Alegre', 'RS', '13579-864');
INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Beleza & Estilo', '(55) 9999-9999', 'Avenida da Beleza', '789', 'Salvador', 'BA', '54321-123');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Tecnologia Avançada', '(11) 5555-5555', 'Avenida da Tecnologia', '789', 'São Paulo', 'SP', '54321-123');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Fashion Trends', '(22) 1111-1111', 'Rua da Moda', '456', 'Rio de Janeiro', 'RJ', '98765-432');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Acessórios Elegantes', '(33) 2222-2222', 'Praça da Elegância', '789', 'Belo Horizonte', 'MG', '54321-987');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Livraria Cultural', '(44) 3333-3333', 'Rua dos Livros', '246', 'Porto Alegre', 'RS', '13579-864');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Beleza & Estilo', '(55) 4444-4444', 'Avenida da Beleza', '789', 'Salvador', 'BA', '54321-123');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Chocolates Delícia', '(66) 5555-5555', 'Rua dos Chocolates', '789', 'São Paulo', 'SP', '54321-123');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Café Bom Gosto', '(77) 1111-1111', 'Rua do Café', '456', 'Rio de Janeiro', 'RJ', '98765-432');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Esportes Radicais', '(88) 2222-2222', 'Praça dos Esportes', '789', 'Belo Horizonte', 'MG', '54321-987');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Móveis de Luxo', '(99) 3333-3333', 'Rua dos Móveis', '246', 'Porto Alegre', 'RS', '13579-864');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Jogos Incríveis', '(00) 4444-4444', 'Avenida dos Jogos', '789', 'Salvador', 'BA', '54321-123');

INSERT INTO TB_FORNECEDOR (nome, telefone, rua, numero, cidade, estado, cep) VALUES
    ('Automóveis de Luxo', '(11) 5555-5555', 'Rua dos Automóveis', '789', 'São Paulo', 'SP', '54321-123');

-- Exemplos para a tabela TB_PRODUTO
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Smartphone', 'Um smartphone avançado com câmera de alta resolução.', 'SPH001', 1499.99, 50, '2022-01-01', 1, 1);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Camiseta Casual', 'Camiseta de algodão confortável para uso diário.', 'CML002', 39.99, 100, '2022-02-01', 2, 2);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Bolsa de Couro', 'Bolsa elegante feita de couro legítimo.', 'BLS003', 299.99, 20, '2022-03-01', 3, 3);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Livro de Ficção', 'Uma história emocionante cheia de reviravoltas.', 'LVR004', 29.99, 80, '2022-04-01', 4, 4);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Perfume Floral', 'Perfume com notas florais suaves e delicadas.', 'PRF005', 89.99, 30, '2022-05-01', 5, 5);

-- Exemplos para a tabela TB_PRODUTO
-- Eletrônicos
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Notebook', 'Um poderoso notebook para trabalho e entretenimento.', 'NTB001', 2999.99, 30, '2022-06-01', 1, 1);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Smart TV', 'Uma televisão inteligente com alta definição.', 'TV001', 1999.99, 20, '2022-06-02', 1, 1);

-- Moda
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Vestido de Festa', 'Um elegante vestido de festa para ocasiões especiais.', 'VST002', 149.99, 50, '2022-06-03', 2, 2);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Calça Jeans', 'Uma calça jeans confortável e estilosa.', 'CLJ002', 79.99, 100, '2022-06-04', 2, 2);

-- Acessórios
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Relógio de Pulso', 'Um relógio elegante para complementar seu estilo.', 'RLG003', 199.99, 30, '2022-06-05', 3, 3);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Óculos de Sol', 'Óculos de sol modernos e com proteção UV.', 'OCS003', 99.99, 50, '2022-06-06', 3, 3);

-- Livros
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Livro de Romance', 'Um romance emocionante que vai te cativar.', 'LVR005', 24.99, 80, '2022-06-07', 4, 4);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Livro de Fantasia', 'Uma aventura fantástica em um mundo imaginário.', 'LVR006', 29.99, 70, '2022-06-08', 4, 4);

-- Beleza
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Kit de Maquiagem', 'Um conjunto completo de maquiagem para realçar sua beleza.', 'KTMAQ001', 149.99, 40, '2022-06-09', 5, 5);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Perfume Masculino', 'Perfume sofisticado para homens de personalidade.', 'PRFM001', 89.99, 60, '2022-06-10', 5, 5);

-- Alimentos
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Chocolate Amargo', 'Delicioso chocolate amargo com alto teor de cacau.', 'CHOC001', 9.99, 200, '2022-06-11', 6, 6);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Café Especial', 'Café gourmet com grãos selecionados e sabor intenso.', 'CAF001', 19.99, 150, '2022-06-12', 6, 6);

-- Esportes
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Bola de Futebol', 'Uma bola de futebol oficial para partidas emocionantes.', 'BOL001', 29.99, 40, '2022-06-13', 7, 7);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Tênis Esportivo', 'Tênis confortável e durável para práticas esportivas.', 'TNS001', 149.99, 30, '2022-06-14', 7, 7);

-- Móveis
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Sofá de Couro', 'Um sofá luxuoso feito de couro legítimo.', 'SOF001', 1999.99, 10, '2022-06-15', 8, 8);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Mesa de Jantar', 'Mesa de jantar elegante para reunir família e amigos.', 'MES001', 799.99, 20, '2022-06-16', 8, 8);

-- Jogos
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Console de Videogame', 'Um console de videogame com gráficos de última geração.', 'CON001', 1999.99, 15, '2022-06-17', 9, 9);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Jogo de Tabuleiro', 'Um jogo de tabuleiro divertido para toda a família.', 'JGO001', 49.99, 50, '2022-06-18', 9, 9);

-- Automóveis
INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Carro Sedan', 'Um sedã elegante com alto desempenho e conforto.', 'CRS001', 79999.99, 5, '2022-06-19', 10, 10);

INSERT INTO TB_PRODUTO (nome, descricao, codigo, preco, quantidade, data_de_cadastro, categoria_id, fornecedor_id) VALUES
    ('Pneu Esportivo', 'Pneu de alta performance para veículos esportivos.', 'PNES001', 199.99, 20, '2022-06-20', 10, 10);
