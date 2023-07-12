const progressCircles = Array.from(document.getElementsByClassName('progress-circle'));


function updateProgressBar(stepIndex) {
    progressCircles.forEach((circle, index) => {
        if (index <= stepIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}





const txt1 = document.getElementById('SCname');
        const txt2 = document.getElementById('address');
        const txt3 = document.getElementById('sport');
        const txt4 = document.getElementById('cname');
        const txt5 = document.getElementById('cemail');
        const txt6 = document.getElementById('cphno');
        const txt7 = document.getElementById('vcname');
        const txt8 = document.getElementById('vcemail');
        const txt9 = document.getElementById('vcphno');
        const txt10 = document.getElementById('name1');

        const txt11 = document.getElementById('contact');




        const hehe = document.getElementById('hehe');
        const out1 = document.getElementById('output1');
        const out2 = document.getElementById('output2');
        const out3 = document.getElementById('output3');
        const out4 = document.getElementById('output4');
        const out5 = document.getElementById('output5');
        const out6 = document.getElementById('output6');
        const out7 = document.getElementById('output7');
        const out8 = document.getElementById('output8');
        const out9 = document.getElementById('output9');
        const out10 = document.getElementById('output10');
        const out11 = document.getElementById('output11');


       

        function fun1(){
            out1.innerHTML = "School/College:"+" "+txt1.value;
            out2.innerHTML = "Address:"+" "+txt2.value;
            out3.innerHTML = "Sport:"+" "+txt3.value;
            out4.innerHTML = "Captain Name:"+" "+txt4.value;
            out5.innerHTML = "Captain Email:"+" "+txt5.value;
            out6.innerHTML = "Captain Phone:"+" "+txt6.value;
            out7.innerHTML = "Vice Captain Name:"+" "+txt7.value;
            out8.innerHTML = "Vice Captain Email:"+" "+txt8.value;
            out9.innerHTML = "Vice Captain Phone:"+" "+txt9.value;
            out10.innerHTML = "Player1 Name:"+" "+txt10.value;
            out11.innerHTML = "Player1 Contact No.:"+" "+txt11.value;


            
        }
        // INFO LIST.addEventListener('click',fun1);




        // let naam =  document.getElementById("SCname").value;

        //  console.log(naam);
        // function confirmkardo(){
        //     var name =  document.getElementById("SCname").value;
        //     document.write("Institue Name :" + name);
        // }

        

        const form = document.getElementById('signupForm');
        const steps = Array.from(form.getElementsByClassName('step'));
        const prevButtons = Array.from(form.getElementsByClassName('btn-prev'));
        const nextButtons = Array.from(form.getElementsByClassName('btn-next'));

        let currentStep = 0;
        showStep(currentStep);

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                step.style.display = index === stepIndex ? 'block' : 'none';
            });
        }

        // function navigateToStep(stepIndex) {
        //     currentStep = stepIndex;
        //     showStep(currentStep);      //this is the prev code
        // }
        function navigateToStep(stepIndex) {
            currentStep = stepIndex;
            showStep(currentStep);
            updateProgressBar(currentStep);
        }

        
        

        prevButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                navigateToStep(index - 1);
            });
        });

        // function navigateToStep(stepIndex) {
        //     currentStep = stepIndex;
        //     showStep(currentStep);
        //     updateProgressBar(currentStep);
        // }
        

        nextButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                navigateToStep(index + 1);
            });
        });

        let playerCount = 1;
        const addPlayerBtn = document.getElementById('addPlayerBtn');
        const playerContainer =document.getElementById('playersContainer');

// addPlayerBtn.addEventListener('click',()=>{
    function addplayer (){
    playerCount++;

    // const playerContainer = document.getElementById('playersContainer');

    const playerInfo = document.createElement('div');
    playerInfo.className = 'playersinfo';

    const playerNameLabel = document.createElement('label');
    playerNameLabel.htmlFor = 'name' + playerCount;
    playerNameLabel.innerText = 'Player Name:';

    const playerNameInput = document.createElement('input');
    playerNameInput.type = 'text';
    playerNameInput.name = 'name' + playerCount;
    playerNameInput.id = 'name' + playerCount;
    playerNameInput.placeholder = 'Player ' + playerCount;
    playerNameInput.className ='box';

    const contactLabel = document.createElement('label');
    contactLabel.htmlFor = 'contact' + playerCount;
    contactLabel.innerText = 'Contact Number:';
    
    const contactInput = document.createElement('input');
        contactInput.type = 'number';
        contactInput.name = 'contact' + playerCount;
        contactInput.id = 'contact' + playerCount;
        contactInput.placeholder = 'Contact Player ' + playerCount;
        contactInput.className ='box';


        playerInfo.appendChild(playerNameLabel);
        playerInfo.appendChild(playerNameInput);
        playerInfo.appendChild(contactLabel);
        playerInfo.appendChild(contactInput);

        playerContainer.appendChild(playerInfo);
};
   


