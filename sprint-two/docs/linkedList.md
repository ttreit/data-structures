# Specification
<!-- ## IOCE -->

**Inputs**:
LinkedList:
Contains: value
Add to Tail: value
Remove Head:

**Outputs**:
LinkedList: object
Contains: boolean
Add to Tail: nothing
Remove Head: value

**Constraints**: have to use functional style,

**Edge Cases**: have empty linked list, try to remove something from an empty list

# Justification
<!-- ## Purpose of Calling this Function -->
LinkedList: Creates a data structure that has good insert big O
Contains: for looking up a value
Add to Tail: Insert value at end of linked list
Remove head: Removing first value

# Explanation
<!-- ## Clearly state relationship between Inputs and Outputs in Plain English -->
LinkedList:
Contains: receive a value and traverse the nodes to find and returns a boolean whether it exists or not
Add to Tail: receives a value and inserts the value after the last node
Remove Head: deletes the first node

# Visualization
<!-- ## Whiteboard - draw plan that another engineer could understand. Use pictures and labels maybe sample data -->

<!-- select and copy image to clipboard -->
<!-- Use cmd + alt + v to paste (vsc paste image extn) -->
![](2020-04-14-10-17-09.png)
![](2020-04-14-10-21-14.png)
![](2020-04-14-10-27-35.png)

# Approximation
<!-- ## Pseudocode -->
<!-- Complete, without ambiguity, high level as possible, indented to show subordinate steps, translateable to one real line of code -->
Add to Tail:
// 1 parameter - value
// create node(value)
// if list empty
  //point head to new node
  //point tail to new node
// else
  // update current list.tail's next property to point to new node
  // update tail to point to new node

Remove Head:
// get value at head
// point head to next node
// return value

Contains:
// Iterate through list
  // compare given value
  // if values match
    // return true
    // else return false after comparing all

# Verification
<!-- Use sample data to walk through pseudocode
Write one sanity test -->
add three nodes
look for value of node that exists
look for value of node that does not exist
remove head
add node


# Implementation
<!-- Code! -->
Go Code!
