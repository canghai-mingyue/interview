// 141. 环形链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针
var hasCycle = function(head) {
    if(head === null) return false
    let slow = head
    let fast = head.next
    while(fast !== slow) {
        if(fast === null || fast.next===null) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true

};

// 哈希
var hasCycle = function(head) {
    if(head === null) return false
    let set = new Set()
    while(head) {
        if (set.has(head)){
            return true
        } else {
            set.add(head)
        }
        head = head.next
    }
    return false
};

// js特性 ，循环引用会报错
var hasCycle = function(head) {
    try {
        JSON.stringify(head)
        return false
    } catch (e) {
        return true
    }
};

// 标记法
var hasCycle = function(head) {
    if(head === null) return false
    while(head) {
        if (head.flag){
            return true
        } else {
            head.flag = true
        }
        head = head.next
    }
    return false
};