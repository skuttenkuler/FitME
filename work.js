date = {
    1: Monday,
    2: Tuesday,
    3: Wednesday,
    4: Thursday,
    5: Friday,
    6: Saturday,
    7: Sunday,
}

for(i=0; i < date.length; i++);
    prompt("Number between 1 -7: ")
    userVar = prompt.value()
    if(userVar == date[i]){
        console.log(date[i].value)
    }