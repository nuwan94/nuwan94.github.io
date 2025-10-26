---
title: "Data Structures: Notes and Implementations"
description: "A comprehensive guide to various data structures, their implementations, and use cases in programming."
pubDate: "2018-12-22"
tags: ["Data Structures", "Programming", "Algorithms", "Computer Science"]
---

Following are my notes and implementations of various data structures commonly used in computer science and programming. This guide covers fundamental data structures, their properties, operations, and practical use cases.

- Stack
- Queue
- Linked List
- Tree
- Graph
- Hash Table

Each section includes a brief overview of the data structure, its common operations, and example implementations in different programming languages. This resource is intended to help both beginners and experienced developers understand and utilize data structures effectively in their projects.

## Stack

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements can be added or removed only from the top of the stack.

### Operations

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes and returns the top element of the stack.
- **Peek**: Returns the top element of the stack without removing it.
- **isEmpty**: Checks if the stack is empty.

### Implementation (Python)

```python

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        raise IndexError("pop from empty stack")

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        raise IndexError("peek from empty stack")

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
```

## Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.

### Operations
- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes and returns the front element of the queue.
- **Front**: Returns the front element of the queue without removing it.
- **isEmpty**: Checks if the queue is empty.

### Implementation (Python)

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()
        raise IndexError("dequeue from empty queue")

    def front(self):
        if not self.is_empty():
            return self.items[-1]
        raise IndexError("front from empty queue")

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
```

## Linked List

A linked list is a linear data structure where each element (node) contains a value and a reference (link) to the next node in the sequence.

### Operations
- **Insert**: Adds a new node to the linked list.
- **Delete**: Removes a node from the linked list.
- **Search**: Finds a node with a specific value.
- **Display**: Prints the elements of the linked list.

### Implementation (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
    def insert(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    def delete(self, key):
        temp = self.head
        if temp is not None:
            if temp.data == key:
                self.head = temp.next
                temp = None
                return
        while temp is not None:
            if temp.data == key:
                break
            prev = temp
            temp = temp.next
        if temp is None:
            return
        prev.next = temp.next
        temp = None
    def search(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

## Tree

A tree is a hierarchical data structure consisting of nodes, where each node has a value and references to its child nodes. The topmost node is called the root.

### Operations
- **Insert**: Adds a new node to the tree.
- **Delete**: Removes a node from the tree.
- **Search**: Finds a node with a specific value.
- **Traversal**: Visits all nodes in the tree (in-order, pre-order, post-order).

### Implementation (Python)

```python
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key
class BinaryTree:
    def __init__(self):
        self.root = None
    def insert(self, key):
        if self.root is None:
            self.root = TreeNode(key)
        else:
            self._insert_rec(self.root, key)
    def _insert_rec(self, node, key):
        if key < node.val:
            if node.left is None:
                node.left = TreeNode(key)
            else:
                self._insert_rec(node.left, key)
        else:
            if node.right is None:
                node.right = TreeNode(key)
            else:
                self._insert_rec(node.right, key)
    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.val, end=" ")
            self.inorder_traversal(node.right)
```

There are different types of trees like binary trees, binary search trees, AVL trees, etc., each with its own properties and use cases.

## Graph

A graph is a collection of nodes (vertices) connected by edges. Graphs can be directed or undirected, weighted or unweighted.

### Operations
- **Add Vertex**: Adds a new vertex to the graph.
- **Add Edge**: Adds a new edge between two vertices.
- **Remove Vertex**: Removes a vertex and its associated edges.
- **Remove Edge**: Removes an edge between two vertices.

### Implementation (Python)

```python
class Graph:
    def __init__(self):
        self.graph = {}
    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []
    def add_edge(self, u, v):
        if u in self.graph and v in self.graph:
            self.graph[u].append(v)
            self.graph[v].append(u)  # For undirected graph
    def remove_edge(self, u, v):
        if u in self.graph and v in self.graph:
            self.graph[u].remove(v)
            self.graph[v].remove(u)  # For undirected graph
    def remove_vertex(self, vertex):
        if vertex in self.graph:
            del self.graph[vertex]
            for v in self.graph:
                if vertex in self.graph[v]:
                    self.graph[v].remove(vertex)
```

## Hash Table

A hash table is a data structure that implements an associative array, mapping keys to values using a hash function to compute an index into an array of buckets or slots.

### Operations
- **Insert**: Adds a key-value pair to the hash table.
- **Delete**: Removes a key-value pair from the hash table.
- **Search**: Retrieves the value associated with a given key.

### Implementation (Python)

```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
    def _hash(self, key):
        return hash(key) % self.size
    def insert(self, key, value):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        self.table[index].append((key, value))
    def delete(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
    def search(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None
```

This guide provides a foundational understanding of various data structures, their operations, and implementations. Mastery of these data structures is essential for efficient algorithm design and problem-solving in computer science.

Happy coding! 🚀