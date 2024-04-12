// fetch("https://dev.io-academy.uk/resources/bond.php").then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
//     d = data.data
//     document.querySelector('.output').innerHTML = d.forEach(item => {
//         return `<li> ${item.name}</li>`
//     })
    
// })

fetch("https://dev.io-academy.uk/resources/bond.php").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    d = data.data
    document.querySelector('.output').innerHTML = for(i=0; i < d.length; i++){
        
    }
})