alert('Script loaded! Click the game and press Space or Tab');

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' || event.code === 'Tab') {
    event.preventDefault();
    
    const btn = document.querySelector('[data-action="pencil"]');
    if (btn) {
      // Simulate full click sequence
      btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      
      console.log('✅ Notes toggled!');
    } else {
      console.log('❌ Button not found!');
    }
  }
});