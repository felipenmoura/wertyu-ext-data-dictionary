module.exports = {
  meta: {
    permissions: ["settings", "global-settings"],
    wertyuVersion: 1,
  },
  sideBar: {
    name: "Data Dictionary",
    icon: './sidebar-icon.png',
    content: './sidebar-panel.html'
  },
  panel: {
    name: "Data Dictionary",
    description: "Your entitie's structure is described in a Data Dictionary",
    icon: './icon.png',
    content: './panel.html'
  }
};
