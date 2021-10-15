export function Month(month) {
    this.month = month
    this.eventsArray = []
    this.addEvent = function (event) {
        return this.eventsArray.push(event)
    }
}

export function SingleEvent(eventCategories, eventDescription, eventLocation, eventTime, eventTitle, eventDayOfTheMonth) {
    this.categories = eventCategories
    this.description = eventDescription
    this.location = eventLocation
    this.time = eventTime
    this.title = eventTitle
    this.dayOfTheMonth = eventDayOfTheMonth
}