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
mixin with array:(see lecture 18)
```
mixin arr(...items)
    ul(class="")
        each item in items
            li= item
```
use
```
+arr('a','b','c')
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
######17
import json data into jade file using gulp-data.  
json:
```
{
    "menuItems":[
        {"itemId":"about","itemLink":"#","itemAnchor":"about"},
        {"itemId":"exper","itemLink":"#","itemAnchor":"about"},
        {"itemId":"show","itemLink":"#","itemAnchor":"about"},
        {"itemId":"index","itemLink":"#","itemAnchor":"about"}
    ]
}
```
gulpfile.js
```
gulp.task('html',function(){
    gulp.src('jade/*.jade')
    .pipe(data(function(file){
        return require('./data.json');
    }))
    .pipe(jade({
        pretty:true
    })).pipe(gulp.dest('build')).pipe(livereload())
});
```
in jade file:
```
ul
    for menu in menuItems
        li ...
```
######18
foundation 6 class:
```
.medium-6.columns
```

######20 finishing the project
stylize social menu
```
ul#social-menu li {
	display:inline;
	float:left;
	width:33%;
	text-align:center;
}
```