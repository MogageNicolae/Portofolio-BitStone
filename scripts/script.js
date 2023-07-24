document.onload( () => {
    const currentPath = window.location.pathname;

    const menuItems = document.querySelectorAll('li');

    for (const menuItem of menuItems) {
        const href = menuItem.querySelector('a').href;

        if (href === currentPath) {
            menuItem.classList.add('current');
        } else {
            menuItem.classList.remove('current');
        }
    }
});