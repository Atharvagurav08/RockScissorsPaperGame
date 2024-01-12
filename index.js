let randomNumber;

    function checkComputerChoice(){
      randomNumber = Math.random()*3;
      if(randomNumber>0 && randomNumber<=1){
        return  'Rock';
      }else if(randomNumber>1 && randomNumber<=2){
        return 'scissors';
      }else{
        return 'Paper';
      }
    }

    function getResult(userMove , computerMove){
      if(userMove=== 'Rock'){
        if(computerMove==='Rock'){
          score.tie++;
          return `it's a tie`;
        }else if(computerMove === 'scissors'){
          score.win++;
          return `You've Won`;
        }else if(computerMove === 'Paper'){
          score.lost++;
          return 'Computer Won';
        }
      }else if(userMove === 'scissors'){
        if(computerMove==='Rock'){
          score.lost++;
          return 'Computer Won';
        }else if(computerMove === 'scissors'){
          score.tie++;
          return `it's a tie`;
        }else if(computerMove === 'Paper'){
          score
          .win++;
          return `You've Won`;
        }
      }else{
        if(computerMove==='Rock'){
          score.win++;
          return `You've Won`;
        }else if(computerMove === 'scissors'){
          score.lost++;
          return 'Computer Won';
        }else if(computerMove === 'Paper'){
          score.tie++;
          return `it's a tie`;
        }
      }

    }
    let score={
      win:0,
      lost:0,
      tie:0,
    }

    function printResult(UserChoice,computerChoice,resultMsg){
      alert(`You have chosen ${UserChoice}. Computer have chosen ${computerChoice} and ${resultMsg}`);
      let resultContainer = document.getElementById('resultContainer');
      let resultParagraph = document.createElement('p');
      resultParagraph.textContent = `You have chosen ${UserChoice}. Computer have chosen ${computerChoice} and ${resultMsg}`;
      resultContainer.appendChild(resultParagraph);

      let resultScore = document.getElementById('Scoring');
      resultScore.textContent=  `Won:${score.win} ,  Lost:${score.lost},  Tie: ${score.tie}.`;
      

        // Check if the total number of characters exceeds a certain limit
      const maxLength = 200; // Set your desired maximum number of characters
      let totalLength = 0;

       // Calculate the total length of all paragraphs
      resultContainer.childNodes.forEach((node) => {
      totalLength += node.textContent.length;
      });
      

       // If the total length exceeds the limit, clear the content
      if (totalLength > maxLength) {
      resultContainer.innerHTML = ''; // Clear the entire content
      resultContainer.appendChild(resultParagraph);
    }
      
    }