const { fetch, fetchAll } = require('../../lib/postgres')

const All_worker = `select 
wk.worker_name
from 
works w 
inner join 
workers wk 
using(work_id)
`

const Workers_name = `select 
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
    wk.worker_name ILIKE $1`

const getworkers = () => fetchAll(All_worker)
const getworkersName = (name) => fetchAll(Workers_name,`${name}%`)

module.exports = {
    getworkers,
    getworkersName
}