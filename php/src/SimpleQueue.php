<?php
interface Queue {
    public function push(mixed $item): void;
    public function pop(): mixed;
    public function count(): int;
}

class SimpleQueue implements Queue {
    private array $baseList;

    public function __construct(array $initial = []) {
        $this->baseList = $initial;
    }
    public function push(mixed $item): void {
        $this->baseList[] = $item;
    }
    public function pop(): mixed {
        return array_shift($this->baseList);
    }
    public function count(): int {
        return count($this->baseList);
    }
}
