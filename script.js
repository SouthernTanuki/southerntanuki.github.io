document.addEventListener('DOMContentLoaded', function() {
    const emailTrigger = document.getElementById('emailTrigger');
    const emailModal = document.getElementById('emailModal');
    const modalClose = document.getElementById('modalClose');
    const modalBtn = document.getElementById('modalBtn');
    const emailAddress = 'you@youremail.com'; // Replace with your email

    emailTrigger.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(emailAddress);
            emailModal.classList.add('active');
        } catch (err) {

            const textarea = document.createElement('textarea');
            textarea.value = emailAddress;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            emailModal.classList.add('active');
        }
    });

    function closeModal() {
        emailModal.classList.remove('active');
    }

    modalClose.addEventListener('click', closeModal);
    modalBtn.addEventListener('click', closeModal);
    emailModal.addEventListener('click', function(e) {
        if (e.target === emailModal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && emailModal.classList.contains('active')) {
            closeModal();
        }
    });
});