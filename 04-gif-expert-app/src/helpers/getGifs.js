export const getGifs = async ( ctgry ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(ctgry)}&limit=10&api_key=s8S2uTxQWPLjo0kecYpf2BnqCmTa6NTy`;

        const response = await fetch( url );
        const {data} = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        return gifs;     
    }