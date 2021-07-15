(()=>{"use strict";document.querySelectorAll('a[href*="#"]').forEach((e=>(e=>{"#"!==e.getAttribute("href")&&e.addEventListener("click",(t=>{t.preventDefault();const r=e.getAttribute("href").substr(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))})(e))),(()=>{const e=document.querySelector(".header-contacts__phone-number-accord"),t=document.querySelector(".header-contacts__phone-number-accord a"),r=document.querySelector(".header-contacts__arrow");r.addEventListener("click",(()=>{"0"!==t.style.opacity&&t.style.opacity?(e.style.top="0",t.style.opacity="0",r.style.transform="rotate(0)"):(e.style.top="25px",t.style.opacity="1",r.style.transform="rotate(180deg)")}))})(),(()=>{const e=document.querySelector(".popup-dialog-menu");window.addEventListener("click",(t=>{const r=t.target.closest(".popup-dialog-menu"),i=t.target.closest(".menu__icon"),n=t.target.closest(".menu-link"),o=t.target.closest(".close-menu");i?e.style.transform="translate3d(0, 0, 0)":(!r||o||n)&&e.removeAttribute("style")}))})(),(()=>{const e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".popup-repair-link"),r=e.querySelectorAll(".close");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),e.style.visibility="visible"}))})),r.forEach((t=>{t.addEventListener("click",(()=>{e.removeAttribute("style")}))}))})(),(()=>{const e=document.querySelector(".popup-consultation"),t=document.querySelectorAll(".btn-consult"),r=e.querySelector(".close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.visibility="visible"}))})),r.addEventListener("click",(()=>{e.removeAttribute("style")}))})(),(()=>{((e,t="+7 (___) ___-__-__")=>{const r=document.querySelectorAll(e);function i(e){const r=e.keyCode,i=t,n=i.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let s=0,a=i.replace(/[_\d]/g,(e=>s<o.length?o.charAt(s++)||n.charAt(s):e));s=a.indexOf("_"),-1!==s&&(a=a.slice(0,s));let c=i.substr(0,this.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=a),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of r)e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",i)})('input[name="phone"]');const e=document.querySelectorAll('input[name="phone"]'),t=document.querySelectorAll('input[name="name"]'),r=document.querySelectorAll('input[type="checkbox"]'),i=e=>!!e.value.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/),n=e=>!0===e.checked,o=function(){const e=this.form,t=e.querySelector("button"),r=e.querySelector('input[name="name"]'),o=e.querySelector('input[name="phone"]'),s=e.querySelector('input[type="checkbox"]');r?(e=>(e.value=e.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g,""),!(e.value.length<2)))(r)&&i(o)&&n(s)?t.disabled=!1:t.disabled=!0:i(o)&&n(s)?t.disabled=!1:t.disabled=!0};e.forEach((e=>{e.addEventListener("input",o)})),t.forEach((e=>{e.addEventListener("input",o)})),r.forEach((e=>{e.addEventListener("change",o)}))})(),(()=>{const e=document.createElement("div");e.classList.add("popup"),e.innerHTML='\n        <div class="sk-wave">\n            <div class="sk-rect sk-rect-1"></div>\n            <div class="sk-rect sk-rect-2"></div>\n            <div class="sk-rect sk-rect-3"></div>\n            <div class="sk-rect sk-rect-4"></div>\n            <div class="sk-rect sk-rect-5"></div>\n        </div>\n    ';const t=document.querySelector(".popup-thank"),r=t.querySelector(".close"),i=r=>{if(200!==r.status)throw new Error("Network status is not 200");t.style.visibility="visible",e.removeAttribute("style")},n=e=>{console.error(e)};document.addEventListener("submit",(t=>{t.preventDefault(),e.style.visibility="visible",document.body.append(e);const r=t.target,o=new FormData(r),s={},a=r.querySelectorAll("input");o.forEach(((e,t)=>{s[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(s).then(i).catch(n).finally((()=>(e=>{e.forEach((e=>e.value=""))})(a)))})),r.addEventListener("click",(()=>{t.removeAttribute("style")}))})(),(()=>{const e=document.querySelector(".popup-privacy"),t=document.querySelectorAll(".link-privacy"),r=e.querySelectorAll(".close");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),e.style.visibility="visible"}))})),r.forEach((t=>{t.addEventListener("click",(()=>{e.removeAttribute("style")}))}))})(),(()=>{const e=document.querySelectorAll(".title_block");e.forEach((t=>t.addEventListener("click",(()=>{t.classList.contains("msg-active")?t.classList.remove("msg-active"):(e.forEach((e=>e.classList.remove("msg-active"))),t.classList.add("msg-active"))}))))})(),(()=>{let e=[];const t=new Set,r=document.querySelector(".popup-dialog-repair-types"),i=r.querySelector(".nav-list-popup-repair"),n=r.querySelector(".popup-repair-types-content__head-title"),o=r.querySelector(".popup-repair-types-content-table__list tbody"),s=t=>{n.textContent=t,o.textContent="",e.filter((e=>e.type===t)).forEach((e=>{const t=document.createElement("tr");t.classList.add("mobile-row","showHide"),t.innerHTML=`\n                    <td class="repair-types-name">${e.name}</td>\n                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n                    <td class="repair-types-value">${e.units.replace(/м2/,"м<sup>2</sup>")}</td>\n                    <td class="repair-types-value">${e.cost}</td>\n                `,o.append(t)}))};fetch("../crm-backend/db.json").then((e=>{if(200!==e.status)throw new Error("Network status is not 200");return e.json()})).then((r=>{r.forEach((e=>{t.add(e.type)})),e=r})).then((()=>{t.forEach((e=>{const t=document.createElement("button");t.classList.add("button_o","popup-repair-types-nav__item"),t.textContent=e,i.append(t)}))})).then((()=>{r.addEventListener("click",(e=>{const t=e.target.closest(".popup-repair-types-nav__item");if(!t)return;const r=t.textContent;s(r)}))})).then((()=>s(Array.from(t)[0]))).then((()=>{const e=new Slider({main:".nav-popup-repair-types",wrap:".nav-list-popup-repair",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right",slidesToShow:1,initWidth:1024});e.init(),e.next.addEventListener("click",(()=>{s(Array.from(t)[e.options.position])})),e.prev.addEventListener("click",(()=>{s(Array.from(t)[e.options.position])}))})).catch((e=>{console.error(e)}))})(),(()=>{const e=document.querySelectorAll(".mobile-hide .formula-item__icon"),t=e=>{const t=document.querySelectorAll(".formula-slider__slide"),r=document.querySelectorAll(".formula-slider__slide .formula-item__icon");t.forEach((e=>e.style.opacity="0.4")),t[e].style.opacity="1",r.forEach((e=>e.classList.remove("active-item"))),r[e].classList.add("active-item")};e.forEach((e=>e.addEventListener("mouseenter",(t=>{const r=t.target.closest(".row");r&&(r.style.zIndex="1"),e.classList.add("active-item"),(e=>{e.querySelector(".formula-item-popup").getBoundingClientRect().y<0&&e.classList.add("rotate-item")})(e)})))),e.forEach((e=>e.addEventListener("mouseleave",(t=>{const r=t.target.closest(".row");r&&r.removeAttribute("style"),e.classList.remove("active-item"),e.classList.remove("rotate-item")}))));const r=new Slider({main:".formula-slider-wrap",wrap:".formula-slider",prev:"#formula-arrow_left",next:"#formula-arrow_right",slidesToShow:3,initWidth:1024,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:576,slideToShow:1}]});r.init(),r.prev.addEventListener("click",(()=>{window.innerWidth>576?t(1):t(0)})),r.next.addEventListener("click",(()=>{window.innerWidth>576?t(2):t(1)})),window.innerWidth>576?t(1):t(0)})(),(()=>{const e=new Slider({main:".repair-types-slider",wrap:".repair-types-wrapper",pagination:".repair-types-nav__item",slidesToShow:1,direction:"vertical"});e.init(),e.pagination.forEach((t=>{t.addEventListener("click",(()=>{e.pagination.forEach((e=>e.classList.remove("active"))),t.classList.add("active")}))}));const t=new Slider({main:".repair-types-nav",wrap:".nav-list-repair",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",slidesToShow:1,initWidth:1024});t.init(),t.prev.addEventListener("click",(()=>{e.options.position=t.options.position,e.scrollToPosition(),e.pagination.forEach((e=>e.classList.remove("active"))),e.pagination[e.options.position].classList.add("active")})),t.next.addEventListener("click",(()=>{e.options.position=t.options.position,e.scrollToPosition(),e.pagination.forEach((e=>e.classList.remove("active"))),e.pagination[e.options.position].classList.add("active")}));const r=new Slider({main:".types-repair1",wrap:".types-repair1-wrapper",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counterCurrent:".slider-counter-content__current-1",counterTotal:".slider-counter-content__total-1",infinity:!0,slidesToShow:1});r.init(),r.initCounter(),new Slider({main:".types-repair2",wrap:".types-repair2-wrapper",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counterCurrent:".slider-counter-content__current-2",counterTotal:".slider-counter-content__total-2",infinity:!0,slidesToShow:1}).init(),new Slider({main:".types-repair3",wrap:".types-repair3-wrapper",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counterCurrent:".slider-counter-content__current-3",counterTotal:".slider-counter-content__total-3",infinity:!0,slidesToShow:1}).init(),new Slider({main:".types-repair4",wrap:".types-repair4-wrapper",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counterCurrent:".slider-counter-content__current-4",counterTotal:".slider-counter-content__total-4",infinity:!0,slidesToShow:1}).init(),new Slider({main:".types-repair5",wrap:".types-repair5-wrapper",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counterCurrent:".slider-counter-content__current-5",counterTotal:".slider-counter-content__total-5",infinity:!0,slidesToShow:1}).init()})(),(()=>{const e=document.querySelector(".popup-transparency"),t=document.querySelectorAll(".transparency-item__img"),r=e.querySelectorAll(".close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.visibility="visible"}))})),r.forEach((t=>{t.addEventListener("click",(()=>{e.removeAttribute("style")}))}));const i=new Slider({main:".transparency-slider-wrap",wrap:".transparency-slider",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",slidesToShow:1,initWidth:1090,infinity:!0});i.init();const n=new Slider({main:".popup-transparency-slider-wrap",wrap:".popup-transparency-slider",prev:"#transparency_left",next:"#transparency_right",counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total",slidesToShow:1,infinity:!0});n.init(),i.prev.addEventListener("click",(()=>{n.options.position=i.options.position,n.scrollToPosition()})),i.next.addEventListener("click",(()=>{n.options.position=i.options.position,n.scrollToPosition()}))})()})();