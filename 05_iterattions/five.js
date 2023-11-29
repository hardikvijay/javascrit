const coding=["js","ruby","cpp","java","python"]

coding.forEach(function(val){
console.log(val)
})

//by arrow function ->
coding.forEach( (item)=> {
    console.log(item)
})

function printme(he){
console.log(he)
}
coding.forEach(printme)

const mycoding=[
    {
        languagename:"javaascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"phython",
        languagefilename:"py"
    }
]
console.log("\n")
mycoding.forEach((item)=>{
    console.log(item.languagename)
})