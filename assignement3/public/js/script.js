window.onload = function(){
    console.log("Hello world !");
    for(let i = 0; i<10; i++)
    {
        setTimeout(function(){
            console.log("Counting... " + i);
        },i*200);
    }
}

