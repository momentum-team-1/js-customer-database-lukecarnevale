function photoEl (){
    let targetEl = document.querySelector('.info')
    for(let customer of customers){
    let pictureEl = document.createElement('div')
    pictureEl.innerHTML = imageElement(customer.picture.large)
    pictureEl.appendChild(titleElement(`${customer.name.first} ${customer.name.last}`))
    pictureEl.appendChild(emailElement(customer.email))
    pictureEl.appendChild(streetElement(customer.location.street))
    pictureEl.appendChild(cszElement(`${customer.location.city}, ${nameToAbbr(customer.location.state)}, ${customer.location.postcode}`))
    pictureEl.appendChild(bdayElement(`DOB: ${moment(customer.dob).format('MMM Do, YYYY')}`))
    pictureEl.appendChild(regElement(`Customer since: ${moment(customer.registered).format('MMM Do, YYYY')}`))
    targetEl.appendChild(pictureEl)

    }
}

function imageElement (url){
    return `<img src=${url}>`
}

function titleElement (title) {
    let titleEl = document.createElement('h3')
    titleEl.innerText = `${title}`
    return titleEl
}

function emailElement (email) {
    let emailEl = document.createElement('h5')
    emailEl.innerText = `${email}`
    return emailEl
}
function streetElement (street) {
    let streetEl = document.createElement('p')
    streetEl.innerText = `${street}`
    return streetEl
}

function cszElement (csz) {
    let cszEl = document.createElement('p')
    cszEl.innerText = `${csz}`
    return cszEl
}

function bdayElement (bday) {
    console.log(bday)

    let bdayEl = document.createElement('p')
    bdayEl.innerText = `${bday}`
    return bdayEl
}

function regElement (reg) {
    let regEl = document.createElement('p')
    regEl.innerText = `${reg}`
    return regEl
}



photoEl()

