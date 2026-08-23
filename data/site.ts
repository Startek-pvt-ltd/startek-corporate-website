export type Division = { id:string; name:string; kicker:string; headline:string; description:string; services:string[]; href:string; accent:"cyan"|"blue"|"violet" };
export type Project = { name:string; category:string; division:string; services:string[]; year:string; image:string; href:string };
export type Testimonial = { name:string; role:string; company:string; quote:string };
export type Article = { category:string; title:string; excerpt:string; date:string; href:string; tone:string };

export const navigation = [
  {label:"Home",href:"#home"},{label:"Solutions",href:"#solutions"},{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Insights",href:"#insights"},{label:"Contact",href:"#contact"},
];

export const divisions: Division[] = [
  {id:"digital",name:"Startek Digital",kicker:"Digital Marketing & Creative Growth",headline:"Turn Attention Into Growth.",description:"Strategy, campaigns and creative systems built to move modern brands forward.",services:["Digital Strategy","Social Media","Paid Advertising","Creative Content","SEO","Brand Strategy"],href:"#contact",accent:"cyan"},
  {id:"web",name:"Startek Web Hub",kicker:"Websites, Applications & Digital Systems",headline:"Smart Websites. Real Growth.",description:"Fast, thoughtful digital products that connect business goals with better customer experiences.",services:["Web Development","E-Commerce","Web Applications","UI/UX","Hosting","Maintenance"],href:"#contact",accent:"blue"},
  {id:"print",name:"Startek Print Hub",kicker:"Print, Packaging & Physical Branding",headline:"Your Brand. Made Physical.",description:"Precise, high-impact production that takes your identity from the screen into the real world.",services:["Printing","Signage","Packaging","Promotional Products","Corporate Branding","Marketing Materials"],href:"#contact",accent:"violet"},
];

export const projects: Project[] = [
  {name:"Aster Finance Digital Launch",category:"Digital Experience",division:"Startek Web Hub",services:["UX Strategy","Web Development","CMS"],year:"2026",image:"/projects/aster.png",href:"#contact"},
  {name:"Northline Retail Growth System",category:"Integrated Campaign",division:"Startek Digital",services:["Paid Media","Content","Analytics"],year:"2026",image:"/projects/northline.png",href:"#contact"},
  {name:"Kora Foods Brand Rollout",category:"Brand Production",division:"Startek Print Hub",services:["Packaging","Signage","Print"],year:"2025",image:"/projects/kora.png",href:"#contact"},
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
export const clients = ["CLIENT LOGO 01","CLIENT LOGO 02","CLIENT LOGO 03","CLIENT LOGO 04","CLIENT LOGO 05","CLIENT LOGO 06"];
export const testimonials: Testimonial[] = [
  {name:"Sample Client",role:"Marketing Director",company:"Demo Company",quote:"Sample testimonial — Startek brought our digital and physical touchpoints into one clear, consistent system."},
  {name:"Sample Client",role:"Founder",company:"Demo Brand",quote:"Sample testimonial — The team translated a complex idea into a practical solution with a strong path to growth."},
  {name:"Sample Client",role:"Operations Lead",company:"Demo Enterprise",quote:"Sample testimonial — One connected partner made our website, campaign and launch materials much easier to coordinate."},
];
export const articles: Article[] = [
  {category:"Web Development",title:"Why Your Business Website Needs More Than Good Design",excerpt:"A high-performing website balances clarity, speed, trust and measurable business outcomes.",date:"August 18, 2026",href:"#contact",tone:"blue"},
  {category:"Digital Marketing",title:"How Data Improves Social Media Campaigns",excerpt:"Better signals create sharper creative decisions, stronger targeting and more useful reporting.",date:"August 11, 2026",href:"#contact",tone:"cyan"},
  {category:"Branding",title:"Why Digital and Physical Branding Must Work Together",excerpt:"Customers experience one brand, so every online and offline touchpoint should feel connected.",date:"August 04, 2026",href:"#contact",tone:"violet"},
];
