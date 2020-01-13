class Bingo {
    constructor(id, name, city, country, specialty, price, rating, hype, image){
        this.id = id
       
        this.name = name
        this.city = city
        this.country = country
        this.specialty = specialty
        this.price = price
        this.rating = rating
        this.hype = hype
        this.image = image
        this.render()
      }
    
      deleteBingo(e) {
        const id = e.target.dataset.id
        fetch(`http://localhost:3000/bingos/${id}`, {
          method: 'DELETE'
        })
          .then(() => {
            document.getElementById('bingo-container')
              .removeChild(document.getElementById(id))
          })
      }
    
      render(){
          const bingoContainer = document.getElementById('bingo-container')
          const bingoCard = document.createElement('div')
          const checked = this.hype ? 'checked' : ''
          bingoCard.classList.add('bingo-card')
            
          bingoCard.id = this.id
          bingoCard.innerHTML = `<br>
          <img src="${this.image}" height="200px" width="170px">
          <h2>${this.name}</h2>
          <p>City: ${this.city} </p>
          <p>Country: ${this.country} </p>
          <p>Specialty: ${this.specialty} </p>
          <p>Price (1 being cheap, 10 being boujie):  ${this.price} </p>
          <p>Rating: ${this.rating} </p>
          <p>Hype:<input type="checkbox" ${checked} /> </p>
          <button class="delete" data-id="${this.id}">Delete</button>

          `
          bingoContainer.appendChild(bingoCard)
          bingoCard.addEventListener('click', e => {
            if (e.target.className.includes('delete')) this.deleteBingo(e)

          })
      }
    }