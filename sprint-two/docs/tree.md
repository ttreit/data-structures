# Specification
<!-- ## IOCE -->
**Inputs**:
tree: value

addChild: value

contains: target value we're going to look for in tree

**Outputs**
tree: tree object value and children properties

addChild: object with value and children properties

contains: boolen

**Constraints**
tree: functional-shared style, children stored in an array called children

addChild: same as tree

contains: has to iterate through children

**Edge Cases**
tree: none

addChild:

contains: no children

# Justification
<!-- ## Purpose of Calling this Function -->
tree: creating a hierarchical data structure

addChild: add a node to tree

contains: check if value is in tree

# Explanation
<!-- ## Clearly state relationship between Inputs and Outputs in Plain English -->
tree: the value that we pass into the tree function becomes the value of the parent node object

addChild: the value we pass into addchild becomes the value of that child node object

contains: the value we pass into contains is used to test if tree has that value.

# Visualization
<!-- ## Whiteboard - draw plan that another engineer could understand. Use pictures and labels maybe sample data -->

<!-- select and copy image to clipboard -->
<!-- Use cmd + alt + v to paste (vsc paste image extn) -->
![](2020-04-14-13-37-26.png)

# Approximation
<!-- ## Pseudocode -->
<!-- Complete, without ambiguity, high level as possible, indented to show subordinate steps, translateable to one real line of code -->

## Tree - constructor
//create new object
//new tree assigns passed in value to the value property
//assigns an empty array to children property
//returns new tree object

## addChild
//create new tree node
//assign passed in value to value property
//assign empty array to children property
//push this new node into the children array of the object (this) that called addChild

## contains
//receive input value
//check if calling object has target value
  //if yes
    //return true
  //if no
    //does calling object have children?
      //if yes
        // check if children have target value
          // if yes
             //return true
          //if no check if children have children
            //if yes go back to check if children have target value
    // base case - if no children
//return false

# Verification
<!-- Use sample data to walk through pseudocode
Write one sanity test -->


# Implementation
<!-- Code! -->

