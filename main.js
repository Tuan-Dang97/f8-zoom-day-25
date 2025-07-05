const checkAll = document.querySelector('#checkAll');
const itemCheck = document.querySelectorAll('.item-checkbox');
const countCheck = document.querySelector('#statusText');

let checkCount = 0;

checkAll.addEventListener('change', function() {
    if (checkAll.checked) {
        checkCount = 10;
    } else {
        checkCount = 0;
    }
    itemCheck.forEach(item => {
        item.checked = checkAll.checked;
    })
     countCheck.textContent = `Đã chọn ${checkCount} / 10 items`

     checkAll.indeterminate = false;
})

 
itemCheck.forEach(item => {
    item.addEventListener('change', function() {
        if (item.checked) {
            checkCount++
        } else {
            checkCount--
        }
        countCheck.textContent = `Đã chọn ${checkCount} / 10 items`
        if (checkCount === 10) {
            checkAll.checked = true;
            checkAll.indeterminate = false;
        } else if (checkCount === 0) {
            checkAll.checked = false;
            checkAll.indeterminate = false;
        } else {
            checkAll.indeterminate = true;
        }
    })
})