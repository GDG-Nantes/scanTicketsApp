importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app_manifest.json",
    "revision": "7ddf4d7ee4548a182e112c158b5ebe1b"
  },
  {
    "url": "bower_components/granite-file-reader\\bower.json",
    "revision": "fcbb5e5a42c4634c54b13667a516d23b"
  },
  {
    "url": "bower_components/granite-file-reader\\demo\\index.html",
    "revision": "0e761f0ed9542737c9d23ee003fc7cf5"
  },
  {
    "url": "bower_components/granite-file-reader\\granite-file-reader.html",
    "revision": "301e60d734473796d65006d2428f9847"
  },
  {
    "url": "bower_components/granite-file-reader\\index.html",
    "revision": "f01195a6f13947954187c3fbb51e555c"
  },
  {
    "url": "bower_components/granite-file-reader\\LICENCE.md",
    "revision": "c7690c4edbc5ee792ee15560e1b9131c"
  },
  {
    "url": "bower_components/granite-file-reader\\README.md",
    "revision": "7f871a322b753401f210e09349d3b745"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\bower.json",
    "revision": "d156b5d8d1344fe8fd562ba9872da263"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\demo\\demo-not-web-rtc.html",
    "revision": "afded2c84b591666f0ff33589c2502e9"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\demo\\index.html",
    "revision": "631aaf5badc6c78dda8942db734b478b"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\granite-qrcode-scanner.html",
    "revision": "73ccedefd06faf42db16a67a63ab53d5"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\index.html",
    "revision": "f01195a6f13947954187c3fbb51e555c"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\LICENCE.md",
    "revision": "c7690c4edbc5ee792ee15560e1b9131c"
  },
  {
    "url": "bower_components/granite-qrcode-scanner\\README.md",
    "revision": "13ad25d615a8d37635a0452d3448f19d"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\bower.json",
    "revision": "ce3da28760e11aa20543c1eaefa2410d"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\CONTRIBUTING.md",
    "revision": "483ca3a3d2969c3fb215e0bb30613f7e"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\demo\\index.html",
    "revision": "7c5ab1637cf1f6fa34f0999be383b160"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\demo\\x-announces.html",
    "revision": "c92d2b4ce66d90f6dd7035bd5e969c0f"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\index.html",
    "revision": "88776a7513529faf429eebdb9fd7e716"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\iron-a11y-announcer.html",
    "revision": "a7481abe4e739db811c2f50a50c0af3a"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\README.md",
    "revision": "86af387cf37c30aea4e28ca98693a491"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\test\\index.html",
    "revision": "cda0e6f941eb02f72ad34ff4acd47185"
  },
  {
    "url": "bower_components/iron-a11y-announcer\\test\\iron-a11y-announcer.html",
    "revision": "d41ea17676468c35625a0338e64cf2c9"
  },
  {
    "url": "bower_components/iron-input\\bower.json",
    "revision": "9c85f3baade781ef527f750be5f0fd13"
  },
  {
    "url": "bower_components/iron-input\\CONTRIBUTING.md",
    "revision": "483ca3a3d2969c3fb215e0bb30613f7e"
  },
  {
    "url": "bower_components/iron-input\\demo\\cats-only.html",
    "revision": "32769f8b47f94945cdb50cfec89e7724"
  },
  {
    "url": "bower_components/iron-input\\demo\\index.html",
    "revision": "c87c31854e25bfe74250e47709636b82"
  },
  {
    "url": "bower_components/iron-input\\hero.svg",
    "revision": "52bafa2da925eca1f557b57083c9cbda"
  },
  {
    "url": "bower_components/iron-input\\index.html",
    "revision": "53c06c55498dd515ef364a1c41a0ae9b"
  },
  {
    "url": "bower_components/iron-input\\iron-input.html",
    "revision": "db3f680cc3a9cb280e167b27c799a187"
  },
  {
    "url": "bower_components/iron-input\\README.md",
    "revision": "c25dfffafff34503d3073dfac0f24bcf"
  },
  {
    "url": "bower_components/iron-input\\test\\disabled-input.html",
    "revision": "22991bd024f98603f9a3457b125a2904"
  },
  {
    "url": "bower_components/iron-input\\test\\index.html",
    "revision": "eac569c2f7323cdaa407ed4152afb0c7"
  },
  {
    "url": "bower_components/iron-input\\test\\iron-input.html",
    "revision": "f0476ea468343f2b2a2e02dd078c3e62"
  },
  {
    "url": "bower_components/iron-input\\test\\letters-only.html",
    "revision": "1dd0b9001e2d67a605f5f3f02075c944"
  },
  {
    "url": "bower_components/iron-meta\\bower.json",
    "revision": "0cde15f042e7d3209b61748e671d7119"
  },
  {
    "url": "bower_components/iron-meta\\CONTRIBUTING.md",
    "revision": "483ca3a3d2969c3fb215e0bb30613f7e"
  },
  {
    "url": "bower_components/iron-meta\\demo\\index.html",
    "revision": "f97ca4aafd3201865baab04e5cccfec0"
  },
  {
    "url": "bower_components/iron-meta\\hero.svg",
    "revision": "f22822c3757b3944576a404f9a746056"
  },
  {
    "url": "bower_components/iron-meta\\index.html",
    "revision": "a6fc19e4a98626c80aeaf253c7c04624"
  },
  {
    "url": "bower_components/iron-meta\\iron-meta.html",
    "revision": "096617a6902ecf280e60bd53c2fede0c"
  },
  {
    "url": "bower_components/iron-meta\\README.md",
    "revision": "ec713b4b8f277e9620d9b29e5642449b"
  },
  {
    "url": "bower_components/iron-meta\\test\\basic.html",
    "revision": "a67a1792deebee46f3686f6bb964d89f"
  },
  {
    "url": "bower_components/iron-meta\\test\\index.html",
    "revision": "fb749be64188847be5a2cd0c5e13c5f5"
  },
  {
    "url": "bower_components/iron-meta\\test\\iron-meta.html",
    "revision": "a7fa3ea66233cd448c569c1fc4da0526"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\bower.json",
    "revision": "82886400eb71effd34c6ba99e95bf11a"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\CONTRIBUTING.md",
    "revision": "483ca3a3d2969c3fb215e0bb30613f7e"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\demo\\cats-only.html",
    "revision": "e626c89c736addb7dbffda3873b1e415"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\demo\\index.html",
    "revision": "102d0be2c5611f10a0a70f1c6499dfec"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\demo\\validatable-input.html",
    "revision": "3909d5d5de4c1f27d9ca24eb695ff9c6"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\index.html",
    "revision": "230e2151859e88473e6cdb8fb186b107"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\iron-validatable-behavior.html",
    "revision": "2407cbbce90cf583f6657bac37bae2f9"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\README.md",
    "revision": "437099b22b66ca60c88e60d9883f4a1c"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\test\\cats-only.html",
    "revision": "320fcb41e5081b89c584ef9d56a256dc"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\test\\dogs-only.html",
    "revision": "1aca6a2eb016bf2c325ab9ba23473730"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\test\\index.html",
    "revision": "7db4675818e4017f30b0c164495922cf"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\test\\iron-validatable-behavior.html",
    "revision": "a56d1c293dd113e82c7e080aa6c5cb57"
  },
  {
    "url": "bower_components/iron-validatable-behavior\\test\\test-validatable.html",
    "revision": "551945b2329fb8f2901b65b56a49affb"
  },
  {
    "url": "bower_components/jsqrcode\\bower.json",
    "revision": "7f2f870e4510e6831f70b66ab5465d14"
  },
  {
    "url": "bower_components/jsqrcode\\dist\\jsqrcode.js",
    "revision": "67ec8054d48a01ebc70efcb5aeec90d8"
  },
  {
    "url": "bower_components/jsqrcode\\src\\alignpat.js",
    "revision": "1e58b6d563d49987403280b50692757a"
  },
  {
    "url": "bower_components/jsqrcode\\src\\bitmat.js",
    "revision": "8d18b552d807dcfe97f7848f85e5702a"
  },
  {
    "url": "bower_components/jsqrcode\\src\\bmparser.js",
    "revision": "c48502b57f83ec17935d44b4ac699657"
  },
  {
    "url": "bower_components/jsqrcode\\src\\datablock.js",
    "revision": "bf08eb72b68af0d3cf2c4306826922c3"
  },
  {
    "url": "bower_components/jsqrcode\\src\\databr.js",
    "revision": "422a59e8435e20e61c0aef1110dcb6b4"
  },
  {
    "url": "bower_components/jsqrcode\\src\\datamask.js",
    "revision": "a081e360268593ab57817200b24be5bc"
  },
  {
    "url": "bower_components/jsqrcode\\src\\decoder.js",
    "revision": "d406b3f8ccdba885b9d6a49abc8af700"
  },
  {
    "url": "bower_components/jsqrcode\\src\\detector.js",
    "revision": "a34db8774fa4aa3b2390725a918e4e53"
  },
  {
    "url": "bower_components/jsqrcode\\src\\errorlevel.js",
    "revision": "d24496ffc9a69c16bc5aac0ed40aefd8"
  },
  {
    "url": "bower_components/jsqrcode\\src\\findpat.js",
    "revision": "dd27264906f8eb4af9df8c5619f45356"
  },
  {
    "url": "bower_components/jsqrcode\\src\\formatinf.js",
    "revision": "b73cb5d77d7520b8430e5191a07228f7"
  },
  {
    "url": "bower_components/jsqrcode\\src\\gf256.js",
    "revision": "2850226ae5a3a2a1287e31c56e0e3d9b"
  },
  {
    "url": "bower_components/jsqrcode\\src\\gf256poly.js",
    "revision": "5a496ca11ae528d1988f2936b02c534b"
  },
  {
    "url": "bower_components/jsqrcode\\src\\grid.js",
    "revision": "4e6035e11c7069200863edbbac120342"
  },
  {
    "url": "bower_components/jsqrcode\\src\\qrcode.js",
    "revision": "c60e885c7657f6d0badc91d6cd8035e1"
  },
  {
    "url": "bower_components/jsqrcode\\src\\rsdecoder.js",
    "revision": "c2bd625c20ad34c368e5fe9ade8ae8cd"
  },
  {
    "url": "bower_components/jsqrcode\\src\\test.html",
    "revision": "5ec8f1ceb4f59d8ce5a7e38b57bdfbaf"
  },
  {
    "url": "bower_components/jsqrcode\\src\\version.js",
    "revision": "c6d740362454336c31fe55a4831d5fb1"
  },
  {
    "url": "bower_components/polymer\\bower.json",
    "revision": "49ba851d6b1dd9470054378c15bc45fa"
  },
  {
    "url": "bower_components/polymer\\closure.log",
    "revision": "111b428002709a6a7d9121bd5b04b6d4"
  },
  {
    "url": "bower_components/polymer\\externs\\closure-types.js",
    "revision": "2fd830d2bb35f40e33dcadad3a4182c3"
  },
  {
    "url": "bower_components/polymer\\externs\\polymer-externs.js",
    "revision": "7d8d426c3dc0acf0384f8d6336bbff00"
  },
  {
    "url": "bower_components/polymer\\externs\\webcomponents-externs.js",
    "revision": "edb98d34e57804337ba02e7afd716889"
  },
  {
    "url": "bower_components/polymer\\img\\migration.png",
    "revision": "776f25376159e5987ad1308522a10a40"
  },
  {
    "url": "bower_components/polymer\\index.html",
    "revision": "2fcd9f98fe8651a47523cfc642835dd7"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\array-selector.html",
    "revision": "7e4a9dd8ef76ddd0b1be7a7927a29664"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\custom-style.html",
    "revision": "9eeb5c0360db8368eb69e2e4975e0ee4"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\dom-bind.html",
    "revision": "2177669425e595962bdebcbdd49d0be1"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\dom-if.html",
    "revision": "74ba6e6ae107b30d3ff04446d7f15771"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\dom-module.html",
    "revision": "2a16a0339d949f90b90746d6fe5e565a"
  },
  {
    "url": "bower_components/polymer\\lib\\elements\\dom-repeat.html",
    "revision": "5d9ea6ab6c2c03ecab04e59b72166813"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\class.html",
    "revision": "da895bb44e80b9ebd58b1fc7b0420391"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\legacy-element-mixin.html",
    "revision": "5fb95bf1b4ef16f106a3f26ca342a6fc"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\mutable-data-behavior.html",
    "revision": "a5540926ee21f7c7293d3ad5c05be9b3"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\polymer-fn.html",
    "revision": "6fb533656a615f47737b9d4020d525a1"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\polymer.dom.html",
    "revision": "a9079a4c25b27da5d922f7afec218e48"
  },
  {
    "url": "bower_components/polymer\\lib\\legacy\\templatizer-behavior.html",
    "revision": "9b2b6b5d57381187dbf302ff534f8bef"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\element-mixin.html",
    "revision": "73632700407c2a71131fd5b5440b9614"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\gesture-event-listeners.html",
    "revision": "53e81a7596307802203f9fdb8f437bfd"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\mutable-data.html",
    "revision": "9895e7570814e172f569b3a09351827e"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\property-accessors.html",
    "revision": "266ce3d37a6ac7bc9fc6c49f198ee94e"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\property-effects.html",
    "revision": "2e6132173542434466599b568d637253"
  },
  {
    "url": "bower_components/polymer\\lib\\mixins\\template-stamp.html",
    "revision": "4d32cf7f4a0e2b12a0c546dc788fd434"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\array-splice.html",
    "revision": "e87f26f2c19dfdb1618bb731902a4f2c"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\async.html",
    "revision": "304fdfc0dad0d9b1f3a2cd6cfb1d3856"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\boot.html",
    "revision": "ba90838d8bd70ef2f07feb1077be5ffe"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\case-map.html",
    "revision": "4d949c6dc8b68dd6f01bf54f06b3f37c"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\debounce.html",
    "revision": "bc1e7062466883e2be607363b99d5b7c"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\flattened-nodes-observer.html",
    "revision": "053f828a8553291fe8cb8c057ccb205f"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\flush.html",
    "revision": "bba45c8707ff9aa6800ec92a89352e99"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\gestures.html",
    "revision": "27a97247e72f749477410bcef8b70aec"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\import-href.html",
    "revision": "00f76d81e071f561a219da0735556330"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\mixin.html",
    "revision": "820fe15e8160fb365491dc341360a69e"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\path.html",
    "revision": "dc529dda65720e541e95bfa7f654dbff"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\render-status.html",
    "revision": "c8fff560a3ade79e2279111549a2fb23"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\resolve-url.html",
    "revision": "4de13f2e51342c13e689742280a8332f"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\style-gather.html",
    "revision": "de17d3cc13f521b1a040235aebf16eb9"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\templatize.html",
    "revision": "1630b0e342a65e27ae02f5a8a9fc1afc"
  },
  {
    "url": "bower_components/polymer\\lib\\utils\\unresolved.html",
    "revision": "48732bcda92c5b9c591d75f7c036f7a5"
  },
  {
    "url": "bower_components/polymer\\LICENSE.txt",
    "revision": "a798ede8c314cbc7a31b41bce0008d57"
  },
  {
    "url": "bower_components/polymer\\package.json",
    "revision": "f2886d8c698dfd478a02b0d8c36eae0c"
  },
  {
    "url": "bower_components/polymer\\polymer-element.html",
    "revision": "99ba63ce1234e975cbfc9e10962db5f6"
  },
  {
    "url": "bower_components/polymer\\polymer.html",
    "revision": "ff2cd4c34828a0ffe4677bf933618de4"
  },
  {
    "url": "bower_components/polymer\\README.md",
    "revision": "631ad61ed4a119d813ea06196ac55129"
  },
  {
    "url": "bower_components/polymer\\wct.conf.json",
    "revision": "b60500982ac3ae894f379f8f3c9f847e"
  },
  {
    "url": "bower_components/shadycss\\apply-shim.html",
    "revision": "75f54922d2507d0c43bdf946149c38b1"
  },
  {
    "url": "bower_components/shadycss\\apply-shim.min.js",
    "revision": "08e30080c20eb37772dee9ce5b5172b8"
  },
  {
    "url": "bower_components/shadycss\\apply-shim.min.js.map",
    "revision": "5d1b873c576771e4adc00c158e4df07f"
  },
  {
    "url": "bower_components/shadycss\\bower.json",
    "revision": "ad673160c4cb6f2f6fada0a0f9dcab7e"
  },
  {
    "url": "bower_components/shadycss\\custom-style-interface.html",
    "revision": "ceb0842ff6c53d8d13d6cf2345f41490"
  },
  {
    "url": "bower_components/shadycss\\custom-style-interface.min.js",
    "revision": "b0e3f9bf69d230bc246e0d3db613ef7a"
  },
  {
    "url": "bower_components/shadycss\\custom-style-interface.min.js.map",
    "revision": "5cd0fcaeb4b67a52111cc856f72883d3"
  },
  {
    "url": "bower_components/shadycss\\entrypoints\\apply-shim.js",
    "revision": "ed3d89db1c2af0735bd145eb13e91577"
  },
  {
    "url": "bower_components/shadycss\\entrypoints\\custom-style-interface.js",
    "revision": "a4a12b33a8396a67ac39eb0577f54505"
  },
  {
    "url": "bower_components/shadycss\\entrypoints\\scoping-shim.js",
    "revision": "e4ebf319b622c549d0d97baf3acf2ce1"
  },
  {
    "url": "bower_components/shadycss\\examples\\custom-style-element.js",
    "revision": "63733aa1ca6b4a23eab4c458dc3274c8"
  },
  {
    "url": "bower_components/shadycss\\examples\\document-style-lib.js",
    "revision": "6d167fe67b53acd87ab6eee214fe56fc"
  },
  {
    "url": "bower_components/shadycss\\externs\\shadycss-externs.js",
    "revision": "c9b88caeee26795cb303db135f46473c"
  },
  {
    "url": "bower_components/shadycss\\gulpfile.js",
    "revision": "4b5098261b285702f996e8d4fcc41391"
  },
  {
    "url": "bower_components/shadycss\\package.json",
    "revision": "f125ae1536566e07e87b9475aa640d09"
  },
  {
    "url": "bower_components/shadycss\\README.md",
    "revision": "13648ca623f1d392fa1f0ab71b3ffbaa"
  },
  {
    "url": "bower_components/shadycss\\scoping-shim.min.js",
    "revision": "1974f2d541a41c1a9eba7a42e502d1a5"
  },
  {
    "url": "bower_components/shadycss\\scoping-shim.min.js.map",
    "revision": "b0623fb8e41e9988b5fdea7cc6d3345d"
  },
  {
    "url": "bower_components/shadycss\\src\\apply-shim-utils.js",
    "revision": "67703bfaaa281736a04459cfd9ad1ff6"
  },
  {
    "url": "bower_components/shadycss\\src\\apply-shim.js",
    "revision": "a2ae58ef7c86beedaa19eef98e59da06"
  },
  {
    "url": "bower_components/shadycss\\src\\common-regex.js",
    "revision": "ecb2b61d3f4f6a95d701de5b47398d3f"
  },
  {
    "url": "bower_components/shadycss\\src\\common-utils.js",
    "revision": "a405528bf9d193f7e02d400b2710e38b"
  },
  {
    "url": "bower_components/shadycss\\src\\css-parse.js",
    "revision": "deb723d168358b310384a5db1a101d5b"
  },
  {
    "url": "bower_components/shadycss\\src\\custom-style-interface.js",
    "revision": "c59a53ee90ce43a3b3b8a61635273e7f"
  },
  {
    "url": "bower_components/shadycss\\src\\document-wait.js",
    "revision": "b7a5ce85e77980b964990fb6a914ae8d"
  },
  {
    "url": "bower_components/shadycss\\src\\document-watcher.js",
    "revision": "e1cf0ba3024750022e6f56539aadbd3b"
  },
  {
    "url": "bower_components/shadycss\\src\\scoping-shim.js",
    "revision": "54a1c8d811e7e780735d2aade1f5878a"
  },
  {
    "url": "bower_components/shadycss\\src\\style-cache.js",
    "revision": "9f03802093906e01b8ec9e8971d53c0b"
  },
  {
    "url": "bower_components/shadycss\\src\\style-info.js",
    "revision": "75f67bc2c04beded280e43e96240a957"
  },
  {
    "url": "bower_components/shadycss\\src\\style-placeholder.js",
    "revision": "bbb1a7f9b92559416b57bb1c78b418d5"
  },
  {
    "url": "bower_components/shadycss\\src\\style-properties.js",
    "revision": "7a39137656f29ab0f335d9513762efe8"
  },
  {
    "url": "bower_components/shadycss\\src\\style-settings.js",
    "revision": "8335506ee314e3346b30a8dc48b7eb89"
  },
  {
    "url": "bower_components/shadycss\\src\\style-transformer.js",
    "revision": "7bef433e9fa4c39070777dd0e3669beb"
  },
  {
    "url": "bower_components/shadycss\\src\\style-util.js",
    "revision": "01e790156ccac4c18d004a3340a76ee0"
  },
  {
    "url": "bower_components/shadycss\\src\\template-map.js",
    "revision": "619da773d3addbf785a0f897e59e589c"
  },
  {
    "url": "bower_components/shadycss\\wct.conf.json",
    "revision": "1f8a44d76cf3d03b1e587535aac10617"
  },
  {
    "url": "bower_components/webcomponentsjs\\bower.json",
    "revision": "0fe3ba59fb5e11f3e0604868114146fb"
  },
  {
    "url": "bower_components/webcomponentsjs\\CONTRIBUTING.md",
    "revision": "a2ed64f57d417796765ca62eb6541bc5"
  },
  {
    "url": "bower_components/webcomponentsjs\\custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\custom-elements-es5-adapter-index.js",
    "revision": "e89607d378bb2936a621cd3fd10c2f2e"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\webcomponents-hi-ce-index.js",
    "revision": "78a7f0a4e26bdfcef0c57c907af952c3"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\webcomponents-hi-index.js",
    "revision": "f700d23e002c51fdc57b3cce2958f2e1"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\webcomponents-hi-sd-ce-index.js",
    "revision": "a48449b065a728c8f75b9e503d5e4b11"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\webcomponents-hi-sd-ce-pf-index.js",
    "revision": "08e583317b4a0aad818cf85e4ceb3622"
  },
  {
    "url": "bower_components/webcomponentsjs\\entrypoints\\webcomponents-sd-ce-index.js",
    "revision": "d0e2c7b681cbf1f2d8a628daa662c6f3"
  },
  {
    "url": "bower_components/webcomponentsjs\\externs\\webcomponents.js",
    "revision": "e6cfb19207c09d4eb5f523014e068b61"
  },
  {
    "url": "bower_components/webcomponentsjs\\gulpfile.js",
    "revision": "a874cf1bebdfabe403c149dded1b3605"
  },
  {
    "url": "bower_components/webcomponentsjs\\LICENSE.md",
    "revision": "df7f9abb99c82dfefc6f600bd14341a3"
  },
  {
    "url": "bower_components/webcomponentsjs\\package.json",
    "revision": "36de04491ddc097896489a449af6d47e"
  },
  {
    "url": "bower_components/webcomponentsjs\\README.md",
    "revision": "577e8dd9a133e04856208f82066b31e3"
  },
  {
    "url": "bower_components/webcomponentsjs\\src\\post-polyfill.js",
    "revision": "1d2b3636db24d55bd97dd4c61873aa9b"
  },
  {
    "url": "bower_components/webcomponentsjs\\src\\pre-polyfill.js",
    "revision": "78ca438cf1eb6eaf9a9f521d122f8564"
  },
  {
    "url": "bower_components/webcomponentsjs\\src\\unresolved.js",
    "revision": "2632390bb3365263c24668c90a4cf1fb"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\ce-import-upgrade-async.html",
    "revision": "46ab3c04cddfd38be50e3393a4823ed1"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\ce-import-upgrade.html",
    "revision": "101ac8c7a0fc3c307e7617b2f2627c70"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\ce-import.html",
    "revision": "18dc7ab685fc9217d12a514f96652525"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\ce-upgrade-order.html",
    "revision": "c6dc7493eeab12dbfd36cc082a176fca"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\ce-upgradedocumenttree.html",
    "revision": "0c9fb989896a386d49b2bf73af194e9f"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\dev-loader-swizzled.html",
    "revision": "ff99e6c92774b0ca85e1d106f3b538a4"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\dev-loader.html",
    "revision": "a2c72c3a5fc6f0d372ef6f7b7b18c664"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\force-polyfills.html",
    "revision": "4aba0f751daad32e5144f47e1de26fb2"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\a1-define.html",
    "revision": "b61057aff7056aca2a1a606789186505"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\a1-import.html",
    "revision": "39179438dfe6e317e186f0c42a84d5ee"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\a1-instance.html",
    "revision": "b40b9093908c69d0046a6447d7585fd4"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\a1-reference.html",
    "revision": "b5e92ae4866fef2370b8b5316a98992b"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\csp-import-1.html",
    "revision": "32947b5122277717bd6a92ba294173d1"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\csp-import-2.html",
    "revision": "bcaeca12b8cb3c777e41f9006190a402"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\csp-script-1.js",
    "revision": "d950ff4feaad332f0fec59f5007176e9"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\csp-script-2.js",
    "revision": "e2e639a3eb89401adeb9b45fccbe0606"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\current-script.js",
    "revision": "e1a1123c99d5c272fb3e0502f42a13cf"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\element-import-a.html",
    "revision": "b2a20137a8a91b8e1c3f1e0e1637bb87"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\element-import-b.html",
    "revision": "552c1536d8289cc6869e1c62000edaa6"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\element-import.html",
    "revision": "492dacb50927f7161cf055e7870907a5"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\import-file.html",
    "revision": "5991a48c0f0f273f20aab1565a55753e"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\import-upgrade-order.html",
    "revision": "776e886ee7bd0dd85ef379a9bf1cdbf9"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\script-1.html",
    "revision": "848a2496454440a38280f5bedf4ae1a5"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\script-2.html",
    "revision": "bc169880bf8440b961159eba3bc5607a"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\simple-element-es5.html",
    "revision": "6fad923b1ea11c690758ed7cf082c728"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\imports\\simple-element.html",
    "revision": "f426202e824ef6cd96c24732c7303dd4"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\integration-es5.html",
    "revision": "d2cba6fe1f22a486369089e50a4197de"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\integration.html",
    "revision": "a9a0d3725747c2b022ec020c42e77fcf"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\load.html",
    "revision": "7ea4fdf0dad476ab63c68cdf83729296"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\runner.html",
    "revision": "7daf9bf730f999e4eab6e4f478581b85"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\smoke.html",
    "revision": "f7327e25d33bc38c7875bed121567ffd"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\template-and-CE.html",
    "revision": "a3084308fe003aa3de774812a43b3148"
  },
  {
    "url": "bower_components/webcomponentsjs\\tests\\template-and-imports.html",
    "revision": "3054c397b30e1cefcc31251e4f6bc2cd"
  },
  {
    "url": "bower_components/webcomponentsjs\\wct.conf.json",
    "revision": "dcca00527b4648cf78d9bd0b2654d0b6"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi-ce.js",
    "revision": "c141de13b1ae2698901a09d4aba42a10"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi-ce.js.map",
    "revision": "c8f7b6a4bf94bc733cb16eab961095bd"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi-sd-ce.js",
    "revision": "7ee448144738cf3237c76ccbdd4c855f"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi-sd-ce.js.map",
    "revision": "50cfd0bbe93f05bfd4668e356c8db8dc"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi.js",
    "revision": "bcd97ed945713234806f7d720af74339"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-hi.js.map",
    "revision": "dd461508c1430bb22d87d9357b01c582"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-lite.js",
    "revision": "f0f98ccb88444f6c7c921567fdd9fcf0"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-lite.js.map",
    "revision": "af5911881ab0af3faf6d2cd20c58af36"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-sd-ce.js",
    "revision": "d5fa87968154a88ff17059ba98b4b4b2"
  },
  {
    "url": "bower_components/webcomponentsjs\\webcomponents-sd-ce.js.map",
    "revision": "22ad7d2617b6e645ee39fc7ef44b5eef"
  },
  {
    "url": "bower_components/webcomponentsjs\\yarn.lock",
    "revision": "5d72d2b3964150095e74a83a0a4c1ebc"
  },
  {
    "url": "bower.json",
    "revision": "0425456cf1fe4587168e6c222edf4c31"
  },
  {
    "url": "images/qrscanner_hdpi.png",
    "revision": "356be092a4febeb218081e37362607f1"
  },
  {
    "url": "images/qrscanner_mdpi.png",
    "revision": "b3657cfcb48de413cd75aed99dd4e040"
  },
  {
    "url": "images/qrscanner_xhdpi.png",
    "revision": "486329e202db4cddece2a9d5d5073ed6"
  },
  {
    "url": "images/qrscanner_xxhdpi.png",
    "revision": "b11f0401d33bc610d48ae33c61b9e664"
  },
  {
    "url": "images/qrscanner_xxxhdpi.png",
    "revision": "fb1b702642efcbc8af3deeed492b24b5"
  },
  {
    "url": "images/web_hi_res_512.png",
    "revision": "5d9994d8630f34d43fea36fc22047bfd"
  },
  {
    "url": "index.html",
    "revision": "0d19f0c2816bf4c2b2dc75caa664fc55"
  },
  {
    "url": "libs_offline/CWB0XYA8bzo0kSThX0UTuA.woff2",
    "revision": "a2647ffe169bbbd94a3238020354c732"
  },
  {
    "url": "libs_offline/font_material_css.css",
    "revision": "a981ab8c1ab92f8d5c1c319ad3ce353d"
  },
  {
    "url": "libs_offline/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "libs_offline/material.purple-orange.min.css",
    "revision": "b72c53f8979970823c6f69fe95e76e3c"
  },
  {
    "url": "README.md",
    "revision": "9f10d2ae0f22383e9a2e7f858c6e5c43"
  },
  {
    "url": "script.js",
    "revision": "36c4c9bdccce7bb7c671fbc821e2bbd2"
  },
  {
    "url": "styles.css",
    "revision": "b5f2e242290c2a10d9b47463d1773054"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js.map",
    "revision": "c483cca65097f2f766365b68bfdd94f0"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
