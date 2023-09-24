// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    let newlist=cats.push(name)
    return newlist
}
function destructivelyPrependCat(name){
    let newlist=cats.unshift(name)
    return newlist
}
function destructivelyRemoveLastCat(){
    let newlist=cats.pop()
    return newlist

}
function destructivelyRemoveFirstCat(){
     let newlist=cats.shift()
    return newlist


}
function appendCat(name){
    let newlist=[...cats,name]
    return newlist
}
function prependCat(name){
    let newlist=[name,...cats]
    return newlist
}
function removeLastCat(){
    let newlist=cats.slice(0,-1)
    return newlist
}
function removeFirstCat(){
    let newlist=cats.slice(1)
    return newlist
}