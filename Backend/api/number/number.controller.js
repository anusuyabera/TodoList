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
    },
    pali: (req, res) =>{
        let rev = 0
        let r = ''
        // n = req.query.a

        while (req.query.a != 0) {
            r = req.query.a % 10;
            rev = rev * 10 + r;
            req.query.a /= 10;
        }
        if (req.query.a == rev)
            res.send('True')
        else
            res.send('False')
    }
}