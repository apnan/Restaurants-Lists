const container = document.querySelector(".container");

const fetchData = () => {
    fetch('https://example-data.draftbit.com/restaurants')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            container.innerHTML = data.map(
                (restaurant) =>
                `<div class="card-restaurant">
                  <div class="card-restaurant-details">
                    <h2>${restaurant.name}</h2>
                </div>
                <img src=${restaurant.image} alt="#"/>
                <div class="card-restaurant-details">
                <div class="phone">
                <p><span><i class="fa-solid fa-phone"></i></span>Phone:${restaurant.phone}</p>
                </div>
                <div class="city">
                <p><span><i class="fa-solid fa-city"></i></span>City:${restaurant.city}</p>
                </div>
                <div class="address">
                <p><span><i class="fa-solid fa-house"></i></span>Address:${restaurant.address}</p>
                </div>
                <div class="rating">
                <p><span><i class="fa-solid fa-star-half-stroke"></i></span>Rating:${restaurant.rating}</p>
                </div>
                <div class="website">
                <a href=${restaurant.website} target=_blank>Visit website</a>
                </div>
                </div>
                </div>`
            );
        })
        .catch((err) => console.log(err));
};
fetchData();