let imgBox= document.getElementById("imgBox");
let qrImage= document.getElementById("qrImage");
let qrText= document.getElementById("qrtext");
let qrcolor= document.getElementById("qrcolor");
let qrbg= document.getElementById("qrbg");

// async function  generate(){
// // let qrimage= document.getElementById("qrImage");
// // if(qrText.value.length > 0){
// //     qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
// //     imgBox.classList.add("show-img");
// // }
// // else{
// //     qrText.classList.add('error');
// //     setTimeout(()=>{
// //         qrText.classList.remove('error');
// //     },500);
// // }
// const url = 'https://neutrinoapi-qr-code.p.rapidapi.com/qr-code';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '2d8183e9bcmsh1d95d9f81d7ffcbp149d65jsn31ac2c8befeb',
// 		'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		content: /*'http://www.youtube.com'*/qrText.value,
// 		width: '128',
// 		height: '128',
// 		'fg-color':/*'#ffffff'*/ qrcolor.value,
// 		'bg-color': /*'#494eea'*/ qrbg.value
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

async function generate() {
    const url = 'https://neutrinoapi-qr-code.p.rapidapi.com/qr-code';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '2d8183e9bcmsh1d95d9f81d7ffcbp149d65jsn31ac2c8befeb',
            'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
        },
        body: new URLSearchParams({
            content: qrText.value,
            width: '128',
            height: '128',
            'fg-color': qrcolor.value,
            'bg-color': qrbg.value
        })
    };

    try {
        const response = await fetch(url, options);
        const blob = await response.blob(); // Get binary data as Blob
        const imageUrl = URL.createObjectURL(blob); // Create object URL from Blob

        // Create img element and set src attribute
        const qrImage = document.getElementById("qrImage");
        qrImage.src = imageUrl;

        // Show the image box
        imgBox.classList.add("show-img");
    } catch (error) {
        console.error(error);
    }
}
