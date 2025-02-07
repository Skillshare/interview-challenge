import { SimpleQueue } from "./simple-queue";

describe("Simple Queue", () => {
    it("Adds and removes queue items properly", () => {
        const queue = new SimpleQueue([1,3]);
        queue.push(5);
        expect(queue.pop()).toBe(1);
        expect(queue.count()).toBe(2);
        expect(queue.pop()).toBe(3);
        expect(queue.pop()).toBe(5);

    })
});