if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>a(e,r),l={module:{uri:r},exports:c,require:b};s[r]=Promise.all(i.map((e=>l[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-wbMHzEog.js",revision:"38846bb972aa172ef1ecc3862166a01d"},{url:"assets/404.html-yy-dprkr.js",revision:"54c27534f202b2f1220ae8ff5e21f545"},{url:"assets/about.html-63RzNzvI.js",revision:"0f60b55a68a000747164f3d7a43b06fa"},{url:"assets/about.html-GOlMSGY3.js",revision:"1487890d82353430d41763cc49c7603a"},{url:"assets/AC5511.html-chUShxvM.js",revision:"a0ea61c3bfb3f155f6feea0f2a8227b6"},{url:"assets/AC5511.html-XF0e55Kl.js",revision:"725bbb5c63697e4264ac2ce1492e00a1"},{url:"assets/alumni_share.html-hjCxS9Am.js",revision:"5d87be5291f0d76c77d63dbd4b71e27a"},{url:"assets/alumni_share.html-kQHuP796.js",revision:"ee37ad3e765d0056bfe842f7fb328435"},{url:"assets/app-0xqQ9Rij.js",revision:"a76223ae02f9f8d51a291423b314ccdf"},{url:"assets/appreciate.html-lyb-yTsL.js",revision:"13630804ae006569d47b49f247651db9"},{url:"assets/appreciate.html-ZDjx8FfH.js",revision:"10b58bf091c82008fe98c5e62e319cb1"},{url:"assets/BIS_resource.html--6YrYLMb.js",revision:"747884bb49bbcf6b2af89da2a1315d79"},{url:"assets/BIS_resource.html-NwYqoJLc.js",revision:"762bb5c0f41edcc0c22893a5ae5cf51b"},{url:"assets/Canvas.html-wMhPT1UE.js",revision:"83ba79ea76cffca31483b05b981e88ca"},{url:"assets/Canvas.html-znCPK1ID.js",revision:"77f5fc718dd599bc818cf2919bc4626b"},{url:"assets/CityU_Portal.html-aztEcsdn.js",revision:"98171c50d3a83c2fe929f06e3a0b6660"},{url:"assets/CityU_Portal.html-NzEGRlO3.js",revision:"9af36d9e99bbea8f44e6c2fdb2a67b84"},{url:"assets/EF5042.html-_wguhx1C.js",revision:"3d41c19af809a7fa2e4422da7e93ae5b"},{url:"assets/EF5042.html-NHnUbz9-.js",revision:"3a5a36aec118510d9e3a8f145e9cc8c4"},{url:"assets/EF5052.html-II8VewkL.js",revision:"d55e0a417cd4933d1f17cccc3357e182"},{url:"assets/EF5052.html-ygum-EN_.js",revision:"bb0f215881095d438395b3bb04c1ba34"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/Hall_of_Fame.html-DLEiA9zQ.js",revision:"8650280467d2dda4bead286ada5bc6c4"},{url:"assets/Hall_of_Fame.html-ngIL6j2A.js",revision:"1b55e99844403d41e22756d5f529a08e"},{url:"assets/highlight.esm-d5-mOmZz.js",revision:"6bf7288803e670103bd9dbe2f2d21c86"},{url:"assets/how_to.html-8eLKMycd.js",revision:"28369aace47a7a290b8b561f62c6da89"},{url:"assets/how_to.html-bg8_gP03.js",revision:"71c972d9613bfe896839e6d0377aa001"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_P6GjQH3.js",revision:"ac333f17e5b88a7bcd7898e960a7b241"},{url:"assets/index.html-_uBTDn3O.js",revision:"7160ab9a959c5f025b8dd01e1518b95f"},{url:"assets/index.html--Dh_u0UX.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-0IxOX0hV.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-2cg2ZPd6.js",revision:"4333556a3d358088f937abbfb10494d3"},{url:"assets/index.html-3_faMEf2.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-59j0V3Yr.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-7Wq2frBL.js",revision:"998b825704b85476bd28bc1cc6b14225"},{url:"assets/index.html-82wSM1DA.js",revision:"86f0fcd1423f4b9457e96f7994c38df6"},{url:"assets/index.html-8fnXqQ6N.js",revision:"0a339b8a47349ab526681d6b24ec1020"},{url:"assets/index.html-8MLQ3qaC.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-a30C0xGW.js",revision:"f95dfbf2ef822c917856a33e51fbbbe9"},{url:"assets/index.html-ACIcY76H.js",revision:"7189fe487c91f6eb3ca6e8229f846163"},{url:"assets/index.html-aGSqiOHO.js",revision:"ce733ebd253f838adb3b54955ba03e4f"},{url:"assets/index.html-AXpS7jT9.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-bffLIl0X.js",revision:"7e635a59f072cffeec7ac671e572291f"},{url:"assets/index.html-bohVzj4z.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-cYaF2ROp.js",revision:"6aef94e1936025606258766f1a6f3b24"},{url:"assets/index.html-d2SCQbq_.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-dFME2Uz-.js",revision:"b591c34326d0db44b00603f545847d30"},{url:"assets/index.html-Dg_c2zjZ.js",revision:"e1d3f009aecf2d7bdea6195ca746730f"},{url:"assets/index.html-DJN4Tmz_.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-DJzG64UG.js",revision:"7ab37e50b4527182af602b49a2e011ad"},{url:"assets/index.html-DSRmTc3y.js",revision:"31f003b7ffff0ff4258a3db812680665"},{url:"assets/index.html-e_c3-uOO.js",revision:"547847c427d0d44854638ff695fb04d3"},{url:"assets/index.html-EbavgHQI.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-EiR3fuUW.js",revision:"d6ce71f3c686b17467c0f9156468f8b9"},{url:"assets/index.html-EVyax-EL.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-FhXfv3js.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-G4uzdpTx.js",revision:"b98ae004997475f71059b01f00c4587f"},{url:"assets/index.html-GV42UEFi.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-hA0QisAc.js",revision:"15a1375db8e36c5426a2cb919bec99a0"},{url:"assets/index.html-Hzf5zc4J.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-iaCZQo78.js",revision:"0cb308ddd3bcb42071a6b807ec89498f"},{url:"assets/index.html-iJpvG2pV.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-itfP4IWX.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-JAWrZDP8.js",revision:"fefa1a8bb7e2f63bff2fd7cf711ca1d9"},{url:"assets/index.html-JF6y4MT-.js",revision:"4174bfe550580a196415c4c8d620296e"},{url:"assets/index.html-JL-Ebcnk.js",revision:"9fc96d6284ed29baea3128086ba5a2a4"},{url:"assets/index.html-JL74Y3QT.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-Jn9wAkqG.js",revision:"d689da770f133a799143285eb0b31b8e"},{url:"assets/index.html-JZA8A89m.js",revision:"b6d615cac96c4c5527e56d2df664056c"},{url:"assets/index.html-K-s_JKm9.js",revision:"142fc7a93355b1b4352f2ce8d5102bc3"},{url:"assets/index.html-KnCnLTsG.js",revision:"4778324bc0d6dfe77bdd1693ea2201cc"},{url:"assets/index.html-LOEP8fKO.js",revision:"9d25f9b25bc1ede01e7b63c1a0085aa6"},{url:"assets/index.html-lOm0j6yA.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-lSebCjcI.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-lsjEJv8l.js",revision:"51a31ad744641591f7b99ed3c14de960"},{url:"assets/index.html-MUYTlpQ2.js",revision:"1dec83eeb867e0d7ba889bb71f273c02"},{url:"assets/index.html-N7nQoRW7.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-NCaUGVPw.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-NjtOq2cR.js",revision:"6fa0fb19a74d52896b0cfa056a78cb36"},{url:"assets/index.html-Npr5Q8z-.js",revision:"9f04bc7beb0e53a60e90b6f5ef566055"},{url:"assets/index.html-nvcXV8U4.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-ofBTek7g.js",revision:"ba9d819f2eeda79c9628a3c3d24af13e"},{url:"assets/index.html-p6FTaalO.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-PDa7M4Qw.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-PwfJJG82.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-QGxp0ekt.js",revision:"c103a4d67d1b64dd9315ddee458385a1"},{url:"assets/index.html-qsqnEH0f.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-RidUnnuF.js",revision:"7a299cae0ef05ac9ce2d9599f7fb4acc"},{url:"assets/index.html-S0IkMvdP.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-S4QCkyG0.js",revision:"72057701ed64663972ab0dcd55c1dffc"},{url:"assets/index.html-TNLF_bcW.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-uvT4nR-U.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-veM_0HLb.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-W1zZbWkI.js",revision:"779b390a12464fba74a8994d1b11e0db"},{url:"assets/index.html-WQ1UszkN.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-WyUiT-M9.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-XbHGJRM9.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-xu4giPBM.js",revision:"84b14679d1467bb550c665ed607636f4"},{url:"assets/index.html-xu9zbJWr.js",revision:"9f1b36505c5eedd2a583e525e4764c2f"},{url:"assets/index.html-XzJpAQZV.js",revision:"f6865b82d0cfa4bdcbe25b6a25761fa6"},{url:"assets/index.html-YAfNSWGj.js",revision:"cdab6eb4459e1e1642de519ce4e8a4b4"},{url:"assets/index.html-yXqu9G6y.js",revision:"f8216f182b6122fa0ae43a07778a65dd"},{url:"assets/index.html-ZBqlk93R.js",revision:"5d8dd73665a084c18700d7e6abd9c0d8"},{url:"assets/IS5010.html-cUm-ETbo.js",revision:"9d4f8bdde17a02f91da83329a992c245"},{url:"assets/IS5010.html-WknPH325.js",revision:"6376742a2880ee21d562a98ccb7afcef"},{url:"assets/IS5238.html-M5SMVyOu.js",revision:"dba85e9da3c04cfbdf3ca9d4827cc2ad"},{url:"assets/IS5238.html-rMWKNZCd.js",revision:"1a22822a7eb7a6c0ff0509cdd3bcd338"},{url:"assets/IS5311.html-HibY5Cl0.js",revision:"1792d1dc1cc9efcf0eadd9765e721dcc"},{url:"assets/IS5311.html-K0xKub-d.js",revision:"d7bcb20a2842f84c303cf36df3b61c21"},{url:"assets/IS5312.html-qoKCcOHZ.js",revision:"be09eb737dc36fdbc96f69f6ff0e47e5"},{url:"assets/IS5312.html-Rdz3AUUU.js",revision:"780d43e0d9de88668c002c49130a3688"},{url:"assets/IS5313.html-22x8hQiG.js",revision:"1d4c8a99388ca41323fb5f7213979ef8"},{url:"assets/IS5313.html-DD-5ZeJX.js",revision:"6d35dabe0d434425866073960bbc73d3"},{url:"assets/IS5314.html-IkNDNhV0.js",revision:"bea47c1438194ab26d7ee6ab0d7ce8c4"},{url:"assets/IS5314.html-O7wolg6f.js",revision:"7f63ccf4d7fd21e03b8ba09c4825d673"},{url:"assets/IS5411.html-HW9Ijqg1.js",revision:"a0ba8ecefaccc8e8ea214fca518034b3"},{url:"assets/IS5411.html-vVwc_XZu.js",revision:"28d96c45a208e722e6e762f731549169"},{url:"assets/IS5413.html-JD5VhiG6.js",revision:"f9f9e478cb50d1a154623842fcbed894"},{url:"assets/IS5413.html-rLhRQVyZ.js",revision:"dc0cd3f8b10cddfdf8743e43f163c242"},{url:"assets/IS5540.html-5UDloAVH.js",revision:"71c469863951b309527407a6b6c0ea7b"},{url:"assets/IS5540.html-APaha4li.js",revision:"aab534b27c23b0ab76b3d593a144f586"},{url:"assets/IS5540.html-b9rmNyaY.js",revision:"7f9f484811e0454cceec546eeaa29511"},{url:"assets/IS5540.html-fCVM8dGB.js",revision:"0ba5358106f5029a53548d1bd90e1466"},{url:"assets/IS5542.html-d2BpgZ8d.js",revision:"c201fc7dddde04df7a74e6c84c1190d1"},{url:"assets/IS5542.html-ZLW4rolm.js",revision:"1079f3640d8712d54d1a8f44eab9d235"},{url:"assets/IS5740.html-_O3qKaOA.js",revision:"047c08054147b117974501f8dc041c0a"},{url:"assets/IS5740.html-8h-0f9fw.js",revision:"906fcbee6d8a0898739a3d70e55bb370"},{url:"assets/IS5743.html-7IDlVFsR.js",revision:"d4d2193fb0cf6b4d4816b83d42763c17"},{url:"assets/IS5743.html-zkGAPYPl.js",revision:"1a7a0d5f50ec947fef33d6ec2a05ae85"},{url:"assets/IS5940.html-fAyte4EZ.js",revision:"8fc643d82db630adaddc37f6e625100c"},{url:"assets/IS5940.html-tN2ZnEVj.js",revision:"d0890ec77a926703d28f4465a0eb8e57"},{url:"assets/IS6200.html-SkMbhkFx.js",revision:"dd98db2226b113e0d51802fa330e7013"},{url:"assets/IS6200.html-ZsVL8y9z.js",revision:"7cdbd84e149bd2428691ee01ab4231ef"},{url:"assets/IS6322.html-BxCKb7hV.js",revision:"503b4585b838a60e5dff1a715d3f1c6e"},{url:"assets/IS6322.html-itpcQqnJ.js",revision:"5444cb8f582d6d7f53f7184df4995d92"},{url:"assets/IS6335.html-avVOIrJJ.js",revision:"9acce73070da4c0d8d89078b4522ea2c"},{url:"assets/IS6335.html-LskWbyWO.js",revision:"dcac88591412f41fb13d12df581d4c24"},{url:"assets/IS6400.html-53UAOdF9.js",revision:"052404f374c6014d6928a972e0e3ae2e"},{url:"assets/IS6400.html-XodRNt0s.js",revision:"1290fcfa3edc7e3ae20c9870e8494882"},{url:"assets/IS6421.html-2kYrfzZU.js",revision:"b8e568d0ac2332e930aef8518e93c8ff"},{url:"assets/IS6421.html-95wzAfdg.js",revision:"16a556fdae48237b828b3703127bcd5e"},{url:"assets/IS6523.html-848c9iix.js",revision:"e6fa027b67f70e7885724e75ae6a6005"},{url:"assets/IS6523.html-jcVbOqQb.js",revision:"7e58303e75554e26e0a92a5758578283"},{url:"assets/IS6620.html-Ur-rXDQh.js",revision:"40a865694534dae899b98f4877ffd184"},{url:"assets/IS6620.html-WseMX_9H.js",revision:"9310b1c919c1d8999ef351a047356bbd"},{url:"assets/IS6640.html-mNgPw9wk.js",revision:"4550bf4adcb70b03a3dae8b0123d86d6"},{url:"assets/IS6640.html-NjBcjpzM.js",revision:"8e15f1c6c9eaac7e231ce9e81edd7aa7"},{url:"assets/IS6912.html-P4i3x7a4.js",revision:"3a60b0aa7d55ea63bca196060397a3f7"},{url:"assets/IS6912.html-Vq8AXGYA.js",revision:"83bd9157efe149207ee5b5580f6725d2"},{url:"assets/IS6921.html-0iNcPsbY.js",revision:"da2c29cacc559d10d93a2b5b66064294"},{url:"assets/IS6921.html-Ph0jFLeE.js",revision:"1c98b77680d68b5da1700ffe4d55fbd8"},{url:"assets/IS6930.html-Jfm--hnp.js",revision:"b99b9e517f933a3dc404fc40ac139db4"},{url:"assets/IS6930.html-LjVdGugb.js",revision:"5d4db6aa021ffc1a0ab1cf7dd1ba43d6"},{url:"assets/IS6940C.html-D6FalqGu.js",revision:"cf4481f356fe3fc728d9d711f1fa9cca"},{url:"assets/IS6940C.html-gPlbNb85.js",revision:"04c9c5ee260874a87f26fe1419b186c4"},{url:"assets/IS6941.html-D5cVl5cZ.js",revision:"40688fd6747d63ddb88b52b2c9243aae"},{url:"assets/IS6941.html-LyPPxWUB.js",revision:"08ee53f01e64c56e47f436c70d4d134c"},{url:"assets/it_services.html-vQ0V1liw.js",revision:"6b9fd14d1bfcb0e6150c10fd361d47d7"},{url:"assets/it_services.html-zwMLRL__.js",revision:"cb98f721b06e4419c1c5cdd9f40a076d"},{url:"assets/league-gothic-h3edOfrm.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/league-gothic-oOjv4w16.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-wxYXAA-7.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/markdown.esm-ldiezHYe.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quickstart.html-A_C65aki.js",revision:"638e2f88c606209e2c7c5e8f492f76a9"},{url:"assets/quickstart.html-lG0mkO3f.js",revision:"d52a490a1f45f7d83a8828b7ed9bcf53"},{url:"assets/recurit.html-n5nPPVRH.js",revision:"8d50d5da62481ef66f0ce15b4e403f87"},{url:"assets/recurit.html-OKKNY_Mw.js",revision:"af1cd0b16b5dd2490c119b08a9c84ac5"},{url:"assets/reveal.esm-VPkcmA5b.js",revision:"1b338671488d39e2bf97507b369d4760"},{url:"assets/search.esm-KGLrHMK2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-j32CNurK.js",revision:"062f0b1cbf140ee77bf4e27aacd4fbf4"},{url:"assets/source-sans-pro-italic-kXLDr8ko.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-italic-r_ZvIQue.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-URCxwoo9.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-regular-1WEW6-y9.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-7ugzKlOX.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-vMQH-Lno.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-8K4hAz36.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-CdFA3Jgq.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-yZBXeD4J.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-0pB0ab1n.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-R0KDpyfN.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/source-sans-pro-semibolditalic-wk7IoV6c.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/style-pUfUv46b.css",revision:"9e8ca31247009d0d5d1ae1abd33ed9ee"},{url:"assets/time_arrangement.html-Hx30mUiz.js",revision:"505b01007910483c7da60301e4aa100e"},{url:"assets/time_arrangement.html-ooYfIMW7.js",revision:"e552044c1474def53b313045ad577628"},{url:"assets/trans_mse_tutorial.html-60NQbS-M.js",revision:"b66a0e8fef752b80d066815e2cdf7075"},{url:"assets/trans_mse_tutorial.html-YMNb10Ns.js",revision:"9e9964faaabdba2e1b6c3b99b80cbb11"},{url:"assets/useful_data.html-JAziEGBa.js",revision:"ab01f7332eb9cc82baa86c16d16b8592"},{url:"assets/useful_data.html-sohzVtua.js",revision:"1ff7d2f0d53466604ee851b235889bde"},{url:"assets/zoom.esm-w3VbP3hY.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"1091af49689022ce09b48ea233e2d47e"},{url:"article/index.html",revision:"f4738e1cb234283d55936bb3de4b82be"},{url:"category/index.html",revision:"bc770f2623a2c4ff0df20d94c8099ee4"},{url:"category/专业方向介绍/index.html",revision:"04a78fccc5e84ae738c1b18880d4837c"},{url:"category/课程相关/index.html",revision:"1dc7ce078d3f6b9459a83f1487b53d22"},{url:"elective/index.html",revision:"ba90ff02cfb823f21c3e195f83ce5c4a"},{url:"elective/IS5/index.html",revision:"7f7079e55fe2bcba61d2ff5ab906acc6"},{url:"elective/IS5/IS5314.html",revision:"b063a0ff156b4f53390e3eb9a1093e44"},{url:"elective/IS5/IS5542.html",revision:"d7617a4fd3628dbb79961b2770f222c3"},{url:"elective/IS5/IS5743.html",revision:"04bb0820c16560a048af2e6596611e82"},{url:"elective/IS5/IS5940.html",revision:"13451ebedeb12b0f4a7dcba1022b3462"},{url:"elective/IS6/index.html",revision:"313f8a7c041c2ba7616e24d6b9004661"},{url:"elective/IS6/IS6200.html",revision:"c1504750b8075bcf2725b1fe6840a7f0"},{url:"elective/IS6/IS6322.html",revision:"c7e0a130bfeaca959392cdc9d2c28f1e"},{url:"elective/IS6/IS6421.html",revision:"c78fdaf41f21f8d7c1b812af1394af49"},{url:"elective/IS6/IS6620.html",revision:"87d4d1d4bb86b40f448e5587f2470e79"},{url:"elective/IS6/IS6640.html",revision:"bab668a7286437e50dc9e8572afa7fed"},{url:"elective/IS6/IS6912.html",revision:"5a8243c53379c2065b6082b2d21a1ad0"},{url:"elective/IS6/IS6921.html",revision:"1be092a34aeebf62a538de3a550cc05a"},{url:"elective/IS6/IS6930.html",revision:"f349786ce9e1e5d717ab521564571a56"},{url:"elective/IS6/IS6940C.html",revision:"99dc388beee4799486eda3652c359d32"},{url:"FIT/Core_Course/AC5511.html",revision:"32ee7c618ca24ace73fc22df89db167c"},{url:"FIT/Core_Course/EF5042.html",revision:"d809796f399b4e5ee8238299ae518ad1"},{url:"FIT/Core_Course/index.html",revision:"06de930b7e8fbc2b40d0ddc6b7b6e89b"},{url:"FIT/Core_Course/IS5540.html",revision:"80e2827d787b28720b9c4dc1b81b5f76"},{url:"FIT/Core_Course/IS5740.html",revision:"843dbf60ccd7805873fe1cd31472e438"},{url:"FIT/Core_Course/IS6400.html",revision:"ae23585406e765ba3eecaf749a59cacb"},{url:"FIT/Core_Course/IS6523.html",revision:"6e007290cc57b511c84b491a06dd458b"},{url:"FIT/FIT_Elective/EF5052.html",revision:"8d47bf55c3ca5e2fd5210e05e1e5938d"},{url:"FIT/FIT_Elective/index.html",revision:"4058077e8fc594dbdc9708ac96bb84cd"},{url:"FIT/FIT_Elective/IS5010.html",revision:"67bc4aa8f24cc00dab21ea1460d24521"},{url:"FIT/FIT_Elective/IS5238.html",revision:"b3bef376aec1efba3577d2575f13eec5"},{url:"FIT/FIT_Elective/IS6941.html",revision:"95e2f11558dfe2a3ac706338a6695c0d"},{url:"FIT/index.html",revision:"c3d1172d63a954a971908e96ccb7402a"},{url:"General/about.html",revision:"2ed1022c5f590d1636d7cf76b4234888"},{url:"General/alumni_share.html",revision:"609dd50af5ad3392ddbbddd3a2425eb6"},{url:"General/appreciate.html",revision:"3e54a1aaa5a890ed9b6787ba2e28d029"},{url:"General/Hall_of_Fame.html",revision:"7055f3628c0b994538d92ed55dd1fded"},{url:"General/index.html",revision:"a0b02319132413a07238fdaa389e1b3d"},{url:"General/quickstart.html",revision:"d46ebe64cab648bb0b1834411bef8de6"},{url:"General/recurit.html",revision:"e23cbcfee48f3a9ec31ce6bde054dc3f"},{url:"index.html",revision:"54d83fa6d59faf2649937edf417c44a4"},{url:"MIS/Core_Course/index.html",revision:"1ad0dd5bf2a2495d38eadc2eec612e12"},{url:"MIS/Core_Course/IS5311.html",revision:"d61dcfa6504d5aaa8781b6ca95e57437"},{url:"MIS/Core_Course/IS5312.html",revision:"4741aad56be34488efb76b37b2c95b93"},{url:"MIS/Core_Course/IS5313.html",revision:"b9f1b62fc78c599b509fc44ed4fa826a"},{url:"MIS/Core_Course/IS5411.html",revision:"36d7e895add9a6e37c4a2cde3750f01b"},{url:"MIS/Core_Course/IS5413.html",revision:"e6f1fa40289f09b0721201f27559477c"},{url:"MIS/Core_Course/IS5540.html",revision:"5e6801c0f6b66ef8ded6ddf4ed3f80e5"},{url:"MIS/index.html",revision:"f61677744d2fdc35ef290ff990d18490"},{url:"MIS/MIS_Elective/index.html",revision:"2208c589cb08f3fd4d7989be1994d3fb"},{url:"MIS/MIS_Elective/IS6335.html",revision:"a6ac2218115f93aaab01039013e4bfb8"},{url:"star/index.html",revision:"edd1916cfcd83247a4f893476b428b6a"},{url:"tag/fit必修/index.html",revision:"26308fc0c35a54e31ec2d6b4a3e41602"},{url:"tag/fit计划内选修/index.html",revision:"e4d8dc6210925445bac4a045b49269b8"},{url:"tag/index.html",revision:"e8d6ecf334c436171cf86dcd81d314f1"},{url:"tag/mis必修/index.html",revision:"c79bce36332a358c911ef003e946e09e"},{url:"tag/mis计划内选修/index.html",revision:"54cbde8566835a1f5f2f1ff37df6f305"},{url:"tag/sema/index.html",revision:"06e03db538b4122472e4d4ff2bd0d0bc"},{url:"tag/semasemb/index.html",revision:"6fbaa25fcb7d61dc7c2913af3ccf4fa8"},{url:"tag/semb/index.html",revision:"4b6bd46f7b9e4b06f4807f965aa29f9f"},{url:"tag/st课程/index.html",revision:"2fdad1486e101bf82bdeb95e87a24ece"},{url:"tag/unknown/index.html",revision:"db9209b379859626279ed29f3659d878"},{url:"tag/公共选修课程/index.html",revision:"54a4ea792c2b25ebcaeec0a7333a38da"},{url:"tag/技术支持/index.html",revision:"45473db4ee729413e4a819a84b77fc97"},{url:"tag/网选/index.html",revision:"20be2691b35f4040f05c7077ba17f29c"},{url:"tag/论文课程/index.html",revision:"85322b942b5ea984bf6bd8a620c1003e"},{url:"tag/资源/index.html",revision:"d97f12842781e892e79ea935c277fdc1"},{url:"tag/选课/index.html",revision:"b8f2d1f1e5571fa42b8ab6ba1cfa7cdb"},{url:"tag/非网选/index.html",revision:"cfc36d7c0d9a7127820e1282b726627c"},{url:"Tech/Canvas.html",revision:"8a1995e358749fcac9df158f548895f9"},{url:"Tech/CityU_Portal.html",revision:"d04a78a5b9ed9e18331045d0f4edbc91"},{url:"Tech/index.html",revision:"504bf6edc4e719c39b4b3a4b98693be4"},{url:"Tech/it_services.html",revision:"b71c3c39d33160dc40cc5920b0637e9e"},{url:"timeline/index.html",revision:"2e8940969d6bcc553f37f2ba08056772"},{url:"Useful/CourseEnroll/how_to.html",revision:"8c677329952a2dfd0fdaf585b5fb6b3b"},{url:"Useful/CourseEnroll/index.html",revision:"c56b2b2c447a9087fc2598b96aff2e4d"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"6e73a08c75ed495366dbbd39dea6eca2"},{url:"Useful/CourseEnroll/useful_data.html",revision:"3388c6e1500533c0b0925be29175458c"},{url:"Useful/index.html",revision:"6ce494161d117c6a76aac597a77869c0"},{url:"Useful/Learning/BIS_resource.html",revision:"2de43129341396ce2c172a57c903af4f"},{url:"Useful/Learning/index.html",revision:"9062708c9dc5daf69a84cff308c4d8c2"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"f6e70029778aa39625d781d9a2d62e48"},{url:"AIMS_1.png",revision:"2ae4aee04c5608604b789faa89823dac"},{url:"AIMS_2.png",revision:"af35e3c10822031422242bb418f054f2"},{url:"AIMS_3.png",revision:"83f786b7abd2866bde1a55c4a660bacd"},{url:"AIMS_4.png",revision:"d51187c62b8dd8ac3cd49516d70f294e"},{url:"AIMS_5.png",revision:"5aae2f9db769813e42518b6e599d1dba"},{url:"ARRO_2.png",revision:"d2a64cd815a4eb670ef301897f626c4f"},{url:"assets/icon/apple-icon-152.png",revision:"c1660433e69bd633e170e835e487edeb"},{url:"assets/icon/chrome-192.png",revision:"f5e887aaa327ffd5cd24ac3a1f37a3c1"},{url:"assets/icon/chrome-512.png",revision:"66227a40d0a45aa520c069ea16e3d55c"},{url:"assets/icon/chrome-mask-192.png",revision:"e1c291574ef9f118a6cbe0c19c03c770"},{url:"assets/icon/chrome-mask-512.png",revision:"46b772147934d783f3c425420b983e0f"},{url:"assets/icon/ms-icon-144.png",revision:"5b196a3159578be35b1a2e0e5ff78f5d"},{url:"bg1dark.png",revision:"1a613b0b7124fc4b979735d016c2b82b"},{url:"BISlogo.jpg",revision:"b28de214fbe58704fe73234e0f08e146"},{url:"Canvas_1.png",revision:"6a611764027e824c2c1a5274fe1f7a1b"},{url:"Canvas_2.png",revision:"15ff41bd190950e70ef86865dec12955"},{url:"Canvas_3.png",revision:"88d22e06874d6817f05e343f96716ac2"},{url:"Canvas.png",revision:"b1dc1837db24cbc1b891543b784810ab"},{url:"CityUPortal.png",revision:"88db5c1a44935df88798035d0df16993"},{url:"logo.png",revision:"0fd58fab18c0a87073b8546907af35b2"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
