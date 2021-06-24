const cards = [{
        title: "basic",
        price: [19.99, 199.99],
        features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]
    },
    {
        title: "professional",
        price: [24.99, 249.99],
        features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]
    },
    {
        title: "master",
        price: [39.99, 399.99],
        features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]
    }
];

for (let i = 0; i < cards.length; i++) {
    let output = `
    <section class="card ${cards[i].title}">
    <h2 class="title">${cards[i].title}</h2>
    <div class="price">
      <span>&dollar;</span>
      <span class="costs">${cards[i].price[0]}</span>
    </div>
    <div class="feature">
      <ul>
        <li>${cards[i].features[0]}</li>
        <li>${cards[i].features[1]}</li>
        <li>${cards[i].features[2]}</li>
      </ul>
    </div>
    <button>Learn More</button>
  </section>`

    $("main").append(output);
};

$(document).ready(function () {
    $("#choice").bind("click", switcher);

    function switcher() {
        let checked = this.checked;
        let costs = [...$(".costs")];

        for (let c = 0; c < costs.length; c++) {
            (!checked) ?
                costs[c].innerHTML = cards[c].price[1] :
                    costs[c].innerHTML = cards[c].price[0];
        }
    }
});