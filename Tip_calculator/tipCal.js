document.addEventListener("DOMContentLoaded", function() {
    const billInput = document.getElementById('bill');
    const tipButtons = document.querySelectorAll('button[id^="btn"]');
    const customTipInput = document.getElementById('custom');
    const peopleInput = document.getElementById('headCount');
    const tipAmountDisplay = document.getElementById('distributeTip');
    const totalAmountDisplay = document.getElementById('distributeTotal');
    const resetButton = document.getElementById('reset');
    
    let billValue = 0;
    let tipPercentage = 0;
    let numberOfPeople = 1;

    billInput.addEventListener('input', updateBill);
    customTipInput.addEventListener('input', setCustomTip);
    peopleInput.addEventListener('input', updatePeople);
    resetButton.addEventListener('click', resetCalculator);

    tipButtons.forEach(button => {
        button.addEventListener('click', function() {
            tipPercentage = parseInt(this.innerText.replace('%', ''));
            customTipInput.classList.add('hidden');
            calculateTip();
        });
    });

    function updateBill() {
        billValue = parseFloat(billInput.value);
        calculateTip();
    }

    function setCustomTip() {
        tipPercentage = parseFloat(customTipInput.value);
        calculateTip();
    }

    function updatePeople() {
        numberOfPeople = parseInt(peopleInput.value);
        if (numberOfPeople <= 0) {
            numberOfPeople = 1;
        }
        calculateTip();
    }

    function calculateTip() {
        if (billValue > 0 && numberOfPeople > 0) {
            const tipAmount = (billValue * (tipPercentage / 100)) / numberOfPeople;
            const totalAmount = (billValue + (billValue * (tipPercentage / 100))) / numberOfPeople;
            tipAmountDisplay.value = tipAmount.toFixed(2);
            totalAmountDisplay.value = totalAmount.toFixed(2);
        }
    }

    function resetCalculator() {
        billInput.value = '';
        customTipInput.value = '';
        customTipInput.classList.add('hidden');
        peopleInput.value = '';
        tipAmountDisplay.value = '0.00';
        totalAmountDisplay.value = '0.00';
        billValue = 0;
        tipPercentage = 0;
        numberOfPeople = 1;
    }
});
