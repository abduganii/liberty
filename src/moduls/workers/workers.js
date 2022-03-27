const {getworkers,getworkersName} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const { workers } = req.query
            if (workers == "undefined") {
                const allwokers = await getworkers()
                res.send(allwokers)
                return
            }
            const nameWorkers = await getworkersName(workers)
            res.send(nameWorkers)
        } catch (error) {
            throw new Error(500)
        }
    },
}