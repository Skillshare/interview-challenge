<?php

use PHPUnit\Framework\TestCase;

class SimpleQueueTest extends TestCase
{
    public function testAddsAndRemovesQueueItemsProperly()
    {
        $queue = new \SimpleQueue([1, 3]);
        $queue->push(5);
        $this->assertEquals(1, $queue->pop());
        $this->assertEquals(2, $queue->count());
        $this->assertEquals(3, $queue->pop());
        $this->assertEquals(5, $queue->pop());
    }
}