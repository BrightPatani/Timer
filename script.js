let countdownInterval;

 // Get the values from the input fields, or a default of 0
function startCountdown() {
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    //convert total time to seconds
    const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
    
    //display an alert message if total time is 0 or less
    if (totalSeconds <= 0) return alert('Please enter a valid time!');

    //display the countdown timer
    document.getElementById('countdown-display').classList.add('show');
    
    //clear previous countdown timer
    clearInterval(countdownInterval);

    //initialize the remaining seconds with the totalSeconds value
    let remainingSeconds = totalSeconds;

    //Start the countdown and update the timer every second 
    countdownInterval = setInterval(() => {

        //alert user when countdown ends
        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
        }

        //calculate the number of days, hours, minutes and seconds
        const displayDays = Math.floor(remainingSeconds / 86400);
        const displayHours = Math.floor((remainingSeconds % 86400) / 3600);
        const displayMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const displaySeconds = remainingSeconds % 60;

        //update the countdown display with the calculated value 
        document.getElementById('day-display').textContent = displayDays.toString().padStart(2, '0');
        document.getElementById('hour-display').textContent = displayHours.toString().padStart(2, '0');
        document.getElementById('minute-display').textContent = displayMinutes.toString().padStart(2, '0');
        document.getElementById('second-display').textContent = displaySeconds.toString().padStart(2, '0');

        //decreases the seconds by 1
        remainingSeconds--;
    }, 1000);
}
