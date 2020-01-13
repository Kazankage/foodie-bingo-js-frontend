fetch('http://localhost:3000/bingos')
.then(resp => resp.json())
.then(bingos => {
    bingos.forEach( bingo => {
        
        const { id, name, city, country, specialty, price, rating, hype } = bingo
        new Bingo (id, name, city, country, specialty, price, rating, hype)
    })
})
