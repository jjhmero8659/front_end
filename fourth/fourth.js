
function submit_btn(){
    let First_select = document.getElementById("First_select")
    let Second_select = document.getElementById("Second_select")
    let Third_select = document.getElementById("Third_select")
    let Fourth_select = document.getElementById("Fourth_select")
    let input_value = document.getElementById("text_input")

    if(First_select.value == "Modify"){
        if(Second_select.value == "Color"){
            if(Fourth_select.value == "Title"){
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Title`)
                    target.style.color = input_value.value
                }
            }
            else{
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Body`)
                    target.style.color = input_value.value
                }
            }
        }
        else if(Second_select.value == "BG-Color"){
            if(Fourth_select.value == "Title"){
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Title`)
                    target.style.backgroundColor = input_value.value
                }
            }
            else{
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Body`)
                    target.style.backgroundColor = input_value.value
                }
            }
        }
        else{
            if(Fourth_select.value == "Title"){
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.textContent = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.textContent = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Title`)
                        target.textContent = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Title`)
                    target.textContent = input_value.value
                }
            }
            else{
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.textContent = input_value.value
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.textContent = input_value.value
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Body`)
                        target.textContent = input_value.value
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Body`)
                    target.textContent = input_value.value
                }
            }
        }
    }
    else{
        if(Second_select.value == "Color"){
            if(Fourth_select.value == "Title"){
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = "#000"
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = "#000"
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.color = "#000"
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Title`)
                    target.style.color = "#000"
                }
            }
            else{
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = "#000"
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = "#000"
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.color = "#000"
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Body`)
                    target.style.color = "#000"
                }
            }
        }
        else if(Second_select.value == "BG-Color"){
            if(Fourth_select.value == "Title"){
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Title`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Title`)
                    target.style.backgroundColor = "#fff"
                }
            }
            else{
                if(Third_select.value == "Even"){
                    for(let i=2; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else if(Third_select.value == "Odd"){
                    for(let i=1; i<=5; i+=2){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else if(Third_select.value == "All"){
                    for(let i=1; i<=5; i++){
                        let target = document.getElementById(`${i}_Body`)
                        target.style.backgroundColor = "#fff"
                    }
                }
                else{
                    let target = document.getElementById(`${Third_select.value}_Body`)
                    target.style.backgroundColor = "#fff"
                }
            }
        }
    }
    
    
}

function check_value(){
    let First_sel = document.getElementById("First_select")
    let span_to = document.getElementById("to_span")
    let text_inp = document.getElementById("text_input")
    if(First_sel.value == "Modify"){
        span_to.style.display = "inline"
        text_inp.style.display = "inline"
    }
    else{
        span_to.style.display = "none"
        text_inp.style.display = "none"
    }
}