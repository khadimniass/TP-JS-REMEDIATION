const embourger = document.getElementById('embourger');
const containtEmbourber = document.querySelector(".embourger");
const nav = document.querySelector('nav');
const ouvreFerme = document.querySelector('.fa-angle-left');
const contait_item = document.querySelector('.contait-item')

ouvreFerme.addEventListener('click',function(){
  ouvreFerme.classList.toggle('tourne');
  contait_item.classList.toggle('remove-items');
})
// nav.addEventListener('mouseover', ()=>{
//   nav.classList.toggle('hidden');
//   containtEmbourber.classList.toggle('hide');
// })

embourger.addEventListener('click', ()=>{
  nav.classList.toggle('hidden');
  containtEmbourber.classList.toggle('hide');
})

let menu = {
  Dashbord: {
    Dashbordv1: "Dashbord v1",
    Dashbordv2: "Dashbord v2",
    Dashbordv3: "Dashbord v3",
  },
  Widgets: "Widgets",
  Layout : "Layout Options",
  UIElements: {
  General: "General",
  Icons: "Icons",
  Buttons: "Buttons",
  Sliders: "Sliders",
  ModalsAlerts: "Modals & Alerts",
  NavbarTabs: "Navbar & Tabs",
  Timeline: "Timeline",
  Ribbons: "Ribbons",
  },
  Forms: {
    GeneralElements: "General Elements",
    AdvancedElements: "Advanced Elements",
    Editors: "Editors",
    Validation: "Validation",
  },
  Tables: {
    SimpleTables: "Simple Tables",
    DataTables: "DataTables",
    jsGrid: "jsGrid",
  },
};
