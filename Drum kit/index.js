let DrumKit = (function(){
    
    
    //cache DOM
    let keys = document.querySelectorAll('.key')
    console.log(typeof keys)
    
    
    //bind events
    window.addEventListener('keydown',playDrum);
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))
    
    
    
    function playDrum(e){
        
        const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
        if(!audio)return; //not the right key
        audio.currentTime = 0
        key.classList.add('playing')
        audio.play()
        
    }
    
    function removeTransition(e){
        
        if(e.propertyName !== 'transform'){
            return
        }
        e.target.classList.remove('playing')
        
    }
    
    
})();