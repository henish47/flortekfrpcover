/**
 * FLORTEK INDUSTRIES - Website Source Code & Inspection Protection
 * 
 * 1. Blocks right-click context menu (Inspect, View Source, Save As).
 * 2. Blocks all developer tools keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S, etc.).
 * 3. Prevents image dragging and extraction.
 * 4. Infinite dynamic debugger loop to freeze and trap browser DevTools if opened via browser menu.
 * 5. Console suppression and security warning banner.
 */

export function initSecurityProtection() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // 1. Disable Right Click (Context Menu)
  const disableContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  document.addEventListener('contextmenu', disableContextMenu, true);
  window.addEventListener('contextmenu', disableContextMenu, true);

  // 2. Disable DevTools and View Source Keyboard Shortcuts
  const blockShortcuts = (e) => {
    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const key = (e.key || '').toLowerCase();
    const code = e.keyCode;

    if (isCtrlOrCmd) {
      // Ctrl + Shift + I (Inspect)
      // Ctrl + Shift + J (Console)
      // Ctrl + Shift + C (Element selector)
      if (isShift && (key === 'i' || key === 'j' || key === 'c' || code === 73 || code === 74 || code === 67)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + U (View Source)
      if (key === 'u' || code === 85) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + S (Save Page)
      if (key === 's' || code === 83) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  };

  document.addEventListener('keydown', blockShortcuts, true);
  window.addEventListener('keydown', blockShortcuts, true);
  document.addEventListener('keyup', blockShortcuts, true);

  // 3. Prevent dragging images out of browser
  document.addEventListener('dragstart', (e) => {
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'SVG')) {
      e.preventDefault();
      return false;
    }
  }, true);

  // 4. Anti-Debugging DevTools Trap
  // Dynamically constructed debugger statement prevents minifiers from stripping it.
  // When DevTools is opened (even via browser 3-dots menu), browser halts repeatedly.
  let isDevToolsOpen = false;

  const antiDebug = () => {
    try {
      const startTime = performance.now();
      // eslint-disable-next-line no-new-func
      const debugFn = new Function('debugger');
      debugFn();
      const endTime = performance.now();

      // If execution paused significantly, DevTools is actively open
      if (endTime - startTime > 100) {
        isDevToolsOpen = true;
        console.clear();
      } else {
        isDevToolsOpen = false;
      }
    } catch {
      // silent fallback
    }
  };

  // Run anti-debug trap regularly
  setInterval(antiDebug, 300);

  // 5. Console Protection & Security Notice
  try {
    const renderNotice = () => {
      console.clear();
      console.log(
        '%c🔒 FLORTEK SECURITY SHIELD',
        'color: #1B8036; font-size: 26px; font-weight: 900; padding: 6px 0;'
      );
      console.log(
        '%cAll content, designs, and source code are protected proprietary assets of FLORTEK INDUSTRIES PVT. LTD. Unauthorized inspection or replication is strictly prohibited.',
        'color: #374151; font-size: 13px; font-weight: 500;'
      );
    };

    renderNotice();
    setInterval(renderNotice, 4000);
  } catch {
    // silent
  }
}
