class Bingo {
    constructor(id, name, city, country, specialty, price, rating, hype){
        this.id = id
        this.name = name
        this.city = city
        this.country = country
        this.specialty = specialty
        this.price = price
        this.rating = rating
        this.hype = hype
        this.render()
      }
    


      render(){
          const bingoContainer = document.getElementById('bingo-container')
          const bingoCard = document.createElement('div')
          bingoCard.classList.add('bingo-card')
            
          bingoCard.id = this.id
          bingoCard.innerHTML = `
          <h2>${this.name}</h2>
          <p>City: ${this.city} </p>
          <p>Country: ${this.country} </p>
          <p>Specialty: ${this.specialty} </p>
          <p>Price: ${this.price} </p>
          <p>Rating: ${this.rating} </p>
          <p>Hype: </p>
          <button class="delete" Bingo Card? </button>

          `
          bingoContainer.appendChild(bingoCard)
      }
}