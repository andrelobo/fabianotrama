(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    DL4o: function(e, t, a) {},
    YuTi: function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    enK5: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        c = a("LvDl"),
        i = a.n(c),
        l = a("Wbzz"),
        o = a("Bl7J"),
        u = a("vrFN"),
        s =
          (a("DL4o"),
          a("jk3P"),
          function(e) {
            var t = e.data,
              a = t.site.siteMetadata.title,
              n = t.allMarkdownRemark.distinct;
            return r.a.createElement(
              o.a,
              { title: a },
              r.a.createElement(u.a, { title: "Tags" }),
              r.a.createElement(
                "header",
                { className: "tag-page-head" },
                r.a.createElement(
                  "h1",
                  { className: "page-head-title" },
                  "Tags(",
                  n.length,
                  ")"
                )
              ),
              r.a.createElement(
                "div",
                { className: "tag-container" },
                n.map(function(e) {
                  return r.a.createElement(
                    l.Link,
                    {
                      key: e,
                      style: { textDecoration: "none" },
                      to: "/tags/" + i.a.kebabCase(e)
                    },
                    r.a.createElement("div", { className: "tag-item" }, "#", e)
                  );
                })
              )
            );
          });
      t.default = function(e) {
        return r.a.createElement(l.StaticQuery, {
          query: "38818771",
          render: function(e) {
            return r.a.createElement(s, { props: !0, data: e });
          }
        });
      };
    },
    jk3P: function(e, t, a) {}
  }
]);
//# sourceMappingURL=component---src-pages-tags-js-08e23efdab9f878ab468.js.map