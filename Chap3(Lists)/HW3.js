function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
   }
   function append(element) {
    this.dataStore[this.listSize++] = element;
   }
   function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
    return i;
    }
    }
    return -1;
   }
   function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
    }
    return false;
   }
   function length() {
    return this.listSize;
   }
   function toString() {
    return this.dataStore;
   }
   function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
    }
    return false;
   }
   function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
   }
   function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
    return true;
    }
    }
    return false;
   }
   function front() {
    this.pos = 0;
   }
   function end() {
    this.pos = this.listSize-1;
   }
   function prev() {
    if (this.pos > 0) {
    --this.pos;
    }
   }
   function next() {
    if (this.pos < this.listSize-1) {
    ++this.pos;
    }
   }
   function currPos() {
    return this.pos;
   }
   function moveTo(position) {
    this.pos = position;
   }
   function getElement() {
    return this.dataStore[this.pos];
   }      
   function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].trim();
    }
    return arr;
   }
   

//Question 1

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
   }
   function append(element) {
    this.dataStore[this.listSize++] = element;
   }
   function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
    return i;
    }
    }
    return -1;
   }
   function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
    }
    return false;
   }
   function length() {
    return this.listSize;
   }
   function toString() {
    return this.dataStore;
   }
   function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
    }
    return false;
   }
   function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
   }
   function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
    return true;
    }
    }
    return false;
   }
   function front() {
    this.pos = 0;
   }
   function end() {
    this.pos = this.listSize-1;
   }
   function prev() {
    if (this.pos > 0) {
    --this.pos;
    }
   }
   function next() {
    if (this.pos < this.listSize-1) {
    ++this.pos;
    }
   }
   function currPos() {
    return this.pos;
   }
   function moveTo(position) {
    this.pos = position;
   }
   function getElement() {
    return this.dataStore[this.pos];
   }      
   function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].trim();
    }
    return arr;
   }
function GreaterThan(element) {
    for (var i = 0; i < this.dataStore.length; ++i){
        if (element > this.dataStore[i]) {
            this.dataStore[this.listSize++] - element;
            break;
        }
    }
}
var numList = new List();
numList.append(23);
numList.append(4);
numList.append(24);
numList.append(51);
numList.append(89);
numList.append(100);

//Question 3

function student(name, gender) {
    this.name = name;
    this.gender = gender;
}

var std1 = new student("John", "M");
var std2 = new student("Alice", "F");
var std3 = new student("Ricky", "M");
var std4 = new student("Jon", "F");
var std5 = new student("Lerato", "F");
var std6 = new student("Karabo", "F");
var std7

var students = new List();

students.append("John", "M");
students.append("Alice", "F");
students.append("Ricky", "M");
students.append("Jon", "F");
students.append("Lerato", "F");
students.append("Karabo", "F");
students.append("")
