# Specification
<!-- ## IOCE -->
## push(string)
**Input**: string

**Output**: put the string in a storage object with index

**Constraints**: No arrays, keywords new, this, or prototype chains

**Edge Cases**: empty input

## pop()
**Input**: None

**Output**: return string at top of stack and remove it

**Constraints**: No arrays, keywords new, this, or prototype chains

**Edge Cases**: empty storage

## size()
**Input**: Nothing

**Output**: number of items in storage

**Constraints**: No arrays, keywords new, this, or prototype chains

**Edge Cases**: none

# Justification
<!-- ## Purpose of Calling this Function -->
## push(string)
push puts values on the stack
## pop()
returns and removes values from the stack
## size()
returns the number of items on the stack

# Explanation
<!-- ## Clearly state relationship between Inputs and Outputs in Plain English -->
## push(string)
Puts an item on the stack
## pop()
Removes item from stack and returns that item

## size()
Returns how many items are currently on the stack

# Visualization
<!-- ## Whiteboard - draw plan that another engineer could understand. Use pictures and labels maybe sample data -->

<!-- select and copy image to clipboard -->
<!-- Use cmd + alt + v to paste (vsc paste image extn)
-->
![](2020-04-07-15-49-49.png)

# Approximation
<!-- ## Pseudocode -->
<!-- Complete, without ambiguity, high level as possible, indented to show subordinate steps, translateable to one real line of code -->
set i = 0

declare stoarge object

## push(string)
add {i: string} to storage object

increment i

## pop()
decrement i

return {i: string}

delete (i: string)

## size()
return i

# Verification
<!-- Use sample data to walk through pseudocode
Write one sanity test -->

### Sanity Test

push three items

return size

pop an item

return size

push another item

return size


# Implementation
<!-- Go Code! -->
**Go Code!**
