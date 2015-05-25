# Enums

A naive JavaScript implementation of Enum and Mirror.

## Mask

```javascript
var Mask = require('enums').Mask;
```

```javascript
var Access = Mask([
	'USER',
	'ADMIN',
	'OWNER'
]);
// { USER: 1, ADMIN: 2, OWNER: 4 }

var canDelete = Access.ADMIN | Access.OWNER;

Boolean(Access.USER & canDelete); // false
Boolean(Access.ADMIN & canDelete); // true
```

```javascript
var NodeFilter = Mask([
	'ELEMENTS',
	'COMMENTS',
	'ATTRIBUTES',
	'TEXT'
], true);
// { ALL: 15, ELEMENTS: 1, COMMENTS: 2, ATTRIBUTES: 4, TEXT: 8 }

var whatToShow = NodeFilter.ALL;

Boolean(NodeFilter.COMMENTS & whatToShow); // true
```

## Mirror

```javascript
var Mirror = require('enums').Mirror;
```

```javascript
var Actions = Mirror([
	'TODO_ADDED',
	'TODO_REMOVED',
	'TODO_UPDATED'
]);
// { TODO_ADDED: 'TODO_ADDED',
//   TODO_REMOVED: 'TODO_REMOVED',
//   TODO_UPDATED: 'TODO_UPDATED' }
```

## License

MIT
