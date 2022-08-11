const one =  document.querySelector('#one')
const two = document.querySelector('#two')
const reset = document.querySelector('#reset')
const h1 = document.querySelector('h1')
const input = document.querySelector('input') 

let i = document.createElement('span');
let j = document.createElement('span');
j.innerText = '0'
i.innerText = '0'
one.addEventListener('click', function(e){
   i.innerText++;
        h1.innerText = `${i.innerText} to ${j.innerText}`

        if(i.innerText === input.value)
        {
        i.style.color = 'green';
        j.style.color = 'red'
        h1.innerText = '';
        h1.append(i,` to `,j)

        one.disabled = true;
        two.disabled = true;
        one.style.backgroundColor = 'rgba(18, 182, 108,0.6)'
        two.style.backgroundColor = 'rgba(12, 79, 118,0.6)'
      }
})
two.addEventListener('click', function(e){
    j.innerText++;
         h1.innerText = `${i.innerText} to ${j.innerText}`
         if(j.innerText === input.value)
         {
            j.style.color = 'green';
            i.style.color = 'red'
            h1.innerText = '';
            h1.append(i,` to `,j)

            one.disabled = true;
            two.disabled = true;
            one.style.backgroundColor = 'rgba(18, 182, 108,0.6)'
            two.style.backgroundColor = 'rgba(12, 79, 118,0.6)'
          }

 })
 input.addEventListener('change', function(){
        input.value = parseInt(this.value)
        resetGame();
 })


 reset.addEventListener('click', resetGame)
 function resetGame(){
    h1.innerText = '0 to 0';
    one.disabled = false;
    two.disabled = false;
    i.innerText='0'
    j.innerText='0'
    one.style.backgroundColor = 'rgb(18, 182, 108)';
    two.style.backgroundColor = 'rgb(12, 79, 118)';
 }