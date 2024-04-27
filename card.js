
console.log( sessionStorage.key('loginstatus'))

const data = [{

    image: "Golden Retriever.jpeg",
    color: "	Any shade of gold or cream",
    Breed: "Golden Retriever",
    price: "$ 1500",
    orderlink: "https://en.wikipedia.org/wiki/Golden_Retriever",
    description: "Golden Retrievers' soft and gentle nature, combined with their fun-loving personalities, has made them a firm  as a family pet. These dogs are  good with children and make ideal playmates"
},

{

    image: "Beagles.jpeg",
    color: "Tricolor or white",
    Breed: "Beagle",
    price: "$ 2200",
    orderlink: "https://en.wikipedia.org/wiki/Beagle",
    description: "The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare, known as beagling"
},

{

    image: "Pomeranian.jpeg",
    color: "white",
    Breed: "Pomeranian",
    price: "$ 700",
    orderlink: "https://en.wikipedia.org/wiki/Pomeranian_dog",
    description: "The Pomeranian (also known as a Pom or Pommy) is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. "
},

{

    image: "Shihtzu.jpeg",
    color: "Dark/light brown",
    Breed: "Shih Tzu",
    price: "$ 1000",
    orderlink: "https://en.wikipedia.org/wiki/Shih_Tzu",
    description: "The Shih Tzu is a sturdy little dog with a small snout and normally has large dark brown eyes. The Chinese have described their head shapes as owl head and lion head, and their mouth as frog mouths."
},

{

    image: "Rottweiler.jpeg",
    color: "black and mahogany",
    Breed: "Rottweiler",
    price: "$ 1400",
    orderlink: "https://en.wikipedia.org/wiki/Rottweiler",
    description: "The Rottweiler  is a breed of domestic dog, regarded as medium-to-large or large.The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd  ."
},
{

    image: "Dachshund.jpeg",
    color: "Solid red, black & tan",
    Breed: "Dachshund",
    price: "$ 600",
    orderlink: "https://en.wikipedia.org/wiki/Dachshund",
    description: "The dachshund was bred to scent, chase, and flush out badgers and other burrow-dwelling animals. The miniature dachshund was bred to hunt small animals such as rabbits"
},

{

    image: "AlaskanMalamute.jpeg",
    color: "	Grey, sable, black, or red",
    Breed: "Alaskan Malamute",
    price: "$ 2100",
    orderlink: "https://en.wikipedia.org/wiki/Alaskan_Malamute",
    description: "The Alaskan Malamute is a large breed of dog that was originally bred for its strength and endurance, to haul heavy freight as a sled dog, and as a hound.It is similar to other arctic breeds such as the husky."
},

{

    image: "Dobermann.jpeg",
    color: "	black & tan, red & tan",
    Breed: "Dobermann",
    price: "$ 1800",
    orderlink: "https://en.wikipedia.org/wiki/Dobermann",
    description: "The Dobermann is a German breed of medium-large domestic dog of pinscher type.It has a long muzzle and ideally  an even and graceful gait. "
},

{

    image: "Poodle.jpeg",
    color: "black,white & gray",
    Breed: "Poodle",
    price: "$ 1400",
    orderlink: "https://en.wikipedia.org/wiki/Poodle",
    description: "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle."
}


]

const card = document.getElementById("cardContainer")
const addToCartButton = document.getElementById('addToCartButton');


function addToCart() {
    const data = sessionStorage.getItem('loginStatus');
    if (data !== "false") {
        handleButtonClick()
       
    }
    else {
        alert("login first")
        location.href = "./login/index.html";
    }
}

var htlmstring = ""
for (var i = 0; i < data.length; i++) {
    htlmstring += `<div class = "card">
            <div class = "image-container">
                <img src="${data[i].image}" alt="dog">
            </div>
            <div>
                <h1>${data[i].Breed}</h1>
                <p class = "desc">${data[i].description}</p>
                <div class = "price-cont">
                    <p class="color">${data[i].color}</p>
                    <p class="prices">${data[i].price}</p>
                </div>
                <div>
                <a href="${data[i].orderlink}" target="blank">ABOUT</a>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>

            </div>
            <div class="buttons">
            <button onClick="addToCart()" type="button">ADD TOCART</button>
            </div>
            </div>`

}
card.innerHTML = htlmstring;


function handleButtonClick() {
        
    signupLink.style.display = 'none';
    signinLink.style.display = 'none';

    addToCartButton.style.display = 'inline-block';
}


addToCartButton.addEventListener('click', handleButtonClick);


let cartCount = 0; // Initialize cart count


