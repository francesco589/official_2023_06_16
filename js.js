/*
Ex 1: Set + algoritmi
crea una funzione che prende in ingresso due set di 5 parole e restituisce la differenza tra il
numero di parole aventi lunghezza pari presenti nel primo set e il numero di parole che terminano
in 'a' presenti nel secondo set.
chiamare la funzione con valori a piacere per stampare il risultato.
*/
{

const set1 = new Set(['foto', 'mare', 'elefante', 'terra', 'albero'])
const set2 = new Set(['giornale', 'settimana', 'ottone', 'orchestra','automobile'])

function checkWords(par1, par2){
    let counterEven = 0
    let containFinalA = 0
    par1.forEach(el => { 
        if(el.length % 2 == 0){
            counterEven ++
        }})
    par2.forEach(el => { 
        if(el.charAt(el.length -1) == 'a'){
            containFinalA ++}})
    return counterEven - containFinalA
    }   


   console.log(checkWords(set1, set2)) 
        
}

/*
Ex 2: Funzioni + array + oggetti + algoritmi
Scrivi una funzione che prenda in input un array di 3 oggetti rappresentanti persone (nome,
cognome, età) e restituisca un nuovo array contenente le 3 persone ordinate per età crescente
(dal più giovane al più anziano).
Chiamare la funzione per produrre l'array, e successivamente iterare su questo array per stampare
le informazioni di tutte e 3 le persone.
Ad esempio:
dammiPersoneOrdinate ( [ {mario rossi, 32}, {luigi verdi, 25}, {peach pink, 30} ] )
produce: [{luigi verdi, 25}, {peach pink, 30}, {mario rossi, 32}, ]
*/
{

const arrObj = [
    {nome: "Giovanni", cognome: "Rossi", età: 67 },
    {nome: "Gabriele", cognome: "Marchi", età: 29 },
    {nome: "Fabio", cognome: "Carli", età: 45 }
]


function dammiPersoneOrdinate(arr){
    return arr.sort((a, b) => a.età - b.età )
}

console.log(dammiPersoneOrdinate(arrObj))
dammiPersoneOrdinate(arrObj).forEach(el => console.log(`nome : ${el.nome} cognome: ${el.cognome} età: ${el.età}`))


}


/*
Ex 3: Map + algoritmi
Crea un array di 6 stringhe a piacere.
Successivamente, crea una mappa che avrà come chiavi le parole contenute nell'array e per valori
le loro lunghezze.
Itera sulla mappa per stampare, per ogni coppia al suo interno, la frase:
la parola … contiene … caratteri
*/


{

const words1 = ['questo','array', 'contiene', 'sei', 'parole','adesso']

let map1 = new Map()

words1.forEach(el => map1.set(el, el.length))

for(let val of map1){
    console.log(`la parola "${val[0]}" contiene ${val[1]} caratteri`)
}
}

/*
Ex 4: date + JSON
Dato il seguente JSON:
{
"date1": "1990-10-10",
"date2": "1980-10-10",
"date3": "1970-10-10",
"date4": "1960-10-10"
}
trova la strategia corretta per stampare in output la data più "piccola" e la data più "grande" tra
quelle fornite.
*/

{
const json = 
        `{
        "date1": "1990-10-10",
        "date2": "1980-10-10",
        "date3": "1970-10-10",
        "date4": "1960-10-10"
        }`  
const jsonParsed = JSON.parse(json)

let counterDate = ""
for(let k in jsonParsed){
    if( new Date(jsonParsed[k]) < new Date(jsonParsed.date1)){
        counterDate = new Date(jsonParsed[k])
    }
}


}

/*
Ex 5: Algoritmi
Data una stringa s a piacere, stampare solo i caratteri univoci, ovvero i caratteri che compaiono
SOLO una volta nella lista.
Ad esempio:
abbazia -> zi
*/

{

let testo = "giacomo";
let once = "";
for(let i = 0; i < testo.length; i++ ){
    if(testo.indexOf(testo[i]) === testo.lastIndexOf(testo[i]) ){
        once += testo[i]
    }
}
console.log(once)
}

/*
Ex 1: Array + algoritmi
crea un array di 6 numeri interi e stampa in console la differenza tra il numero di numeri maggiori
di 10 e il numero di numeri inferiori a 1.
Inoltre, se il valore calcolato è pari a 0, stampa tutti i numeri dell'array in senso invertito,
altrimenti, stampa solo il primo e l'ultimo numero dell'array.
*/

