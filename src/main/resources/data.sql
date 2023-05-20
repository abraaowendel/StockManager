
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
