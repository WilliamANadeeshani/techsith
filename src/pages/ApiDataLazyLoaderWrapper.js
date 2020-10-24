export  function fetchData() {
    let namePromise = fetchName();
    let addressPromise = fetchAddress();

    return{
        name: wrapPromise(namePromise),
        address: wrapPromise(addressPromise)
    }
};

function fetchName (){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Nadeeshani");
        }, 2000);
    });
}

let fetchAddress = ()=> {
    return  new Promise((res, rej) => {
        setTimeout(() => {
            res("Gonahena, kadawatha");
        }, 3000);
    });
}

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );

    return {
        read(){
            if(status === "pending"){
                throw suspender;
            }else if(status === "success"){
                return result;
            }else if(status === "error"){
                throw result;
            }
        }
    }
};



