
interface arrProp {
    [ propName: string ]: string | number | boolean
}

function decodeUrlFun(str: string): arrProp{
    const arr: arrProp = {}
    for (let item of str.split('?')[1].split('&').map(item => item.split('='))){
        let name = decodeURI(item[0]), value = decodeURI(item[1])
        arr[name] = value
    }
    return arr
}


export {
    decodeUrlFun
}
