const promise = new promise(function (resolve, reject) {
    console.log("Promise accepted")
    setTimeout(function () {
        console.log( " Async task 2 " );
    },1000)
})
