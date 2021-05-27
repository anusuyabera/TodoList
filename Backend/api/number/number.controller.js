module.exports = {
    square: (req, res) => {
        let result = ''
        if (req.query && req.query.a && !isNaN(req.query.a))
            result = req.query.a * req.query.a
        else
            result = 'Wrong Input'
        res.send(result + '')
    },
    cube: (req, res) => {
        res.send('' + req.query.a * req.query.a * req.query.a)
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