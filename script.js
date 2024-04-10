document.addEventListener('DOMContentLoaded', function() 
{
    function circlePop(event){
        const circle = document.createElement("div");
        circle.classList.add('circle');

        const rightPosition = Math.random() * (window.innerWidth); 
        const bottomPosition = Math.random() * (window.innerHeight);
        
        
        
        circle.style.right = rightPosition + 'px';
        circle.style.bottom = bottomPosition + 'px';
        document.getElementById('container').appendChild(circle); 
    }

    
    document.getElementById('generateButton').addEventListener('click', circlePop);
});
