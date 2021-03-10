let dates = [
    new Date('2019-03-28'),
    new Date('2020-06-28'),
    new Date('2021-06-28')
]

const dateFilter= (dates, filter) => {

    
    // const dateMonth = date.getMonth()
    // const dateDay = date.getdate()
    // const dateHour = date.getHour()
    
    switch(filter){
        case "year":
        return dates.filter( (date) => {
            const dateYear = date.getFullYear()
            if(dateYear === new Date().getFullYear()){
                return true
            }
        })

        case "month":
            return dates.filter( (date) => {
                const dateMonth = date.getMonth()
                if(dateMonth === new Date().getMonth()){
                    return true
                }
                else{
                    console.log(dateMonth, new Date().getMonth())
                }
            })
   
    }


}


module.exports = dateFilter;