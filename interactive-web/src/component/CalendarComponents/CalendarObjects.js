export function Month (month) {
  this.month = month
  this.eventsArray = []
  this.addEvent = function (event) {
    return this.eventsArray.push(event)
  }
}

export function SingleEvent (eventCategories, eventDescription, eventLocation, eventTitle, startTime, endTime) {
  this.categories = eventCategories
  this.description = eventDescription
  this.location = eventLocation
  this.startTime = startTime
  this.endTime = endTime
  this.title = eventTitle
}
