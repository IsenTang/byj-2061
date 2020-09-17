
// 声明变量
// var a = 1;

// console.log('a ===>',a);

// // string
// var str = 'hello world';

// console.log(str.length);
// console.log(str.charAt(1))
// console.log(str.replace("world", "mars"));

// // number
// var num = 1;
// console.log(Math.max(2,3,4,99));
// console.log(Math.random());

// var numStr = '1aaa';

// // NaN not a number
// console.log(parseInt(numStr));
// var height = '10px'
// console.log(parseInt(height))

// // Boolean
// console.log(Boolean(0))

// console.log(Boolean(''))

// // null undefined
// var obj1;
// console.log(obj1);

// 对象
// var obj = new Object();
// obj.a = 1;
// obj.b = {
//     a:1
// }
// var a = 1;
// var b = a;

// a = 2;
// console.log('a ===>',a);
// console.log('b ===>',b);

// var obj = {
//     a: 1,
//     b:{
//         a:2
//     }
// }

// var obj1 = obj;

// obj1.a = 4;

// console.log('obj ===>',obj);
// console.log('obj1 ===>',obj1);

// var array = [2];
// array.push(1);
// console.log(array)
// // console.log(array.shift())
// console.log(array.join(''))

// function main(a,b,func){

//     for(var i = 0;i<arguments.length;i++ ){
//         console.log(arguments[i]);
//     }

//     console.log(arguments[2](arguments[0],arguments[1]));
// }

// function test(a,b){

//     return a+b
// }

// main(3,2,test,11,9999)

// Math.max(1,2,3,4,5)

// function main(str){

    // if(str){
    //     console.log(1);
    // }else{
    //     console.log(2);
    // }

    // switch (str) {
    //     case 'case1':
            
    //         console.log('we are in case1');
    //         break;
    
    //     case 'case2':
            
    //         console.log('we are in case2');
    //         break;
    //     default:
    //         console.log(123);
    //         break;
    // }

    // for(var i = 0;i<10;i++){

    //     console.log(i);
    // }
// }

// main()


function ajax(){

    $.ajax({
        type : "POST",
        async : true, // 设置同步方式  false代表同步步，true代表异步
        url : 'http://192.168.10.233:10000/banyuan/ajax',
        data : {
            status:'time'
        },
        success : function(result) {

            // innerHTML
            $('.main').html("<span>成功！</span>");
        },
        error : function(error){
            
            $('.main').html("<span>失败！</span>");
        }
    });
}


function test(){

    console.log(1);
}


