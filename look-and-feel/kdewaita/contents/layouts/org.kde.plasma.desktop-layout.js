/*******Panel Top*********/
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.height = 24
paneltop.offset = 0
const width = screenGeometry(paneltop.screen).width
/*activities*/
paneltop.addWidget("org.kde.plasma.marginsseparator")
 paneltop_activities =   paneltop.addWidget("adhe.textcommand")
  paneltop_activities.currentConfigGroup = ["Appearance"];
   paneltop_activities.writeConfig("textLabel", "Activities")
paneltop.addWidget("org.kde.plasma.panelspacer")
paneltop_clock = paneltop.addWidget("com.marcinorlowski.htmlclock")
 paneltop_clock.currentConfigGroup = ["Appearance"];
  paneltop_clock.writeConfig("useUserLayout", "true")
   paneltop_clock.currentConfigGroup = ["Configuration/Appearance"];
    paneltop_clock.writeConfig("layout", '<html><body><center><span style="font-weight:500;">{DD:u} {d} {h}:{ii}</span></center></body></html>');
paneltop.addWidget("org.kde.plasma.panelspacer")

var systraprev = paneltop.addWidget("org.kde.plasma.systemtray")
var SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
if (width <= 900){
    c = 3
} else { if (width <= 720){
    c = 1
} else
{
    c = 6
}
}
systray.writeConfig("iconSpacing", c)
paneltop.addWidget("org.kde.plasma.marginsseparator")
            /****************************/
panelbottom = new Panel
 panelbottom.location = "bottom"
  panelbottom.height = 73
   panelbottom.offset = 0
    panelbottom.alignment = "center"
     panelbottom.panelVisibility = "2"
     if (width === 1920){
      panelbottom.maximumLength = 1728
       panelbottom.minimumLength = 100
     } else
     {
       panelbottom.maximumLength = (width)*(.90)
       panelbottom.minimumLength = 100
    }
        panelbottom.hiding = "windowscover"
         panelbottom.addWidget("org.kde.plasma.marginsseparator")

panelbottom.addWidget("org.kde.plasma.icontasks")
    /*menu*/
panelbottom.addWidget("org.kde.latte.separator")
 panelbottom_start = panelbottom.addWidget("P-Connor.PlasmaDrawer")
  panelbottom_start.currentConfigGroup = ["General"]
   panelbottom_start.writeConfig("customButtonImage", `${userDataPath()}/.local/share/plasma/look-and-feel/kdewaita/contents/icons/menu.svg`)
    panelbottom_start.writeConfig("useCustomButtonImage", "true")
let IDPanel = "Panel"+" "+panelbottom.id
/*cambiando config*/
const config = ConfigFile('plasmashellrc')
config.group = 'PlasmaViews'
const config2 = ConfigFile(config, IDPanel)
config2.writeEntry('floating', 1)
config.reloadConfig();
