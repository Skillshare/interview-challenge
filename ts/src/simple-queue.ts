export interface Queue<T> {
    push: (t: T) => void;
    pop: () => T|undefined;
    count: () => number;
}

export class SimpleQueue<T> implements Queue<T> {
    private baseList: Array<T>;

    constructor(initial?: Array<T>) {
        this.baseList = initial ?? [];
    }

    push(t: T) {
        this.baseList.push(t);
    }

    pop(): T|undefined {
        return this.baseList.shift();
    }

    count(): number { 
        return this.baseList.length;
    }
    
}