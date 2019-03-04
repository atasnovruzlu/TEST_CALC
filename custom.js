function CALC() {
    amount = Number(document.getElementById("amount").value);
    endterm = document.getElementById('endterm').selected == true;
    if (document.getElementById('six').selected == true) {
        earnings = amount * 5 / 100 * 6 / 12;
        total_amount = amount + earnings;
        // console.log(total_amount);
    }
    if (document.getElementById('twe').selected == true) {
        earnings = amount * 10 / 100 * 12 / 12;
        total_amount = amount + earnings;
    }
    if (document.getElementById('twfour').selected == true) {
        earnings = amount * 10.5 / 100 * 24 / 12;
        total_amount = amount + earnings;
    }

    // INTEREST PAYMENT

    if (endterm && document.getElementById('six').selected == true) {
        earnings = amount * 6 / 100 * 6 / 12;
        total_amount = amount + earnings;
    }
    if (endterm && document.getElementById('twe').selected == true) {
        earnings = amount * 10.4 / 100 * 12 / 12;
        total_amount = amount + earnings;
    }
    if (endterm && document.getElementById('twfour').selected == true) {
        earnings = amount * 11 / 100 * 24 / 12;
        total_amount = amount + earnings;
    }




    document.getElementById("earn").innerHTML = earnings;
    document.getElementById("total").innerHTML = total_amount;
}