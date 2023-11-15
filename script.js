var loan = document.getElementById("loan");
  var interest = document.getElementById("interest");
  var tenure = document.getElementById("tenure");
  var btn = document.getElementById("button");
  var yearRadio = document.getElementById("year");
  var monthRadio = document.getElementById("month");
  var emiValue = document.getElementById("emi-value");
  var interestValue = document.getElementById("interest-value");
  var totalValue = document.getElementById("total-value");

  var loanAmount = parseFloat(loan.value);
  var interestRate = parseFloat(interest.value) / 100;
  var loanTenure = parseFloat(tenure.value);

  // check radio input
  var frequency = yearRadio.checked ? 12 : 1;

  // total amount of payment
  var n = loanTenure * frequency;
  var interestPerMonth = interestRate / frequency;

  // calculate emi
  const calculate = () => {
    let emi =
      loanAmount *
      interestPerMonth *
      (Math.pow(1 + interestPerMonth, n) / (Math.pow(1 + interestPerMonth, n) - 1));

    return emi;
  };

  // update the emi result value
  var updateData = (emi) => {
    emiValue.innerHTML = emi.toFixed(2);

    let totalAmount = emi * n;
    totalValue.innerHTML = totalAmount.toFixed(2);
    let totalInterest = totalAmount - loanAmount;
    interestValue.innerHTML = totalInterest.toFixed(2);
  };

  // assign the prevalue results
  const init = () => {
    let emi = calculate();
    updateData(emi);
  };
  init();

  // clean the input values
  const refreshInputs = () => {
    loanAmount = parseFloat(loan.value);
    interestRate = parseFloat(interest.value) / 100;
    loanTenure = parseFloat(tenure.value);
    frequency = yearRadio.checked ? 12 : 1;
    n = loanTenure * frequency;
    interestPerMonth = interestRate / frequency;
  };

  // calculate button click events
  btn.addEventListener("click", () => {
    refreshInputs();
    let emi = calculate();
    updateData(emi);
  });