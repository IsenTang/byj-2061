// let ele = document.getElementById('test');

// console.log(ele);
// //混合使用
// let children = ele.getElementsByTagName('div');

// console.log(children)


// let elementByCssId = document.querySelector('#test')

// // console.log(elementByCssId);

// let elementByCssClass = document.querySelector('.test')
// // console.log(elementByCssClass);
// let allElementByCssClass = document.querySelectorAll('.test')
// console.log(allElementByCssClass);

// var inputEle = document.getElementById('input');

// var val = inputEle.getAttribute('style');
// console.log(val);
// inputEle.setAttribute('value','test');

// function test(){

    // console.log('test');

    var inputEle = document.getElementById('input');

    // inputEle.onfocus = function(){

    //     console.log('focus');
    // }

    // inputEle.onblur = function(){

    //     console.log('blur');
    // }
    
    inputEle.onkeydown = function (){

        // console.log(inputEle.value);
    }

    inputEle.onkeyup = function (){

        // console.log('onkeyup');
        console.log(inputEle.value);
    }
    // inputEle.setAttribute('value','test');

    var containerEle = document.getElementsByClassName('container')[0];

    containerEle.onmouseover = function (){

        console.log(1);
    }

    containerEle.onmouseout = function (){

        console.log('out');
    }

    containerEle.onclick = function (){

        console.log('click');
    }
// }

function test(){

    containerEle.style.backgroundColor = 'yellow'
}



// 1.用户名要求
// 2.用户名不重复

// document.getElementById('test-wirte').innerText = '<div>123</div>';

inputEle.onblur = function(){

    document.getElementById('test-wirte')
    .innerText = '用户名有问题';

}

inputEle.onfocus = function(){

    document.getElementById('test-wirte')
    .innerText = '';
}