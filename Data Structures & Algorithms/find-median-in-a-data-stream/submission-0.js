class MedianFinder {
    constructor() {
        // maxHeap for the lower half (stores negatives so the largest number is at the top)
        this.maxHeap = new PriorityQueue((a, b) => b - a);
        // minHeap for the upper half
        this.minHeap = new PriorityQueue((a, b) => a - b);
    }

    addNum(num) {
        // Add to maxHeap first
        this.maxHeap.enqueue(num);
        // Move the largest of the lower half to the upper half
        this.minHeap.enqueue(this.maxHeap.dequeue());

        // Balance sizes: maxHeap can have at most 1 more element than minHeap
        if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }
        return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }
}