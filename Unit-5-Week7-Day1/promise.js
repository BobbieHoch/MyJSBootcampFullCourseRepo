//Promise
//Promise chaining
fetch("https://grandcircusco.github.io/demo-apis/donuts/2.json")
    .then(response => response.json())
    .then(data => {
        const donutName = document.createElement('h1');
        donutName.innerText = data.name;

        document.body.appendChild(donutName);
    });