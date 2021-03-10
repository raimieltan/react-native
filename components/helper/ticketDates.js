const isExpired =(date) => {

    const nowDate = new Date()
    const daysPassed = Math.ceil((nowDate - date) / 86400000)
    
    if(daysPassed >= 3){
        return true
    }

    return false
}

module.exports = isExpired;


// let testDate = new Date("Sep 2 2021 11:00:00 GMT+0800")


// console.log(isExpired(testDate))
