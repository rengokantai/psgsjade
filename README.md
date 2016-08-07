####psgsjade
######6 mixin
declare
```
mixin a
    p Hello
```
use
```
+a
```
If with parameter:
```
mixin b(param)
    p= param
```
use
```
+b("test")
```
If with attr
```
mixin c(id, param)
    p(id= id)= param
```
use
```
+c("ke","test")
```

declare variable
```
- var a ="a"
```
use
```
p #{a}
```

if/else
```
if a
    ...
else
    ...
```
array
```
- var arr = ["a","b"]
```
use
```
ul
each val in arr
    li= val
```
######7 Jade extends and include (no s)
parent template:
```
doctype html
html
    head
        block a
    body
        block b
```
child:
```
extends ../parent.jade
include ../mixins.jade

block a
    title ....
bokck b
    ...
```
mixins.jade
```
mixin a(param)
    ....
```
######9
select layer,ctrl T: resize