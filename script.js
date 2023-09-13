function calculateMinCost() {
  //your code here
    let arr=[4,2,7,6,9];
	let n=arr.length-1;
	let ans=0;
	for(let i=1;i<=n;i++){
		arr.sort((a,b)=>a-b);
		let sum=(arr[0]+arr[1]);
        arr.splice(0,2,sum);

        ans+=sum;
  }
	console.log( ans);
}  