{

function printNumbers(arr){
    let countMax = 0
    let countMin = 0
    arr.forEach(el => {
        if(el > 10) 
        {countMax ++};
        if(el < 1) 
        {countMin ++};   
    })
    if(countMax - countMin == 0){
        return `differenza: ${countMax - countMin} arrey invertito: ${arr.reverse()}`;
       } 
       else {
            return `differenza: ${countMax - countMin} arrey: ${arr.filter((el,i) => i === 0 || i === arr.length -1)}`;
        }}

console.log(printNumbers([16, 0, -1, -5, 11, 12]))
}

/*
Ex 2: Array + funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso due set di 5 numeri e restituisce un oggetto.
Questo oggetto avrà le seguenti proprietà:
winner -> avrà valore 1 se il primo set ha più proprietà del secondo, altrimenti 2, e 0 se hanno
numero pari di proprietà
morePositive: avrà valore 1 se il primo set ha più numeri positivi (> 0) del secondo, altrimenti 2, e 0
se hanno numero pari di proprietà
chiama la funzione per stampare proprietà e valori dell'oggetto restituito
*/

{
const setNumeri1 = new Set([9, 12, 38, 86, 39])
const setNumeri2 = new Set([54, 68, 65, 98])
function confrontaSet(set1, set2){
    let obj = {winner: 0, morePositive: 0}
    if (Object.keys(set1).length > Object.keys(set2).length){
        obj.winner = 1
    }
    if (Object.keys(set1).length < Object.keys(set2).length){
        obj.winner = 2
    }
    if (Object.keys(set1).length == Object.keys(set2).length){
        obj.winner = 0
    }
    console.log(obj)
}
confrontaSet(setNumeri1, setNumeri2)
}
/*
Ex 3: Funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso 2 oggetti che rappresentano due rettangoli, che avranno
questa struttura: {x: valore numerico, y: valore numerico}, e una stringa che può avere i seguenti
valori:
- perimetro
- area
Se il terzo parametro ha valore 'perimetro' la funzione restituisce la differenza tra il perimetro del
primo rettangolo e il perimetro del secondo rettangolo.
Se il terzo parametro ha valore 'area' la funzione restituisce la somma tra l'area del primo
rettangolo e l'area del secondo rettangolo.
Ad esempio:
opeRettangolo( rect1, rect2, 'area' ) -> risultato
opeRettangolo( rect1, rect2, 'perimetro' ) -> risultato
Chiama la funzione 2 volte per stampare i valori prodotti, usando valori a piacere.
*/
{


function calcoloGeom(obj1, obj2, str){
    switch(str){
        case "perimetro": console.log(((obj1.x*2) + (obj1.y*2)) - ((obj1.x*2) + (obj2.y*2)));
        case "area": console.log(((obj1.x * obj1.y) + (obj2.x *obj2.y))) 
    }
}
calcoloGeom({x: 2, y: 4}, {x: 5, y: 3}, "perimetro")
calcoloGeom({x: 2, y: 4}, {x: 5, y: 3}, "area")

}

/*
Ex 4: Funzioni di funzioni + algoritmi
Creare una funzione chiamata opeStringa che accetta 2 parametri:
- una stringa
- una funzione che prende in ingresso una stringa e restituisce una nuova stringa,
trasformata
La funzione opeStringa deve restituire la stringa prodotta dalla funzione passata come secondo
parametro.
In fase di chiamata di opeStringa, operare nel seguente modo:
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la versione
maiuscola
- chiamare opeStringa con una stringa "javascript" e una funzione che produca una stringa
contenente solo i caratteri alla posizione dispari
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la stringa
invertita
Ad esempio:
s = javascript
opeStringa(s, uc) -> produce JAVASCRIPT
opeStringa(s, odd) -> produce aacit
opeStringa(s, invert) -> produce tpircsavaj
Stampare in output i risultati.
*/ 
{

function opeStringa(str, fn){
return fn(str)
}
console.log(opeStringa("javascript", str => str.toUpperCase()))
// console.log(opeStringa("javascript", str => {
//     let newS = ""
//     for(let i = 0; i < str.length; i++){
//         if(i % 2 > 0 ){
//             newS += str[i]
//         }
//         return newS
//     }})
}

