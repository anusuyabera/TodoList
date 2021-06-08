let itemsModel = require('../../models/items.model')

module.exports = {
    square: async (req, res) => {
        let result = ''
        if (req.query && req.query.a && !isNaN(req.query.a)){
            result = req.query.a * req.query.a
            dbResult=await itemsModel.insertMany(
                [
                    {
                        "num":result, 
                        "timeOfEntry": new Date()
                    }
                ]
            )
            if(dbResult && result)
            res.send({actualData: result, dbData: dbResult})
            else
            res.send({error:'DB ERROR'})
         }
    },
    findSquare: async (req,res)=>{
        let search=req.query.a
        let result = await itemsModel.find({num: search})
        if(result)
        res.send(result)
        else
        res.send({data:'not found'})
    },
    cube: (req, res) => {
        res.send('' + req.query.a * req.query.a * req.query.a)
    },
    // square: (req, res) => {
    //     let result = ''
    //     if (req.query && req.query.a && !isNaN(req.query.a)){
    //         result = req.query.a * req.query.a
    //         itemsModel.insertMany(
    //             [
    //                 {
    //                     num:result,
    //                     timeOfEntry: new Date()
    //                 }
    //             ]
    //         )
    //     }
    //     else
    //         result = 'Wrong Input'
    //     res.send(result + '')
    // }
    postSquare: async (req,res)=>{
        let result = ''
        if (req.body && req.body.a && !isNaN(req.body.a)){
            result = req.body.a * req.body.a
            dbResult=await numberModel.insertMany(
                [
                    {
                        "num":result, 
                        "timeOfEntry": new Date()
                    }
                ]
            )
            if(dbResult && result)
            res.send({actualData: result, dbData: dbResult})
            else
            res.send({error:'DB ERROR'})
        }
    }
    // palindrome: (req, res) => {
    //     let result = ''
    //     if (req && req.query && req.query.data) {
    //         result = (req.query.data == req.query.data.split('').reverse().join(''))
    //     } else
    //         result = false
    //     res.send('The string is ' + (result ? '' : 'not') + ' palindrome')
    // }
}