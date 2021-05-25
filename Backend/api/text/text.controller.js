module.exports = {
    reverse: (req, res) => {
        let result = ''
        let c = 0
        let i = ''
        let j = ''

        while (result.query.a[c] != '\0')
        {
            c = c+1;
        }

        j = c - 1;
        for (i = 0; i < count; i++)
        {
            result[i] = result.query.a[j];
            j--;
        }
        res.send(result + '')
    }
}