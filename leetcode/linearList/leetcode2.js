// 2. 两数相加

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 此方法当数字过大时要采用BigInt，遍历次数也过多
var addTwoNumbers = function(l1, l2) {
    let str1 = ''
    while(l1 !== null) {
        str1 = l1.val + str1
        l1 = l1.next
    }
    let str2 = ''
    while(l2 !== null) {
        str2 = l2.val + str2
        l2 = l2.next
    }
    let result = (BigInt(str1) + BigInt(str2) + '').split('').reverse()
    // 链表 构造
    let head = null, cur = null
    result.forEach(item => {
        if (head) {
            cur.next = new ListNode(+item)
            cur =  cur.next
        } else {
            head = cur = new ListNode(+item)
        }
    })
    return head
};

var addTwoNumbers = function(l1, l2) {
    let head = null, cur = null, carry = 0;
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + carry
        if(head) {
            cur.next = new ListNode(sum % 10)
            cur = cur.next
        } else {
            head = cur = new ListNode(sum % 10)
        }
        carry = Math.floor(sum / 10)
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    // 最后一位有进位时补全
    carry > 0 && (cur.next = new ListNode(carry))
    return head

};
// 书写改进，去掉if判断
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(), cur = head, carry = 0;
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + carry
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        carry = Math.floor(sum / 10)
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    carry > 0 && (cur.next = new ListNode(carry))
    return head.next

};
