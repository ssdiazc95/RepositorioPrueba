-- Tabla para personas
create table persontwo(
   fullname VARCHAR(100) NOT NULL,
   birth DATE NOT NULL,
   gender VARCHAR(1) NOT NULL,
   doctype VARCHAR(2) NOT NULL,
   docnumber INTEGER NOT NULL,
   PRIMARY KEY ( docnumber )
);

-- Tabla para adopciones
create table adoption(
   id INTEGER NOT NULL AUTO_INCREMENT,
   idpersona INTEGER,
   docnumberfather INTEGER,
   docnumbermother INTEGER,
   PRIMARY KEY ( id_adoption )
);

-- Script para añadir llave foranea a tabla
alter table adoption add foreign key(docnumber_father) references person(docnumber);

-- Script para insertar registro de prueba en tabla persontwo
INSERT INTO persontwo(fullname, birth, gender, doctype, docnumber) VALUES('Santiago Díaz', CURDATE(), 'M', 'CC', 1111);