// Your code here
function createEmployeeRecord(array) {
    let testEmployee
    return testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(er, ds) {
    let date = ds.split(' ')[0]
    let hour = parseInt(ds.split(' ')[1])
    er.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: hour
    })
    return er
}

function createTimeOutEvent(er, ds) {
    let date = ds.split(' ')[0]
    let hour = parseInt(ds.split(' ')[1])
    er.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: hour
    })
    return er
}

function hoursWorkedOnDate(er, ds) {
    let timeIn = er.timeInEvents.find(x => x.date === ds)
    let timeOut = er.timeOutEvents.find(x => x.date === ds)
    let result = (timeOut.hour - timeIn.hour) / 100
    return result
}

function wagesEarnedOnDate(er, ds) {
    return hoursWorkedOnDate(er,ds) * er.payPerHour
}

function allWagesFor(er) {
    let datesWorked = er.timeInEvents.map(function(e) {
        return e.date
    })
    let pay = datesWorked.reduce(function(memo, i) {
        return memo + wagesEarnedOnDate(er, i)
    }, 0)
    return pay
}

function calculatePayroll(array) {
    let sum = array.map((e) => allWagesFor(e))
    return sum.reduce((num, sum) => num + sum)
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(x => {return x.firstName === firstName})
}