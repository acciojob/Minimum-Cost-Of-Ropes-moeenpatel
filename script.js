function minHeapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heapSize && arr[left] < arr[i]) {
        smallest = left;
    }

    if (right < heapSize && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        minHeapify(arr, smallest, heapSize);
    }
}

function buildMinHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        minHeapify(arr, i, n);
    }
}

function extractMin(arr, heapSize) {
    if (heapSize <= 0) return -1;
    if (heapSize === 1) {
        heapSize--;
        return arr.pop();
    }

    const root = arr[0];
    arr[0] = arr[heapSize - 1];
    heapSize--;
    minHeapify(arr, 0, heapSize);

    return root;
}

function calculateMinimumCost() {
    const inputElement = document.getElementById("inputRopes");
    const resultElement = document.getElementById("result");
    const ropeLengths = inputElement.value.split(",").map(Number);

    const heapSize = ropeLengths.length;
    buildMinHeap(ropeLengths);

    let totalCost = 0;

    while (heapSize > 1) {
        const min1 = extractMin(ropeLengths, heapSize);
        const min2 = extractMin(ropeLengths, heapSize);
        const newRope = min1 + min2;
        totalCost += newRope;
        ropeLengths.push(newRope);
        heapSize++;
    }

    resultElement.textContent = `Minimum Cost: ${totalCost}`;
}