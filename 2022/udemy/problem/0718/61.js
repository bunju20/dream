const rotateRight = (head, k) => {
	if (!head) return null;

	let tail = head;
	let len = 1;

	while (tail.next) {
		tail = tail.next;
		len++;
	}

	tail.next = head;
	len = len - (k % len);

	if (len === 0) return head;

	while (len--) {
		tail = tail.next;
	}

	head = tail.next; 
	tail.next = null;

	return head;
};