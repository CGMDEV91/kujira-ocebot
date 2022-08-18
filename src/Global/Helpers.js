export function numberWithCommas(x) {
    console.log(x);
    if(x === null || x === 0){
        return 'no data available';
    }
    if(x === undefined){
        return 0;
    }
    var parts = x.toString().split(",");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(".");
}