# Specification - Functional Queue
<!-- ## IOCE (include side effects and things printing to screen) -->
## enqueue (string)
**Input**: string: value

**Output**: side effect add string to storage object with next available key

**Constraints**: No Arrays

**Edge Cases**: Empty string passed in, non-string passed in

## dequeue()
**Input**: None

**Output**: Return first item and delete from storage

**Constraints**: No Arrays

**Edge Cases**: Empty queue

## size()
**Input**: None

**Output**: type: number - returns number of items in queue

**Constraints**: No Arrays

**Edge Cases**: Empty queue


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
## enqueue (string)


## dequeue()
## size()

# Approximation
<!-- ## Pseudocode -->
<!-- Complete, without ambiguity, high level as possible, indented to show subordinate steps, translateable to one real line of code -->
## enqueue (string)
## dequeue()
## size()

# Verification
<!-- Use sample data to walk through pseudocode
Write one sanity test -->
## enqueue (string)
## dequeue()
## size()


# Implementation
<!-- Code! -->
## enqueue (string)
## dequeue()
## size()
