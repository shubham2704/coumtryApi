const countriesSelectEl = document.getElementById('countries-select');
const contentEl = document.getElementById('content');
const coountriesApiUrl = 'https://restcountries.eu/rest/v2/all';
let countriesList = [];

fetch(coountriesApiUrl)
	.then(res=>{
		res.json().then(data=>{
		countriesList = data;
		data.forEach(country=>{
			const option = document.createElement('option');
			option.value = country.alpha2Code;
			option.innerText = country.name;
			countriesSelectEl.appendChild(option);
		});
	});
});

function sc(e){
	
	const countryCode = e.value;
	const selectCountry = countriesList.find(c =>
	c.alpha2Code === countryCode 
	);
	
	
	if(selectCountry){
		const content = `
			<img src ="${selectCountry.flag}" class = "card front"/>
			<div class = "card back padding">
				<p><u>Captial : </u> ${selectCountry.capital}</p>
				<p><u>Population : </u> ${selectCountry.population}</p>
				<p><u>Domain : </u> ${selectCountry.topLevelDomain}</p>
				<p><u>Phone code : </u> +${selectCountry.callingCodes[0]}</p>
			</div>
			`;
			contentEl.innerHTML = content;
	}
}