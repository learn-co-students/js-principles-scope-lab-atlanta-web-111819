var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Jill'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Jane'
}
