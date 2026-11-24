function orderTea(teaType) {
  function confirmOrder() {
    return `order confirmed for chai ${teaType}`;
  }

  return confirmOrder();
}

let result = orderTea('Masala chai');

console.log(result);
console.log('Hello')

console.log('Hello from watch')
