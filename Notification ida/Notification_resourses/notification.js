/*
    Author: Samuel A. Matheson
    Email:samuelmatheson15@gmail.com

                        ║\
                        ║▒\
                        ║▒▒\
                        ║░▒║
                        ║░▒║
                        ║░▒║
                        ║░▒║
                        ║░▒║ 
                        ║░▒║
                        ║░▒║
                        ║░▒║
                        ▓▓▓▓
                        [█▓]
                        [█▓]
                        [█▓]
                        [█▓]

            U respect the code,or U get new holes
*/

/*
    If u dont nunderstand my code barf just use 'notify.new(notifiaction_title,notification_body);' to call the notification
*/
window.addEventListener('resize', () => { notify.clearall() })

let notify = {
    array: [],
    new: function (title, body, hover_title, ifunction) {

        let notification = document.createElement("div")
        notification.classList = "notification"

        let notification_title = document.createElement("div")//title
        notification_title.classList = "title"
        notification_title.innerHTML = title

        let nbody = document.createElement("div")//body
        nbody.classList = "notifbody"
        nbody.innerHTML = body;

        if (hover_title != undefined) {
            notification.title = hover_title
        } else {
            notification.title = 'click to dismiss'
        }

        notification.appendChild(notification_title)
        notification.appendChild(nbody)
        document.body.appendChild(notification)
        notify.array.push(notification)

        if (typeof (ifunction) == 'function') { //imbedded function

            notification.addEventListener('click', ifunction);
            //Close button
            let xbutton = document.createElement('div')
            xbutton.setAttribute('class', 'x-button')
            notification.appendChild(xbutton)
            xbutton.title = 'click to dismiss';
            xbutton.addEventListener('click', function (e) {
                e.stopImmediatePropagation();
                setTimeout(() => { notification.style.opacity = '0.0'; }, 100)
                notification.style.transform = 'translate(35vw,0)'
            })

        } else {

            notification.addEventListener('click', function () {
                setTimeout(() => {
                    this.style.opacity = '0.0';
                    this.style.zIndex = '-999';
                }, 100)
                this.style.transform = 'translate(22rem,0)'
            })

        }


        //Timing effects
        setTimeout(() => {
            notification.style.transform = 'translate(0,0)'
            notify.shove()
        }, 50);

        setTimeout(() => { notification.style.opacity = '0.0' }, 10000); //dissapear

        setTimeout(() => { document.body.removeChild(notify.array.shift()) }, 11000); //remove from document

    },
    shove: function () {

        var reverse = notify.array.length - 1;
        for (let i  in notify.array) {
            try {
                notify.array[i].style.transform = 'translate(0,' + -reverse * 9 + 'rem)';//9 rem., height of notification
            } catch (err) { console.log(err) }
            reverse--;//get it, because oposite
        }
        /*
        var notifications = document.querySelectorAll(".notification")
        console.log(notifications)
        for (let i = notifications.length + 1; i > 0; i--) {
            try {
                notifications[i].style.transform = 'translate(0,' + -i * 9 + 'rem)';//9 rem., height of notification
            } catch (err) { console.log(err) }
        }
        /*for (let i = 0; i < notifications.length - 1; i++) {
            try {
                notifications[i].style.transform = 'translate(0,' + Number(-i * 9) + 'rem)';//9 rem., height of notification
            } catch (err) {
                console.log(err)
            }
        }*/



        /*forEach((notification,key) => {
            try {
                console.log(key)
                notification.style.transform = 'translate(0,'+-key*9+'rem)';//9 rem., height of notification
            } catch (err) {
                console.log(err)
            }
        })*/
    },
    clearall: function () {
        document.querySelectorAll(".notification").forEach((notification) => {
            try {
                notification.style.opacity = '0.0';
                notification.style.transform = 'translate(0,0)'
                //document.body.removeChild(notification)
            } catch (err) {
                console.log(err)
            }
        })
    }
}