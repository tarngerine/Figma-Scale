// Scales selection down by 2
const sel = [...figma.currentPage.selection];
sel.forEach(n => {
  n.resize(n.width/2, n.height/2);
})

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
