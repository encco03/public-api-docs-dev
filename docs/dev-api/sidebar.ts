import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "API",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Workspaces",
          link: {
            type: "doc",
            id: "dev-api/easydmarc-api-dev",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "dev-api/list-workspaces",
              label: "List an organization's workspaces",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "dev-api/create-workspace",
              label: "Create a workspace",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "dev-api/get-workspace",
              label: "Get a workspace",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "dev-api/delete-workspace",
              label: "Delete a workspace",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "dev-api/update-workspace",
              label: "Rename a workspace",
              className: "api-method patch",
            },
            {
              type: "doc",
              id: "dev-api/list-workspace-members",
              label: "List a workspace's members",
              className: "api-method get",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
