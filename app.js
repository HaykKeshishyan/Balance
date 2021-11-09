let users = [{ name: 'L', balance: 100400 },
    { name: 'Le', balance: 60000 },
    { name: 'Leq', balance: 60000 },
    { name: 'Lee', balance: 60000 },
    { name: 'Lwe', balance: 40000 },
    { name: 'Lwrwer', balance: 10000 },
    { name: 'Lwerwer', balance: 40000 },
    { name: 'Lvvv', balance: 10000 },
    { name: 'L', balance: 10000 },
    { name: 'Ldfg', balance: 10000 },
    { name: 'sdfL', balance: 10000 },
    { name: 'sdfsL', balance: 10000 },
    { name: 'dfafL', balance: 100400 },
    { name: 'Ladff', balance: 10000 },
    { name: 'afaffdL', balance: 10000 },
    { name: 'Ladfsafd', balance: 100400 }
];
let groupByBalance = users.reduce((accum, item) => {
      if(item.balance in accum) {
         accum[item.balance].push(item);
      } else {
        accum[item.balance] = [item]; 
     }
     return accum;
},{});

let groupByBalanceNew = users.reduce((accum, item) => {
    accum[item.balance] = (accum[item.balance] || 0) + 1;
    return accum;
}, {});

console.log(groupByBalance)
console.log(groupByBalanceNew);