// leetcode 206 反转链表

/*
    反转一个单链表。
    示例：
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代  双指针
var reverseList = function(head) {
    let prev = null
    let cur = head
    while(cur) {
        let tem = cur.next
        cur.next = prev
        prev = cur
        cur = tem
    }
    return prev
};
// 代码简化
var reverseList = function(head) {
    let prev = null
    let cur = head
    while(cur) {
        [cur.next, prev, cur] = [prev, cur,cur.next]
    }
    return prev
};

// 递归
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}