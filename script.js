const search = document.getElementById('search');
search.addEventListener('click', function () {
    const foodName = document.getElementById('foodInput').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('foods').innerHTML = "";
            document.getElementById('foodsData').innerHTML = ' ';
            const foods = document.getElementById('foods');
            data.meals.forEach(element => {
                const food = document.createElement('div')
                food.innerHTML = `
            <img src="${element.strMealThumb}" onClick="handlefoodClick(${element.idMeal})">
            <h1 onClick="handlefoodClick(${element.idMeal})" >${element.strMeal}</h1>
            `;
                food.className = "card";
                foods.appendChild(food);
            });
        })
       
})


let handlefoodClick = foodId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
        .then(res => res.json())
        .then(data => {
            let foodData = document.getElementById('foodsData');
            document.getElementById('foodsData').innerHTML = ' ';
            document.getElementById('foodsData').style.display = 'block';
            let foodDetails = document.createElement('div')
            foodDetails.innerHTML = `
            <img src="${data.meals[0].strMealThumb}">
            <h1>${data.meals[0].strMeal}</h1>
            <br>
            <h2>Ingredients</h2>
            <br>
            <h4> ${data.meals[0].strMeasure1}</h4>
            <h4> ${data.meals[0].strMeasure2}</h4>
            <h4> ${data.meals[0].strMeasure3}</h4>
            <h4> ${data.meals[0].strMeasure4}</h4>
            <h4> ${data.meals[0].strMeasure5}</h4>
            <h4> ${data.meals[0].strMeasure6}</h4>
          
           
            `;
            foodDetails.className = "food-details";
            foodData.appendChild(foodDetails);
        })
}