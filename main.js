const monthlyCosts = [19.99, 24.99, 39.99];
const annualyCosts = [199.99, 249.99, 399.99];
const costs        = [...$(".costs")];

$("#choice").bind("click", switcher);

function switcher() {
    let checked = this.checked;

    for (let i = 0; i < costs.length; i++) {
        (checked)
        ? costs[i].innerHTML = monthlyCosts[i]
        : costs[i].innerHTML = annualyCosts[i];
    }
}