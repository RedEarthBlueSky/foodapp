let foodTitle: string = 'My favorite food:  Botti'
foodTitle = 'Chicken'
//  At the most basic level TS complains if we try to assign any value 
//  that is not a string to our food title.
foodTitle = 24
//  More useful is it complains if we try to assign a method 
//  that is not on the string object
foodTitle.toLowerCase() //  this is fine
//  foodTitle.upper* //  Nope
//  However, VS autocorrect takes care of this so kind of redundant

//  Any
let calories: any = 'any type here.'
calories = 24
calories = ['any frkn thing you want', 22]
//  defeats the purpose of TS.  I would see as bad practise
calories() //  even this does not complain


