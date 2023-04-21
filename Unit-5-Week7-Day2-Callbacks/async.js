function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
    },1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.hopindustries.com/logo.jpg';

download(url);
process(url);

//pyramid of doom, callback hell
// const url1 = 'https://www.hopindustries.com/logo.jpg';
// const url2 = 'https://www.hopindustries.com/logo2.jpg';
// const url3 = 'https://www.hopindustries.com/logo3.jpg';

// download(url1, function (url) {
//   console.log(`Processing ${url}`);
//   download(url2, function (url) {
//     console.log(`Processing ${url}`);
//     download(url3, function (url) {
//       console.log(`Processing ${url}`);
//     });
//   });
// });