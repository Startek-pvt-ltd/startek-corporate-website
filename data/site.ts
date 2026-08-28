export type Division = { id:string; name:string; kicker:string; headline:string; description:string; services:string[]; href:string; accent:"cyan"|"blue"|"violet" };

export const navigation = [
  {label:"Home",href:"/"},{label:"Solutions",href:"/#solutions"},{label:"Work",href:"/work"},{label:"About",href:"/about"},{label:"Insights",href:"/#insights"},{label:"Contact",href:"/contact"},
];

export const divisions: Division[] = [
  {id:"digital",name:"Startek Digital",kicker:"Digital Marketing & Creative Growth",headline:"Turn Attention Into Growth.",description:"Strategy, campaigns and creative systems built to move modern brands forward.",services:["Digital Strategy","Social Media","Paid Advertising","Creative Content","SEO","Brand Strategy"],href:"/digital",accent:"cyan"},
  {id:"web",name:"Startek Web Hub",kicker:"Websites, Applications & Digital Systems",headline:"Smart Websites. Real Growth.",description:"Fast, thoughtful digital products that connect business goals with better customer experiences.",services:["Web Development","E-Commerce","Web Applications","UI/UX","Hosting","Maintenance"],href:"/web-hub",accent:"blue"},
  {id:"print",name:"Startek Print Hub",kicker:"Print, Packaging & Physical Branding",headline:"Your Brand. Made Physical.",description:"Coordinated printing services and production support that carry your identity from screen to physical touchpoint.",services:["Printing","Signage","Packaging","Promotional Products","Corporate Branding","Marketing Materials"],href:"/print-hub",accent:"violet"},
];

export const capabilities = ["Sri Lanka Based","End-to-End Solutions","Multi-Disciplinary Expertise","Built for Modern Businesses"];
export const reasons = [
  {title:"Integrated",text:"Digital, development and physical branding within one connected ecosystem."},
  {title:"Strategic",text:"Solutions are designed around real business goals."},
  {title:"Modern",text:"Built with contemporary tools, technologies and platforms."},
  {title:"Scalable",text:"Solutions designed to grow alongside your business."},
];
export const process = [
  {number:"01",title:"Discover",text:"Understand the business, audience, goals and requirements."},
  {number:"02",title:"Strategize",text:"Define the direction, solution and execution roadmap."},
  {number:"03",title:"Create",text:"Design, develop and produce the required solution."},
  {number:"04",title:"Launch",text:"Deploy the website, campaign, system or brand asset."},
  {number:"05",title:"Grow",text:"Measure, optimize, support and scale."},
];

export const clients = [
  {name:"Lavinia Properties",logo:"/clients/lavinia-properties.webp"},
  {name:"Rice & Kottu Hut",logo:"/clients/rice-kottu-hut.webp"},
  {name:"Ceylon Chef",logo:"/clients/ceylon-chef.webp"},
  {name:"UAE Api",logo:"/clients/uae-api.webp"},
  {name:"Thilina Super",logo:"/clients/thilina-super.webp"},
  {name:"Yoshani Creative",logo:"/clients/yoshani-creative.webp"},
];
