// Slay The Frame - Clean Interactive Scripts (Zero Popups)

document.addEventListener('DOMContentLoaded', () => {
  const REGISTRATION_URL = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=loKLa_-92EqTrYS8vzhC9d-T0WnmdRlChwoBkBbl185UQTVFUEE0RFdVUVU2RVZTRzQ0TVNOWkFWRC4u";

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Copy Registration Link with Clean Feedback
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyLinkBtn && copyBtnText) {
    copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(REGISTRATION_URL);
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = "Link Copied!";
        copyLinkBtn.classList.add('copied');

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyLinkBtn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        window.prompt("Copy registration link:", REGISTRATION_URL);
      }
    });
  }

  // Interactive Reel Like Button
  const heartAction = document.querySelector('.heart-action');
  if (heartAction) {
    let liked = false;
    const countEl = heartAction.nextElementSibling;
    heartAction.addEventListener('click', () => {
      liked = !liked;
      if (liked) {
        heartAction.style.color = '#ef4444';
        heartAction.style.background = 'rgba(239, 68, 68, 0.3)';
        heartAction.style.borderColor = '#ef4444';
        if (countEl) countEl.textContent = '2.9k';
      } else {
        heartAction.style.color = '';
        heartAction.style.background = '';
        heartAction.style.borderColor = '';
        if (countEl) countEl.textContent = '2.8k';
      }
    });
  }
});
