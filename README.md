# pair-constructor

---

### Table of Contents

*   [car][1]
*   [cdr][2]
*   [cons][3]
*   [isPair][4]
*   [stringify][5]

## car

Get the first element of the pair (`car`)

### Parameters

*   `pair` **Pair\<A, B>** 

### Examples

```javascript
const pair = cons(5, 'hello');

car(pair); // 5
```

Returns **A** 

## cdr

Get the second element of the pair (`cdr`)

### Parameters

*   `pair` **Pair\<A, B>** 

### Examples

```javascript
const pair = cons(5, 'hello');

cdr(pair); // hello
```

Returns **B** 

## cons

Pair constructor

### Parameters

*   `a` **A** 
*   `b` **B** 

### Examples

```javascript
const pair = cons(5, 'hello');
```

```javascript
const pair = cons(cons(1, null), 'world');
```

Returns **Pair\<A, B>** 

## isPair

Check if an entity is a pair

### Parameters

*   `cons` **Pair\<A, B>** 

### Examples

```javascript
const pair = cons(5, 'hello');

isPair(pair); // true
isPair(5); // false
```

Returns **[boolean][6]** 

## stringify

Convert a pair to a string

### Parameters

*   `pair` **Pair\<A, B>** 

### Examples

```javascript
toString(cons('', 10)); // ('', 10)
```

Returns **[string][7]** 

[1]: #car

[2]: #cdr

[3]: #cons

[4]: #ispair

[5]: #stringify

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
