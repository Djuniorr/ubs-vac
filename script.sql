-- Criando o banco de dados 'login'
CREATE DATABASE login;

-- Selecionando o banco de dados 'login'
USE login;

-- Criando a tabela 'usuarios'
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Inserindo o dado padrão na tabela 'usuarios'
INSERT INTO usuarios (email, password) 
VALUES ('user@gmail.com', '123456');

-- Criando o banco de dados 'ubs'
CREATE DATABASE ubs;

-- Selecionando o banco de dados 'ubs'
USE ubs;

-- Criando a tabela 'ubs'
CREATE TABLE ubs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(255),
    horario_atendimento VARCHAR(50),
    telefone VARCHAR(20)
);

-- Inserindo os dados na tabela 'ubs'
INSERT INTO ubs (nome, endereco, horario_atendimento, telefone) VALUES
( 'Alvorada', 'Rua Sargento Venino Vargas, 201', '7h30 às 16h30', '3901-1304'),
( 'Ana Rech', 'Rua João Andriolo, 4607', '7h30 às 16h30', '3901-1461'),
( 'Bela Vista', 'Rua Valentim Comerlatto, 983', '7h30 às 16h30', '3901-1321'),
( 'Belo Horizonte', 'Avenida dos Metalúrgicos, 704', '7h30 às 16h30', '3901-7900'),
( 'Campos da Serra', 'Rua Cardoso de Oliveira, 152', '7h30 às 16h30', '3901-8894'),
( 'Centenário', 'Rua Saturnino Pereira, 160', '7h30 às 16h30', '3901-1282'),
( 'Centro de Saúde', 'Rua Pinheiro Machado, 1258', '7h30 às 16h30', '3901-1228'),
( 'Cinquentenário', 'Avenida Júlio de Castilhos, 3633', '7h30 às 21h', '3901-2314'),
( 'Cristo Operário', 'Rua Santa Francisca Xavier Cabrini, 1375', '7h30 às 16h30', '3901-1385'),
( 'Cristo Redentor', 'Rua Silveira Martins, 1434', '7h30 às 16h30', '3901-8959'),
( 'Criúva', 'Avenida 15 de Novembro, 590', '7h30 às 12h / 13h às 16h30', '3267-8030'),
( 'Cruzeiro', 'Rua Hércules, 1917', '7h30 às 21h', '3901-1211'),
( 'Desvio Rizzo', 'Rua Serafino Zattera, 189', '7h30 às 21h', '3901-1312'),
( 'Diamantino', 'Rua Angelo Panozzo, 150', '7h30 às 16h30', '3901-1362'),
( 'Eldorado', 'Rua Armando Claudino Canalli, 264', '7h30 às 21h', '3901-1366'),
( 'Esplanada', 'Avenida Bom Pastor, 2225', '7h30 às 21h', '3901-1239'),
( 'Fátima Alta', 'Rua Izabel Pezzi, 59', '7h30 às 16h30', '3901-1280'),
( 'Fátima Baixa', 'Rua Dr. Mário Lopes, 860', '7h30 às 16h30', '3901-2310'),
( 'Fazenda Souza', 'Rua Rosa Sgarbi, 5006', '7h30 às 12h / 13h às 16h30', '3901-1373'),
( 'Forqueta', 'Rua Alcides Lazzari, 530', '7h30 às 16h30', '3901-1191'),
( 'Galópolis', 'Rua Edviges Galló, 47', '7h30 às 16h30', '3901-1464'),
( 'Madureira', 'Rua Virgílio Ramos, 276', '7h30 às 16h30', '3901-1230'),
( 'Mariani', 'Rua Vergínia Botini Reuse, 299', '7h30 às 16h30', '3901-1293'),
( 'Parque Oásis', 'Rua Bortolo Zanrosso, 433', '7h30 às 16h30', '3901-1425'),
( 'Pioneiro', 'Rua Frederico Bergman, 3170', '7h30 às 16h30', '3901-1283'),
( 'Planalto', 'Rua Arthur Rodolfo Rossarolla, 508', '7h30 às 16h30', '3901-2526'),
( 'Planato Rio Branco', 'Rua Cristiano Ramos de Oliveira, 285', '7h30 às 16h30', '3901-1231'),
( 'Reolon', 'Rua Assis Rodrigues de Lima, 210', '7h30 às 21h', '3901-1202'),
( 'Rio Branco', 'Avenida Rio Branco, 1619', '7h30 às 16h30', '3901-8028'),
( 'Sagrada Família', 'Rua Candido João Calcagnotto, 553', '7h30 às 16h30', '3901-1364'),
( 'Salgado Filho', 'Rua Marcelo Felippi, 268', '7h30 às 16h30', '3901-1216'),
( 'Santa Fé', 'Avenida Santa Fé, 349', '7h30 às 16h30', '3901-1281'),
( 'Santa Lúcia Cohab', 'Rua Pe. Aquilino Francesquet, 1303', '7h30 às 16h30', '3901-1198'),
( 'Santa Lúcia do Piaí', 'Rua Rosa Franciozi Giordani, 560', '7h30 às 12h / 13h às 16h30', '3266-1389'),
( 'São Caetano', 'Rua Pixinguinha, 2466', '7h30 às 16h30', '3901-2509'),
( 'São Ciro', 'Rua Joaquim Oss, 83', '7h30 às 16h30', '3901-1361'),
( 'São José', 'Rua Dom Pedro II, 350', '7h30 às 16h30', '3901-1279'),
( 'São Leopoldo', 'Rua Sapucaia, 101', '7h30 às 16h30', '3901-1472'),
( 'São Vicente', 'Rua Assis Brasil, 1086', '7h30 às 16h30', '3901-1322'),
( 'São Victor Cohab', 'Rua Dirceu Corsetti, 230', '7h30 às 16h30', '3901-2300'),
( 'Século XX', 'Rua Nelson Michelon, 111', '7h30 às 16h30', '3901-1327'),
( 'Serrano', 'Rua Alcides Ramos, 1307', '7h30 às 16h30', '3901-7902'),
( 'Tijuca', 'Rua Nilo Benfica da Rocha, 633', '7h30 às 16h30', '3901-1289'),
( 'Vila Cristina', 'Rua da Cidadania, 426', '7h30 às 12h / 13h às 16h30', '3287-1108'),
( 'Vila Ipê', 'Rua Antônio Andrighetti, 2290', '7h30 às 21h', '3901-1455'),
( 'Vila Lobos', 'Rua da Felicidade, 401', '7h30 às 16h30', '3901-2304'),
( 'Vila Oliva', 'Avenida Gavioli, 5575', '7h30 às 12h / 13h às 16h30', '3901-1188'),
( 'Vila Seca', 'Rua Ilário Balbinotti, 132', '7h30 às 12h / 13h às 16h30', '3267-6032');

