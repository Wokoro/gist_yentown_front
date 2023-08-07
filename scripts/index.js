(() => {
    const authenticated = window.localStorage.getItem('user');

    const home = document.querySelector('#home')
    const messages = document.querySelector('#messages')
    const share = document.querySelector('#share')
    const log = document.querySelector('#log')

    if (authenticated) {
        if (home) home.style.display = 'inline'
        if (messages) messages.style.display = 'inline'
        if (share) share.style.display = 'inline'

        if (log) {
            log.href = '#'
            log.textContent = 'log out'
            log.addEventListener('click', () => {
                window.localStorage.removeItem('user')
                window.location.href = './home.html'
            })
        }
    } else {
        messages.style.display = 'none'
        share.style.display = 'none'
        log.style.display = 'inline'
    }
})()