(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    DNPW: function(e, t, a) {
      "use strict";
      var n = a("dI71"),
        r = a("q1tI"),
        o = a.n(r),
        s = a("Wbzz"),
        l = a("LvDl"),
        c = a.n(l),
        i = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props.tags;
              return o.a.createElement(
                "div",
                { className: "post-card-tags" },
                e &&
                  e.map(function(e) {
                    return o.a.createElement(
                      "span",
                      { key: e },
                      o.a.createElement(
                        s.Link,
                        {
                          className: "post-card-tag-link",
                          key: e,
                          to: "/tags/" + c.a.kebabCase(e)
                        },
                        "#",
                        e
                      ),
                      " "
                    );
                  })
              );
            }),
            t
          );
        })(r.Component),
        p =
          ((t.a = function(e) {
            return o.a.createElement(
              "article",
              {
                className:
                  "post-card " +
                  (e.count % 3 == 0 && "post-card-large") +
                  " " +
                  e.postClass +
                  " " +
                  (e.node.frontmatter.thumbnail ? "with-image" : "no-image"),
                style: e.node.frontmatter.thumbnail && {
                  backgroundImage:
                    "url(" +
                    e.node.frontmatter.thumbnail.childImageSharp.fluid.src +
                    ")"
                }
              },
              e.node.frontmatter.thumbnail
                ? o.a.createElement(d, { props: e })
                : o.a.createElement(p, { props: e })
            );
          }),
          (function(e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(n.a)(t, e),
              (t.prototype.render = function() {
                var e = this.props.props;
                return o.a.createElement(
                  "div",
                  { className: "post-card-content" },
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(i, { tags: e.node.frontmatter.tags })
                  ),
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      s.Link,
                      { to: e.node.fields.slug, className: "post-card-link" },
                      o.a.createElement(
                        "h2",
                        { className: "post-card-title" },
                        e.node.frontmatter.title || e.node.fields.slug
                      )
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { className: "post-card-date" },
                    e.node.frontmatter.date
                  ),
                  o.a.createElement(
                    "div",
                    { className: "post-card-body" },
                    e.node.frontmatter.description || e.node.excerpt
                  ),
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      s.Link,
                      {
                        to: e.node.fields.slug,
                        className: "post-card-link post-card-readmore"
                      },
                      e.node.frontmatter.description || e.node.excerpt
                        ? "Read more"
                        : null
                    )
                  )
                );
              }),
              t
            );
          })(r.Component)),
        d = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props.props;
              return o.a.createElement(
                s.Link,
                { to: e.node.fields.slug, className: "post-card-link" },
                o.a.createElement(
                  "div",
                  { className: "post-card-content" },
                  o.a.createElement(
                    "h2",
                    { className: "post-card-title" },
                    e.node.frontmatter.title || e.node.fields.slug
                  )
                )
              );
            }),
            t
          );
        })(r.Component);
    },
    Kgxr: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return p;
        });
      var n = a("dI71"),
        r = a("q1tI"),
        o = a.n(r),
        s = a("Bl7J"),
        l = a("vrFN"),
        c = a("DNPW"),
        i = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = this.props.pageContext.tag,
                a = this.props.data.allMarkdownRemark.edges,
                n = this.props.data.site.siteMetadata.title;
              return o.a.createElement(
                s.a,
                { location: this.props.location, title: n },
                o.a.createElement(l.a, {
                  title: "#" + (t.charAt(0).toUpperCase() + t.slice(1)),
                  keywords: ["" + t, "blog", "gatsby", "javascript", "react"]
                }),
                o.a.createElement(
                  "header",
                  { className: "tag-page-head" },
                  o.a.createElement(
                    "h1",
                    { className: "page-head-title" },
                    "#",
                    t,
                    "(",
                    e.data.allMarkdownRemark.totalCount,
                    ")"
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "post-feed" },
                  a.map(function(e) {
                    var t = e.node;
                    return o.a.createElement(c.a, {
                      key: t.fields.slug,
                      node: t,
                      postClass: "post"
                    });
                  })
                )
              );
            }),
            t
          );
        })(o.a.Component);
      t.default = i;
      var p = "19194963";
    },
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
    }
  }
]);
//# sourceMappingURL=component---src-templates-tag-page-js-8c1e936abb4a2b48b13f.js.map