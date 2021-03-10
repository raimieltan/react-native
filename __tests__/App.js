const isExpired = require("../components/helper/ticketDates")
const dateFilter = require("../components/helper/searchDate")

let dates = [
  new Date('2019-03-28'),
  new Date('2020-06-28'),
  new Date('2021-06-28')
]


it('mock dates', () => {
  let testDate = new Date("Sep 2 2021 11:00:00 GMT+0800")
  expect(isExpired(testDate)).toBe(false)

});

it('filter date', () => {
  let dates = [
    new Date('2019-03-28'),
    new Date('2020-06-28'),
    new Date('2021-06-28')
  ]
  
  expect(dateFilter(dates, 'year')).toStrictEqual([new Date('2021-06-28')])

});
