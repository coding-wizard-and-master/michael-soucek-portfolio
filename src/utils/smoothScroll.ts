// Utility to enable offset-aware smooth scrolling for in-page anchor links.
// Delegates clicks on <a href="#id"> links and scrolls accounting for
// a sticky header with the `.site-header` selector.
export default function initSmoothScroll(options?: { headerSelector?: string; offset?: number }) {
  const headerSel = options?.headerSelector ?? '.site-header';
  const extraOffset = options?.offset ?? 8; // small gap below header

  function getHeaderHeight() {
    const header = document.querySelector<HTMLElement>(headerSel);
    if (!header) return 0;
    const rect = header.getBoundingClientRect();
    return rect.height + extraOffset;
  }

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Find closest anchor element
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#!') return;

    const hash = href.split('#')[1];
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    // Prevent default jump and perform offset-aware smooth scroll
    e.preventDefault();

    const headerHeight = getHeaderHeight();
    const targetTop = el.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: Math.max(0, Math.floor(targetTop)), behavior: 'smooth' });

    // Update the URL hash without jumping
    // Use history.pushState to avoid adding duplicate entries when clicking same link
    try {
      history.pushState(null, '', `#${hash}`);
    } catch (err) {
      // fallback
      location.hash = `#${hash}`;
    }

    // Focus the element after a short delay so the browser has scrolled
    window.setTimeout(() => {
      if (typeof (el as HTMLElement).focus === 'function') {
        (el as HTMLElement).focus({ preventScroll: true });
      }
    }, 300);
  }

  document.addEventListener('click', handleClick);

  return function teardown() {
    document.removeEventListener('click', handleClick);
  };
}
