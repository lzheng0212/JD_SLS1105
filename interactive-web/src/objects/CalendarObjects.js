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

export function SingleEvent(eventCategories, eventDescription, eventLocation, eventTime, eventTitle) {
    this.categories = eventCategories
    this.description = eventDescription
    this.location = eventLocation
    this.time = eventTime
    this.title = eventTitle
}