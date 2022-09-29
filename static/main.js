var inp = document.getElementById('inp')
var con = document.getElementById('con')
var taskCon = document.getElementById('taskCon')
var submit = document.getElementById('submit')
var enter = document.getElementById('enter')
// var tskcls = document.querySelector()
var taskList = []
var i=0
enter.addEventListener('click',()=>{
    if(inp.value!=''){
        i++;
        let task = document.createElement('div')
        let check = document.createElement('button')
        check.innerHTML='👍🏻'
        check.setAttribute('class','done')
        task.setAttribute('id','task'+i)
        task.setAttribute('class','task')
        var todo=inp.value 
        task.innerText+= todo.toUpperCase()

        taskCon.appendChild(task)
        task.appendChild(check)
        task.style.marginTop=100*i+'px'

        check.addEventListener('click',()=>{
            task.style.textDecoration='line-through'
            check.style.display='none'
            taskList.push(task)
            console.log(taskList)
        })

    }
    inp.value='';
})

