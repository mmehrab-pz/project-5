let i = 0
        let s = 0
        let m = 0
        let _super
        function _start(self) {
            if(
                (self.getAttribute('data-status')) == 'off'
            ){
               _super = setInterval(_main, 10)
               self.setAttribute('data-status', 'on')
            }
        }
        function _stop(self){
            self.previousElementSibling.setAttribute('data-status' , 'off')
            clearInterval(_super)
        }
        function _reset(self){
            self.previousElementSibling.previousElementSibling.setAttribute('data-status' , 'off')
            clearInterval(_super)
            i = 0
            s = 0
            m = 0
            document.getElementById('mili').innerHTML = '0' + i
            document.getElementById('second').innerHTML = '0' + s
            document.getElementById('minute').innerHTML = '0' + m
        }

        function _main() {
            i++
            if (i > 99) {
                i = 0
                s++
                if (s > 59) {
                    s = 0
                    m++
                    if (m < 10) {
                        document.getElementById('minute').innerHTML = '0' + m
                    } else {
                        document.getElementById('minute').innerHTML = m
                    }
                }
                if (s < 10) {
                    document.getElementById('second').innerHTML = '0' + s
                } else {
                    document.getElementById('second').innerHTML = s
                }
            }
            if (i < 10) {
                document.getElementById('mili').innerHTML = '0' + i
            } else {
                document.getElementById('mili').innerHTML = i
            }
        }
        function _dark(){
            document.getElementById('btn').style.backgroundColor = 'white'
            document.getElementById('btn').style.transform = 'translateX(35px)' 
            document.getElementById('btn').parentElement.style.backgroundColor = 'black'
            document.getElementById('icon').style.color = 'black'
            document.getElementById('icon').style.transform = 'rotate(360deg)'
            document.getElementById('btn').removeAttribute('onclick')
            document.getElementById('btn').setAttribute('onclick' , '_light()')
            document.getElementById('sec').classList.add('body-color')
            document.getElementById('body-timer').classList.add('timer-color')
            document.getElementById('btn-time').classList.add('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[0].classList.add('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[1].classList.add('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[2].classList.add('timer-btn')

        }
        function _light(){
            document.getElementById('btn').style.backgroundColor = 'black'
            document.getElementById('btn').style.transform = 'translateX(0)' 
            document.getElementById('btn').parentElement.style.backgroundColor = 'white'
            document.getElementById('icon').style.color = 'white'
            document.getElementById('icon').style.transform = 'rotate(-360deg)'
            document.getElementById('btn').removeAttribute('onclick')
            document.getElementById('btn').setAttribute('onclick' , '_dark()')
            document.getElementById('sec').classList.add('body-color')
            document.getElementById('body-timer').classList.remove('timer-color')
            document.getElementById('btn-time').classList.remove('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[0].classList.remove('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[1].classList.remove('timer-btn')
            document.querySelectorAll('body>main>section>div:nth-of-type(2)>button')[2].classList.remove('timer-btn')
        }