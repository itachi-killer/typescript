// function uuidv4() {
//   return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//   );
// }

// console.log(uuidv4());
// const a=uuidv4();
// console.log(a);

// console.log(generateUUID);

// function e1() {
//     var u='',i=0;
//     while(i++<36) {
//         var c='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i-1],r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
//         u+=(c=='-'||c=='4')?c:v.toString(16)
//     }
//     return u;
// }

// console.log(e1())
// // function broofa() {
// console.log()

// var val = Math.floor(10000 + Math.random() * 90000);
// console.log("Glyde_"+val);

// // const s= Math.floor(1000000 + Math.random() * 9000000);
// // const a=56656;
// // console.log(a.toString());



function  broofa() {
    return 'xxxx4xxxyxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
   const rider_id = ()=> {
        return 'xxxx4xxxyxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
console.log(broofa())


console.log(rider_id)