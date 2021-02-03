import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics', 'Dragon Ball Z Anime'];

    if ( !validPublisher.includes(publisher) ) {
        throw new Error(`El Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher  );
}