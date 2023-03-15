const GRAPHQL = 'http://localhost:9000/';

async function fetchGreeting() {
    const response  = await fetch(GRAPHQL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    });

    const {data} = await response.json();
    console.log(data)
    return data;
}
const element = document.getElementById('greeting');
element.textContent = 'Loading..';

fetchGreeting().then(({greeting})=> {
    element.textContent = greeting
});