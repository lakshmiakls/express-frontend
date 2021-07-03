const API_URL = "https://expresstrial-bylakshmi.herokuapp.com/api/posts";



window.onload = () =>{
    getPosts();
}


const getPosts = () =>{
    fetch(API_URL,{
        method:"GET"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.results);
        return showData(data.results);
    })
}


const showData = (data) => {
    let dataDiv = "";
    data.forEach((datum) => {
        const userName = datum.name;
        console.log(userName);
        const userGender = datum.gender;
        const userPlace = datum.place;
        dataDiv += `
        <div>
            <h1>${userName}</h1>
        </div>
        <div>
            <p>${userGender}</p>
        </div>
        <div>
            <p>${userPlace}</p>
        </div>`
    });
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = dataDiv;
}


const sumbitButton = document.querySelector('#submit');
console.log(sumbitButton);

const getValues = () => {
    const name = document.querySelector('#name').value;
    const gender = document.querySelector('#gender').value;
    const place = document.querySelector('#place').value;

    if (name == "" || gender == "" || place == ""){
        return false
    }else {
        let data = new FormData();
        data.append("name", name);
        data.append("gender", gender);
        data.append("place", place);
        
        fetch(API_URL, {
            method: "POST",
            body: data
        }).then(() => {
            // setTimeout(() => {
            //     location.reload();
            // }, 1000)
            console.log(data);
        }).catch((e) => {
            console.log(e);
        } )

    };
}

sumbitButton.addEventListener('click', getValues);

