const PORT = process.env.POST || 8000
const connection = {
    connectionStringloc: 'postgres://postgres:123456abdu@localhost:5432/library',
    connectionStringEl :''
    
}

module.exports = {
    PORT,
    connection
}