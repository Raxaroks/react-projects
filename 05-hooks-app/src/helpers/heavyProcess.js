export const heavyProcess = (iter) => {
    for(let i=0; i<iter; i++) {
        console.log("Let's go!");
    }
    return `${ iter } iteraciones realizadas.`;
}