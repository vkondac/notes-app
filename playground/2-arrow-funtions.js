const event = {
    name : 'Birthday party',
    guestList : ['Andrew','Jen','Vanja'],
    printGuestList(){
        console.log('guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending' + this.name)
        })
    } 

}

event.printGuestList()




