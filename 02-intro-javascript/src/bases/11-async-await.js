// Async - Await

const getImagen = async() => {
    try{
        const apiKey = 's8S2uTxQWPLjo0kecYpf2BnqCmTa6NTy';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(error) {
        // handling error
        console.error(error);
    }
}

getImagen();
