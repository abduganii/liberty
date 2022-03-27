CREATE DATABASE library;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE works(
    work_id uuid default uuid_generate_v4() PRIMARY KEY,
    work_type varchar(40) NOT NULL
);

CREATE TABLE workers(
    worker_id uuid default uuid_generate_v4() PRIMARY KEY,
    worker_name varchar(30) NOT NULL,
    worker_age bigint NOT null,
    worker_monthly_money varchar(30) NOT NULL,
    worker_join_years varchar(30) NOT NULL,
    work_id uuid REFERENCES works(work_id) not null
);

select 
    wk.worker_name,
    wk.worker_age,
    wk.worker_monthly_money,
    wk.worker_join_years,
    w.work_type
from 
    works w 
inner join 
    workers wk 
using(work_id)
WHERE
    wk.worker_name ILIKE'Al%';


select 
    wk.worker_name
from 
    works w 
inner join 
    workers wk 
using(work_id)
WHERE
    wk.worker_name ILIKE'A%';