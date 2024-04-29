
export class Impresora{
    imprimir(array:number[], orientacion:string, valor: number){
        let array2=[]
        let fibo=`fibo <${valor}>: `
        switch (orientacion) {
            case "hd":
            fibo+= array.join(" ");
            break;

            case "vd":
            array.forEach((i) => fibo+=array[i]);
            break;

            case "vi":
            for (let i = valor; i > 0; i--) {
                fibo+=array[i - 1];
            }
            break;
            
            case "hi":
            for (let i = valor; i >= 0; i--) {
                array2.push(array[i]);
            }
            fibo+=array2.join(" ");
            break;
            
            default:
            console.log('Opción no válida');
            break;
        }
        return fibo;
    }      
} 

