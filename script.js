document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');

    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            // Apply a subtle dynamic click effect over the CSS transition
            actionBtn.style.transform = 'scale(0.96)';
            setTimeout(() => {
                actionBtn.style.transform = '';
            }, 100);

            console.log('Welcome to your modern vanilla web project! Building aesthetic interfaces starts here.');
            // Add custom logic here
        });
    }
});
