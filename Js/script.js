const fromNum = document.querySelector('.from_num'),  //the comma is actually a way to include another const instead of writing it down manually
selectTag = document.querySelectorAll('select'),
switchbtn = document.querySelector('.switch'),
toNum = document.querySelector('.to_num'),
convertBtn = document.querySelector('button');

selectTag.forEach( (tag, id) => {
   for (const money_code in money) {
        // console.log(money[money_code]);
        let selected;
        if (id == 0 && money_code == 'AED') {
            selected = 'selected';
        }
         else if (id == 1 && money_code == 'AFN') {
            selected = 'selected';
        }
        let option = `<option value = '${money_code}' ${selected} > ${(money[money_code])} </option>`;
        tag.insertAdjacentHTML('beforeend', option);
   };
});

// convertBtn.i
switchbtn.addEventListener('click', () => {
    let firstNum = fromNum.value,
    resultNum = selectTag[0].value;
    fromNum.value = toNum.value;
    selectTag[0].value = selectTag[1].value;
    toNum.value = firstNum;
    selectTag[1].value = resultNum;
});

convertBtn.addEventListener('click', () => {
    let result = fromNum.value,
    convertFrom = selectTag[0].value,
    convertTo = selectTag[1].value;
    // console.log(result, convertFrom, convertTo);
    let apiUrl = `https://v6.exchangerate-api.com/v6/b2417440e69257ecc580d0a0/pair/${convertFrom}/${convertTo}/${result}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toNum.value = data.conversion_result;
    })
})