export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60fdccb96a69551444573a67",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ca82fyy6",
                  apiId: "bf733d86-8509-449f-90bd-c431d396dc4e",
                },
                {
                  buildHookId: "60fdccb95d34be129e66794f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-n7gs4wvq",
                  apiId: "e9634ac9-1090-4235-950e-704d2a1054bb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NewsWorld24/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-n7gs4wvq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
