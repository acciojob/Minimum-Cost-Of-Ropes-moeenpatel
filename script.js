function calculateMinCost() {
    const ropeLengthsInput = document.getElementById('rope-lengths').value;
  const ropeLengths = ropeLengthsInput.split(',').map(Number);

  function findMinimumCost(ropeLengths) {
    
    let totalCost = 0;
    const minHeap = new MinHeap();

    ropeLengths.forEach(length => minHeap.insert(length));

    while (minHeap.size() > 1) {
    
      const rope1 = minHeap.extractMin();
      const rope2 = minHeap.extractMin();

      const cost = rope1 + rope2;

      totalCost += cost;

      minHeap.insert(cost);
    }

    return totalCost;
  }

  function displayResult(minCost) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Minimum Cost: ${minCost}`;
  }

  const minCost = findMinimumCost(ropeLengths);
  displayResult(minCost);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return minValue;
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }
}  