-- Criando a tabela 'vacinas'
CREATE TABLE vacinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

-- Inserindo os dados na tabela 'vacinas'
INSERT INTO vacinas (nome) VALUES
('BCG'),
('Hepatite B'),
('Penta'),
('Pólio inativada'),
('Pólio oral'),
('Rotavírus'),
('Pneumo 10'),
('Meningo C'),
('Febre amarela'),
('Tríplice viral'),
('Tetra viral'),
('DTP'),
('Hepatite A'),
('Varicela'),
('Difteria e tétano adulto (dT)'),
('Meningocócica ACWY'),
('HPV quadrivalente'),
('dTpa'),
('Influenza'),
('Pneumocócica 23-valente');

-- Criando a tabela 'ubs_vacinas' para relacionar 'ubs' e 'vacinas'
CREATE TABLE ubs_vacinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ubs_id INT,
    vacina_id INT,
    FOREIGN KEY (ubs_id) REFERENCES ubs(id),
    FOREIGN KEY (vacina_id) REFERENCES vacinas(id)
);

-- Inserindo os dados na tabela 'ubs_vacinas'
INSERT INTO ubs_vacinas (ubs_id, vacina_id) VALUES
(1, 1),
(1, 2),
(1, 5),
(2, 3),
(2, 4),
(3, 6),
(3, 7),
(4, 8),
(4, 9),
(5, 10),
(5, 11),
(6, 12),
(6, 13),
(7, 14),
(7, 15),
(8, 16),
(8, 17),
(9, 18),
(9, 19),
(10, 1),
(10, 5),
(11, 2),
(11, 7),
(12, 4),
(12, 11),
(13, 6),
(13, 12),
(14, 14),
(14, 16),
(15, 17),
(15, 18),
(16, 1),
(16, 19),
(17, 2),
(17, 6),
(18, 4),
(18, 7),
(19, 11),
(19, 13),
(20, 12),
(20, 16),
(21, 5),
(21, 14),
(22, 6),
(22, 15),
(23, 7),
(23, 16),
(24, 18),
(24, 19),
(25, 1),
(25, 5),
(26, 8),
(26, 17),
(27, 12),
(27, 19),
(28, 3),
(28, 10),
(29, 4),
(29, 14),
(30, 16),
(30, 18),
(31, 5),
(31, 11),
(32, 6),
(32, 13),
(33, 1),
(33, 14),
(34, 15),
(34, 19),
(35, 4),
(35, 6),
(36, 5),
(36, 12),
(37, 7),
(37, 18),
(38, 9),
(38, 16),
(39, 1),
(39, 12),
(40, 2),
(40, 14),
(41, 13),
(41, 19),
(42, 6),
(42, 16),
(43, 7),
(43, 17),
(44, 11),
(44, 19),
(45, 1),
(45, 12),
(46, 14),
(46, 16),
(47, 5),
(47, 18),
(48, 3);
