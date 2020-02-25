 
const list = document.querySelector('.list');
const searchText = document.querySelector('.searchtext');
 

let listData = [
    "Rashmin Chhatrala", "Ashish Shah", "Yash Dubey", " Prakash Jain ", "  Prakash Jain",
    "Yashraj Singh", "Viraj Sinha", "Rajesh Kumar", "  Rajesh Kumar ", "Mahesh Marwadi "
    , "Suresh Sahni", "Amar Vilas ", "Virdas Singhania", "Rajeshwari Bindra",
    "Birendra Bhalerao", "  Virendra Bhupati", "  Bhupendra Singh", "  Bhuvam Bam"
    , "Shri Raj", "Prashant Kamle", "Kamlesh Tomar", "Risabh Khare", "Rishi Kohli",
    "Kunwar Kharwanda", "Kartik Koli", "Komal Jain", "Kartikey Pandey"
];

function searching() {
    list.innerHTML = '';
    let search = listData.filter(element => {
        // console.log(element)
        if (element.toLowerCase().includes(searchText.value.toLowerCase())) {
            // console.log('hello');
            return element;

        }
    });
   
    let content = ""
    search.forEach(element => {
        content += `<p>${element.slice(0, element.indexOf(searchText.value))}<span class="highlight">${element.substr(element.indexOf(searchText.value), searchText.value.length)}</span>${element.slice(element.indexOf(searchText.value) + searchText.value.length, )}</p>`; 
    });
    list.innerHTML = content;
//console.log(listData.join(""));
//console.log(listData.slice(0,listData.indexOf(searchText)),listData.substring(listData.indexOf(searchText),searchText.length))


//console.log(s1.slice(0,s2.indexOf(s1)),s1.substr(s1.indexOf(s2),s1.length),s1.slice(s2.length+s2.indexOf(s1)));


    // let finds=listData.find(element =>{
    //     return element.includes(searchText.value);
    // });
    // list.innerHTML+=finds;
}
























// ul = document.createElement('ul');

// document.getElementById('myItemList').appendChild(ul);

// items.forEach(function (item) {
//     let li = document.createElement('li');
//     ul.appendChild(li);

//     li.innerHTML += item;
// });
// listContainer = document.createElement('div'),
//     // Make the list
//     listElement = document.createElement('ul'),
//     // Set up a loop that goes through the items in listItems one at a time
//     numberOfListItems = listData.length,
//     listItem,
//     i;

//     // Add it to the page
//     document.getElementsByTagName('body')[0].appendChild(listContainer);
//     listContainer.appendChild(listElement);

//     for (i = 0; i < numberOfListItems; ++i) {
//         // create an item for each one
//         listItem = document.createElement('li');

//         // Add the item text
//         listItem.innerHTML = listData[i];

//         // Add listItem to the listElement
//         listElement.appendChild(listItem);
//     }