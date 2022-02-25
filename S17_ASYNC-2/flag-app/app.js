//* =======================================================================
//*                          FLAG-APP
//* =======================================================================

const fetchCountry = async function (name) {
  let url = `https://restcountries.com/v3.1/name/${name}`;
  const res = await fetch(url);
  if (!res.ok) {
    //! error handling
    renderError(`Something went wrong! :: ${res.status}`);
    throw new Error();
  }
  const data = await res.json();
  renderCountry(data[0]);
};

const renderCountry = (country) => {
  console.log(country);
  const {
    capital,
    name: { common: countryName },
    currencies,
    region,
    languages,
    flags: { svg: countryFlag },
  } = country;

  const countries = document.querySelector(".countries");
  countries.innerHTML += ` 
   <div class="card text-start w-50 shadow-lg bg-light">
      <img src=${countryFlag} class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">${countryName}</h5>
         <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${capital}</li>
         <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
           languages
         )} </li>
         <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${
           Object.values(currencies)[0].name
         }</li>
      </ul>
   </div> `;
};

const renderError = (error) => {
  const countries = document.querySelector(".countries");
  countries.innerHTML = `<h2 class='text-danger'>${error}</h2>`;
};

fetchCountry("turkey");
fetchCountry("usa");
fetchCountry("france");
fetchCountry("finland");

//! HOMEWORK
//* 1- Update fetchCountry() function which can run both country name and country code
//* 2- update the code that user can select country name (or country code) from an input or select element.
