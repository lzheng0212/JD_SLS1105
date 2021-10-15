export function Events() {

}

export function Month(month) {
    this.month = month
    this.daysArray = []
    this.addDays = function (day) {
        return this.daysArray.push(day)
    }
}

export function Day(day) {
    this.day = day
    this.eventsArray = []
    this.addEvent = function (event) {
        return this.eventsArray.push(event)
    }
}

export function SingleEvent(eventCategorgies, eventDescription, eventLocation, eventTime, eventTitle) {
    this.eventCategorgies = eventCategorgies
    this.eventDescription = eventDescription
    this.eventLocation = eventLocation
    this.eventTime = eventTime
    this.eventTitle = eventTitle
}