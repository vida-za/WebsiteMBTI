DROP TABLE IF EXISTS questions, question_parameters;

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    test_name VARCHAR(5) NOT NULL CHECK (test_name In ('mbti', 'ennea')),
    text TEXT NOT NULL
);

CREATE TABLE question_parameters (
    question_id INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    name VARCHAR(2) NOT NULL CHECK (name In ('Te', 'Ti', 'Fe', 'Fi', 'Se', 'Si', 'Ne', 'Ni', '1', '2', '3', '4', '5', '6', '7', '8', '9')),
    value FLOAT NOT NULL DEFAULT(1)
);