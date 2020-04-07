# Specification - Functional Queue
<!-- ## IOCE (include side effects and things printing to screen) -->
## enqueue (string)
**Input**: string: value

**Output**: side effect add string to storage object with next available key

**Constraints**: No Arrays, No keywords **new**, **this**, or prototype chains. Don't capitalize the maker function name.

**Edge Cases**: Empty string passed in

## dequeue()
**Input**: None

**Output**: Return first item and delete from storage

**Constraints**: No Arrays, No keywords **new**, **this**, or prototype chains. Don't capitalize the maker function name.

**Edge Cases**: Empty queue

## size()
**Input**: None

**Output**: type: number - returns number of items in queue

**Constraints**: No Arrays, No keywords **new**, **this**, or prototype chains. Don't capitalize the maker function name.

**Edge Cases**: None


# Justification
<!-- ## Purpose of Calling this Function -->
## enqueue (string)
enqueue adds given string to the end of the queue

## dequeue()
dequeue removes and return the string from front of the queue

## size()
size returns the number of items in queue


# Explanation
<!-- ## Clearly state relationship between Inputs and Outputs in Plain English -->
## enqueue (string)
Takes a string and adds it to the back of the queue

## dequeue()
returns first item in queue and deletes it from storage after it's returned

## size()
returns the number of items in the queue

# Visualization
<!-- ## Whiteboard - draw plan that another engineer could understand. Use pictures and labels maybe sample data -->

<!-- select and copy image to clipboard -->
<!-- Use cmd + alt + v to paste (vsc paste image extn) -->
## enqueue and dequeue
![](2020-04-06-20-46-57.png) NOTE: at bottom of DQ section it should've started at 4 not 5. So i = 4, then i - 1, then i = 3.

## size()
(return i )

# Approximation
<!-- ## Pseudocode -->
<!-- Complete, without ambiguity, high level as possible, indented to show subordinate steps, translateable to one real line of code -->

create an empty storage object
set i = 0

## enqueue (string)
push k/v pair (i: string) into storage object
increment i

## dequeue()
return value with key '0' (create seperate function for this)
delete k/v pair at key i
decrement i
derement all keys

## size()
return i

# Verification
<!-- Use sample data to walk through pseudocode
Write one sanity test -->
## enqueue (string)
## dequeue()
## size()

Sanity Test
add three items
return size
dequeue an item
return size
add another item
return size


# Implementation
<!-- Go Code! -->

