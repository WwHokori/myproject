document.querySelectorAll('.essay-full-plan a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.section p').forEach(function(paragraph) {
            paragraph.classList.remove('highlight');
        });

        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        var paragraphs = targetElement.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add('highlight');
        });

        var offset = 100;
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        setTimeout(function() {
            paragraphs.forEach(function(paragraph) {
                paragraph.classList.remove('highlight');
            });
        }, 2000);
    });
});
