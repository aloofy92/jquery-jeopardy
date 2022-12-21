let jeopardyhundred = document.querySelectorAll('#oneHundred div');
let twoHundred = document.querySelectorAll('#twoHundred div');
let fourHundred = document.querySelectorAll('#fourHundred div');
let sixHundred= document.querySelectorAll('#sixHundred div');
let eightHundred = document.querySelectorAll('#eightHundred div');
let jeopardyquestion = document.querySelector('#question');
let jeopardyform = document.querySelector('form');
let input = document.querySelector('#answer');
let score = 0;


console.log(jeopardyhundred)


//hundred Row
jeopardyhundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "grey"

        let jeopardyData = async () => {

            let otherJeopardyData = await fetch ('jeopardy.json');
            let theData = await otherJeopardyData.json();
            console.log(theData);
        
            let clusterData = _.groupBy(theData, 'value');
        
            
            let newjeopardyQuestion = clusterData.$100[Math.ceil(Math.random() * 2000)].question
            let newjeopardyAnswer = clusterData.$100[Math.ceil(Math.random() * 2000)].answer
            let category = clusterData.$100[Math.ceil(Math.random() * 2000)].category
            console.log(newjeopardyQuestion);
            console.log(newjeopardyAnswer);



        let p = document.querySelector('p')
        p.innerHTML = `Category [${category}]  Question: [${newjeopardyQuestion}]`
        

        jeopardyform.addEventListener('submit', (event) => {

            event.preventDefault();
            let newScore = document.querySelector("#score")
            newScore.style.color = "gold"

            if(input.value == newjeopardyAnswer){

               console.log('correct')
               p.innerHTML =`What is ${newjeopardyAnswer} is correct`
               score += 100;
               
            } else {

                console.log('wrong')
                p.innerHTML = `wrong the answer is what is ${newjeopardyAnswer}`
                score = score - 100;
                
            }
           
            newScore.innerHTML = score;
          })
        
        }
        
        jeopardyData();

        


    })


   

})





//two hundred Row

twoHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "grey"
        let jeopardyData = async () => {

            let otherJeopardyData = await fetch ('jeopardy.json');
            let theData = await otherJeopardyData.json();
            console.log(theData);
        
            let clusterData = _.groupBy(theData, 'value');
            
            let newjeopardyQuestion = clusterData.$200[Math.ceil(Math.random() * 2000)].question
            let newjeopardyAnswer = clusterData.$200[Math.ceil(Math.random() * 2000)].answer
            let category = clusterData.$200[Math.ceil(Math.random() * 2000)].category
            console.log(newjeopardyQuestion)
            console.log(newjeopardyAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category  [${category}]  Question: [${newjeopardyQuestion}]`
            
    
            jeopardyform.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "gold"
    
                if(input.value == newjeopardyAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newjeopardyAnswer} is correct`
                   score += 200;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is, what is ${newjeopardyAnswer}`
                    score = score - 200;
                    
                }
               
                newScore.innerHTML = score;
              })


        }
        
        jeopardyData();

    })

})





//four hundred

fourHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "grey"
        let jeopardyData = async () => {

            let otherJeopardyData = await fetch ('jeopardy.json');
            let theData = await otherjeopardyData.json();
            console.log(theData);
        
            let clusterData = _.groupBy(theData, 'value');
              
            let newjeopardyQuestion = clusterData.$400[Math.ceil(Math.random() * 2000)].question
            let newjeopardyAnswer = clusterData.$400[Math.ceil(Math.random() * 2000)].answer
            let category = clusterData.$400[Math.ceil(Math.random() * 2000)].category
            console.log(newjeopardyQuestion)
            console.log(newjeopardyAnswer)
            let p = document.querySelector('p')
            p.innerHTML = `Category [${category}]  Question: [${newjeopardyQuestion}]`
            
    
            jeopardyform.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "gold"
    
                if(input.value == newAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newjeopardyAnswer} is correct`
                   score += 400;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newjeopardyAnswer}`
                    score = score - 400;
                    
                }
               
                newScore.innerHTML = score;
              })
        }
        
        jeopardyData();
    })

})




//sixhundred



sixHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "grey"
        let jeopardyData = async () => {

            let otherJeopardyData = await fetch ('jeopardy.json');
            let theData = await otherJeopardyData.json();
            console.log(theData);
        
            let clusterData = _.groupBy(theData, 'value');
         
            let newjeopardyQuestion = clusterData.$600[Math.ceil(Math.random() * 2000)].question
            let newjeopardyAnswer = clusterData.$600[Math.ceil(Math.random() * 2000)].answer
            let category = clusterData.$600[Math.ceil(Math.random() * 2000)].category
            console.log(newjeopardyQuestion)
            console.log(newjeopardyAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category [${category}]  Question: [${newjeopadyQuestion}]`
            
    
            jeopardyform.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "gold"
    
                if(input.value == newjeopardyAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newjeopardyAnswer} is correct`
                   score += 600;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newjeopardyAnswer}`
                    score = score - 600;
                    
                }
               
                newScore.innerHTML = score;
              })
        }
        
        jeopardyData();
    })

})




//eighthundred



eightHundred.forEach(item => {

    item.addEventListener('click', () => {

        console.log(`clicked at item ${item}`)
        item.style.background = "grey"
        let jeopardyData = async () => {

            let otherJeopardyData = await fetch ('jeopardy.json');
            let theData = await otherJeopardyData.json();
            console.log(theData);
        
            let clusterData = _.groupBy(theData, 'value');
        
            let newjeopardyQuestion = clusterData.$800[Math.ceil(Math.random() * 2000)].question
            let newjeopardyAnswer = clusterData.$800[Math.ceil(Math.random() * 2000)].answer
            let category = clusterData.$800[Math.ceil(Math.random() * 2000)].category
            console.log(newjeopardyQuestion)
            console.log(newjeopardyAnswer)

            let p = document.querySelector('p')
            p.innerHTML = `Category  [${category}] Question:[${newjeopardyQuestion}]`
            
    
            jeopardyform.addEventListener('submit', (event) => {
    
                event.preventDefault();
                let newScore = document.querySelector("#score")
                newScore.style.color = "gold"
    
                if(input.value == newjeopardyAnswer){
    
                   console.log('correct')
                   p.innerHTML =`What is ${newjeopardyAnswer} is correct`
                   score += 800;
                   
                } else {
    
                    console.log('wrong')
                    p.innerHTML = `wrong the answer is what is ${newjeopardyAnswer}`
                    score = score - 800;
                    
                }
               
                newScore.innerHTML = score;
              })
        
        }
        
        jeopardyData();
    })

})















let jeopardyData = async () => {

    let otherJeopardyData = await fetch ('jeopardy.json');
    let theData = await otherJeopardyData.json();
    console.log(theData);

    let clusterData = _.groupBy(theData, 'value');

    console.log(clusterData);


}

jeopardyData();



