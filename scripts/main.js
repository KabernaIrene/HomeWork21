/*
Створити програму для відображення результатів голосування. 
З наступними умовами:

1.Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
2.Виведення даних - смайлики в один рядок, під ними - кількість тих, 
хто проголосував за кожен смайл.
3.При натисканні на смайл - під ним змінюється значення лічильника.
4.Реалізувати таким чином, щоб додавання нових варіантів відповіді 
не вело до додавання нових функцій.
*/

const emojy = document.querySelector('.emoji');
const count = document.querySelector('.numbers');
const emojiArr = Array.from(emojy.children);
const countArr = Array.from(count.children);

console.log(emojiArr);
console.log(countArr);

emojy.addEventListener('click', account);


function account (event) {
    
            switch (event.target.outerText){
            case emojiArr[0].outerText:
                countArr[0].textContent ++;
                break;
            case emojiArr[1].outerText:
                countArr[1].textContent ++;
                break;
            case emojiArr[2].outerText:
                countArr[2].textContent ++;
                break;
            case emojiArr[3].outerText:
                countArr[3].textContent ++;
                break;
            case emojiArr[4].outerText:
                countArr[4].textContent ++;
                break;
        }

}



/*switch (event.target.indexOf <= emojiArr.length){
            case event.target.indexOf === 0:
                countArr[0].textContent = textContent ++;
                break;
            case event.target.indexOf === 1:
                countArr[1].textContent ++;
                break;
            case event.target.indexOf === 2:
                countArr[2].textContent ++;
                break;
            case event.target.indexOf === 3:
                countArr[3].textContent ++;
                break;
            case event.target.indexOf === 4:
                countArr[4].textContent ++;
                break;
        }*/




