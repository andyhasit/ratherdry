

/*

The objects in the database have two types of field:
  start with __ which are reserved for use by ratherdry.
  normal - which ratherdry doesn't touch.

Scenarios:

Save changes to a field:
  update field, save object.

New object:
  pass object with fields, get a new object back with the extra fields

setParentChild:
  child:
    set __[parentStore] = parent.id
  parent:
    add child.id to __[childStore]

getChildren:
  
  if cache use that, else:
    loop over __[childStore] to get ids, and fetch any uncached. (reverse order, cache what we fetch anyway?)


setManyToMany

*/


/*
 Load entire database?
    100 entries / day = 3000 for the month so say up to 10,000
*/

/*
One store, multiple indices

Or, one store for all relationships
*/