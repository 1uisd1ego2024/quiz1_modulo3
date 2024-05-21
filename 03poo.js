class CuentaBancaria {

    constructor(saldoInicial) {
        this.saldo = saldoInicial;

    }


    depositar(cantidad) {

        this.saldo += cantidad;

    }

    retirar(cantidad) {

        if (cantidad <= this.saldo) {

            this.saldo -= cantidad;
            return cantidad;

        } else {
            return 'Fondos insuficientes';
        }

    }

    verSaldo() {

        return this.saldo;

    }




}


const cuenta = new CuentaBancaria(1000);

document.getElementById('output3').innerHTML = `El saldo actual es : ${cuenta.verSaldo()}`;  //Línea de código agregada por mí, tanto desde el HTML como en ésta línea de código


document.getElementById('transactionForm').addEventListener('submit', function (event) {




    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const transactionType = document.getElementById('transactionType').value;

    if (transactionType === 'deposit') {
        cuenta.depositar(amount);

    } else if (transactionType === 'withdrawal') {


        cuenta.retirar(amount);

        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === 'string') {
            alert(withdrawalResult)

        }

    }


    document.getElementById('output3').innerHTML = `El saldo actual es : ${cuenta.verSaldo()}`;  //Línea de código agregada por mí, tanto desde el HTML como en ésta línea de código

}

);