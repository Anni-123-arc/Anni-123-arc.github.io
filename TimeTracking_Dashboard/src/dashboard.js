let work = document.getElementById('work');
let play = document.getElementById('play');
let study = document.getElementById('study');
let Exe = document.getElementById('Exe');
let social = document.getElementById('social');
let SC = document.getElementById('selfC');
let featurearray = [work, play, study, Exe, social, selfC];
console.log(featurearray[0].innerText);
let D = document.getElementById('daily');
let W = document.getElementById('week');
let M = document.getElementById('month');

D.onclick = function daily() {

    fetch('data.json')
        .then((request) => {
            // Check if the request was successful
            if (!request.ok) {
                console.log('Oops! Something went wrong.');
                return null;
            }

            // Parse the JSON response if the request was successful
            return request.json();
        })
        .then((data) => {
            // Check if data is properly fetched

            // Iterate through each item in the data array
            //  const element = featurearrayarray[index];
            data.forEach(item => {
                if (item.title === 'Work') {
                    work.innerText = item.timeframes.daily.current
                    //   console.log()
                }
                if (item.title === 'Play') {
                    play.innerText = item.timeframes.daily.current
                    //   console.log()
                }
                if (item.title === 'Study') {
                    study.innerText = item.timeframes.daily.current
                    //   console.log()
                }
                if (item.title === 'Exercise') {
                    Exe.innerText = item.timeframes.daily.current
                    //   console.log()
                }
                if (item.title === 'Social') {
                    social.innerText = item.timeframes.daily.current
                    //   console.log()
                }
                if (item.title === "Self Care") {
                    SC.innerText = item.timeframes.daily.current
                    //   console.log()
                }
            });


        })
        .catch((error) => {
            // Catch and log any errors that occur during the fetch or JSON parsing
            console.log('Error:', error);
        });

}



W.onclick = function week() {

    fetch('data.json')
        .then((request) => {
            // Check if the request was successful
            if (!request.ok) {
                console.log('Oops! Something went wrong.');
                return null;
            }

            // Parse the JSON response if the request was successful
            return request.json();
        })
        .then((data) => {
            // Check if data is properly fetched

            // Iterate through each item in the data array
            //  const element = featurearrayarray[index];
            data.forEach(item => {
                if (item.title === 'Work') {
                    work.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
                if (item.title === 'Play') {
                    play.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
                if (item.title === 'Study') {
                    study.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
                if (item.title === 'Exercise') {
                    Exe.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
                if (item.title === 'Social') {
                    social.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
                if (item.title === "Self Care") {
                    SC.innerText = item.timeframes.weekly.current
                    //   console.log()
                }
            });


        })
        .catch((error) => {
            // Catch and log any errors that occur during the fetch or JSON parsing
            console.log('Error:', error);
        });

}



M.onclick = function week() { 

    fetch('data.json')
        .then((request) => {
            // Check if the request was successful
            if (!request.ok) {
                console.log('Oops! Something went wrong.');
                return null;
            }

            // Parse the JSON response if the request was successful
            return request.json();
        })
        .then((data) => {
            // Check if data is properly fetched

            // Iterate through each item in the data array
            //  const element = featurearrayarray[index];
            data.forEach(item => {
                if (item.title === 'Work') {
                    work.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
                if (item.title === 'Play') {
                    play.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
                if (item.title === 'Study') {
                    study.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
                if (item.title === 'Exercise') {
                    Exe.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
                if (item.title === 'Social') {
                    social.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
                if (item.title === "Self Care") {
                    SC.innerText = item.timeframes.monthly.current
                    //   console.log()
                }
            });


        })
        .catch((error) => {
            // Catch and log any errors that occur during the fetch or JSON parsing
            console.log('Error:', error);
        });

}
