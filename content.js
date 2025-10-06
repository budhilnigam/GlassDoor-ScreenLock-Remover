function applyFixes() {
  // match div element with data-test="content-lock-container"
  const contentLockContainer = document.querySelector('div[data-test="content-lock-container"]');
  if (contentLockContainer && contentLockContainer.style.display !== 'none') {
    contentLockContainer.style.display = 'none';
    console.log('content-lock-container hidden');
  }

  // match div element with data-test="overlay-backdrop"
  const overlayBackdrop = document.querySelector('div[data-test="overlay-backdrop"]');
  if (overlayBackdrop && overlayBackdrop.style.display !== 'none') {
    overlayBackdrop.style.display = 'none';
    console.log('overlay-backdrop hidden');
  }

  // modify body style to make position relative
  if (document.body.style.position !== 'relative') {
    document.body.style.position = 'relative';
    console.log('Body position set to relative');
  }
}

// Run once immediately
applyFixes();

// Watch for DOM changes
const observer = new MutationObserver(() => {
  applyFixes();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true // also catch style resets
});
