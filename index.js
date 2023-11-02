var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
customerName();
upperCaseCustomerName();

function setBestCustomer() {
    bestCustomer = 'not bob';
}
bestCustomer();

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
bestCustomer();


const leastFavoriteCustomer = "tim";

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "tod"; 
  leastFavoriteCustomer = "tod";
}

changeLeastFavoriteCustomer();