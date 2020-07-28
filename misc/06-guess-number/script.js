(function() {

        let numer = Math.ceil(Math.random() * 100);
        let guess = -1
        let guesscount = 0

        function guesser() {
            if (guess < 0) {
                guess = prompt("Please guess a number from 1 to 100");
                guesscount +=1;
                guesser()
            } else {
                if (guess == numer) {
                    alert('That is exactly right! And you only needed ' + guesscount + ' attempts.' )
                    }
                    else {
                        if (guess < numer) {
                            guess = prompt("You need to go higher! New attempt:");
                            guesscount +=1;
                            guesser()
                        } else {
                            if (guess > numer) {
                                guess = prompt("You need to go lower! New attempt:"); guesscount +=1; guesser()
                            }
                        }
                    }

                }
            }
        guesser()


})();