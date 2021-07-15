
//html container from DOM
const htmlBody = document.getElementById('body');

//heading to be displayed in Dom
const h3 = document.createElement('h3');
h3.style.color = 'blue'
h3.style.textAlign = 'center'
h3.style.fontFamily = 'arial';
h3.style.fontSize = '24px'
h3.style.marginTop = '30px'
h3.style.textTransform = 'uppercase'
h3.style.fontWeight = 'bold'
htmlBody.appendChild(h3);
let heading = 'List of 30 users fetched from An API'
h3.innerHTML =  `${heading}`;

// fetching datas from API 
fetch('https://randomuser.me/api/?results=30')
.then((res) => {
    return res.json();
})
.then((data) => {
    let users = data.results;
    return users.map((user) => {  //using the map function to pull data consecutively during the 30 iterations

        // creating elements to appear in dom
        const mainCont = document.createElement('div');
        const subCont = document.createElement('div');
        const imageCont = document.createElement('div');
        const profileImage = document.createElement('img');
        const textCont = document.createElement('div');
        const textBod = document.createElement('div');
        const fName = document.createElement('h4');
        const username = document.createElement('p');
        const emailLabel = document.createElement('p');
        const email = document.createElement('p');
        const city = document.createElement('p');
        const nationality = document.createElement('p');

       //relationship between component elements
        htmlBody.appendChild(mainCont);
        mainCont.appendChild(subCont);
        subCont.append(imageCont,textCont);
        textCont.appendChild(textBod);
        textBod.append(fName,username,emailLabel,email,city,nationality);
        imageCont.appendChild(profileImage);

        //adding other useful entities to the to elements from bootstrap  and local css file
        mainCont.classList.add("m-4","mainCont","mx-auto", "border", "border-5", "border-top-1", "rounded-3",  "p-3", "mb-2", "bg-white", "text-dark");
        subCont.classList.add("row","g-0");
        textCont.classList.add("col-md-8");
        textBod.classList.add("text-danger");
        fName.classList.add("card-title", "mb-1");
        username.classList.add("card-subtitle", "mb-4", "text-dark");
        emailLabel.classList.add("card-text");
        email.classList.add("card-text");
        city.classList.add("card-text");
        nationality.classList.add("card-text");
        imageCont.classList.add("col-md-4");
        profileImage.classList.add("img-fluid","rounded-circle")
        
        //variable awaiting API items
        let title = textBod.appendChild(fName);
        let subtitle = textBod.appendChild(username);
        let emailstr = textBod.appendChild(emailLabel);
        let userEmail = textBod.appendChild(email);
        let userCity = textBod.appendChild(city);
        let nationalName = textBod.appendChild(nationality);

        //variables containing items fetched from API which will be transfered to the "awaitinng variables"
        profileImage.src = user.picture.large;
        let firstName = user.name.first;
        let lastName = user.name.last;
        let citi = user.location.city;
        let country = user.nat;
        let UEmail = user.email;
        let userName = user.login.username;

        //attaching API items to awaiting various in DOM notation i.e pushing it to DOM
        title.innerHTML = `${firstName} ${lastName}`;
        subtitle.innerHTML = `${userName}`;
        emailstr.innerHTML = `Email:`;
        userEmail.innerHTML = `${UEmail}`;
        userCity.innerHTML = `City: ${citi}`;
        nationalName.innerHTML = `Nationality: ${country}`; 
        
        //main container width
        mainCont.style.maxWidth ="550px"
    });   
})
.catch((error) =>  {
 console.log(error);
}
);