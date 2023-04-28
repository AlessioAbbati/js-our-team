let eleList = document.querySelector(".grid");

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">`
    },
    {
        name: `<p>Angela Caroll</p>`, 
        role: `<p>Chief Editor</p>`,
        photo: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: `<img src="img/walter-gordon-office-manager.jpg" alt="">`
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`
    },
    {
        name: 'Scott Estrada', 
        role: 'Developer',
        photo: `<img src="img/scott-estrada-developer.jpg" alt="">`
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`
    }
];

console.log(team);

for (let element of team) {     console.log(element);
    eleList.innerHTML += (`<div class="member">${element.name}, ${element.role}, ${element.photo}</div>`);
}
