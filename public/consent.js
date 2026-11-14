/* BIYU cookie consent + Meta Pixel. The Pixel loads only after the visitor accepts. */
(function () {
  var PIXEL_ID = "1580142217463699", KEY = "biyu-consent-v1";
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadPixel() {
    if (window.fbq) return;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function close(box) { if (box && box.parentNode) box.parentNode.removeChild(box); }

  function banner() {
    if (document.getElementById("biyu-consent")) return;
    var box = document.createElement("div");
    box.id = "biyu-consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Cookie choice");
    box.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;" +
      "background:#0D1C17;border:1px solid rgba(191,138,64,.45);border-radius:18px;padding:18px 20px;" +
      "box-shadow:0 20px 50px rgba(0,0,0,.6);font:15px/1.5 Inter,system-ui,sans-serif;color:#A9BAB3";
    box.innerHTML = '<p style="margin:0 0 12px"><b style="color:#EDE7DE">Can we measure our ads?</b> With your OK, we use Meta\'s pixel to see which of our adverts bring real enquiries. Nothing is tracked if you say no. <a href="/privacy#cookies" style="color:#C8A771">Details</a></p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '<button type="button" data-c="yes" style="flex:1;min-width:120px;cursor:pointer;border:0;border-radius:999px;padding:12px 18px;font:600 15px Inter,sans-serif;background:#BF8A40;color:#08120F">Accept</button>' +
      '<button type="button" data-c="no" style="flex:1;min-width:120px;cursor:pointer;border-radius:999px;padding:12px 18px;font:600 15px Inter,sans-serif;background:transparent;color:#EDE7DE;border:1px solid rgba(237,231,222,.35)">No thanks</button></div>';
    box.addEventListener("click", function (e) {
      var c = e.target.getAttribute && e.target.getAttribute("data-c");
      if (!c) return;
      set(c);
      close(box);
      if (c === "yes") loadPixel();
    });
    document.body.appendChild(box);
  }

  window.biyuConsent = { open: banner };
  function start() {
    var c = get();
    if (c === "yes") loadPixel(); else if (c !== "no") banner();
    document.querySelectorAll("[data-cookie-settings]").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); banner(); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
