
const api = "https://rickandmortyapi.com/api/character/"
const container = document.querySelector(".container")


async function showInformation() {
    try {

        const response = await fetch(api)
        const data = await response.json()
        const container = document.querySelector(".container")

        data.results.forEach(character => {
            const card = document.createElement("div")
            //card.classList.add("card")

            const id = document.createElement("h3")
            const name = document.createElement("h3")
            const status = document.createElement("h3")
            const species = document.createElement("h3")
            
            
            id.textContent = `Id: ${character.id}`
            name.textContent = `Nome: ${character.name}`    
            status.textContent = `Status: ${character.status}`
            species.textContent = `Especie: ${character.species}`
            const image = document.createElement("img")
            image.src = character.image
            
            card.appendChild(image)
            card.appendChild(id)
            card.appendChild(name)
            card.appendChild(status)
            card.appendChild(species)
            
            container.appendChild(card)
        })

    } catch (e) {
        alert("error")
    }
}

showInformation()









