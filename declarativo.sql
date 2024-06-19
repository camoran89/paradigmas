-- Creacion de la tabla estudiantes
CREATE TABLE estudiantes (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT
);

-- Obtencion de todos los valores que esten almacenados en estudiantes
SELECT * FROM estudiantes;

-- Seleccion de todos los estudiantes con edad igual a 30
SELECT * FROM estudiantes WHERE edad = 30;

-- Contar el numero de estudiantes clasificados por edad
SELECT edad, COUNT(*) AS cuenta FROM estudiantes GROUP BY edad;

-- Ordenar los estudiantes por nombre
SELECT * FROM estudiantes ORDER BY nombre;