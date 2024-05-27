let userNum = Number(prompt('Введіть число'));

for (let i=1; i<=userNum ; i++){
   if (i%2===0){
    console.log(`число ${i} парне`);
   } else{
   console.log(`число ${i} непарне`);
   }
}
