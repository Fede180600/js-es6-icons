const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Prelevo il items-container
// const itemsContainer = document.getElementById('items-container');
// Imposto ciclo forEach per scorrere tutti gli Objects della array
// icons.forEach((element) => {
//     const newItem = document.createElement('div');
//     newItem.classList.add('item');
//     itemsContainer.append(newItem);
//     newItem.innerHTML = `
        
//         <div class="item-icon">
//             <span><i class="${element.family} ${element.prefix}${element.name}"></i></span>
//         </div>
//         <div class="item-name">
//             <p>${element.name}</p>
//         </div>
        
//     `
// })

//Milestone 2
//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//Prelevo il items-container
const itemsContainer = document.getElementById('items-container');
//Imposto ciclo forEach per scorrere tutti gli Objects della array
icons.forEach((element) => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    itemsContainer.append(newItem);
    newItem.innerHTML = `
        
        <div class="item-icon">
            <span><i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i></span>
        </div>
        <div class="item-name">
            <p>${element.name}</p>
        </div>
        
    `
})
