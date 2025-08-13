let n=parseInt(prompt("how many fibonacci series?"));
    let f1= 1,f2=1,f3;
    console.log("output:"+f1);
    console.log("output:"+f2);
    for(let i=3;i<=n;i++)
    {
        let f3=f1+f2;
        console.log("output:"+f3);
        f1=f2;
        f2=f3;
    }