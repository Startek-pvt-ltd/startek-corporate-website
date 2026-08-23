export type SocialLink={label:string;href:string};
export type BrandKey="startek"|"digital"|"web-hub"|"print-hub";

export const brandAssets:Record<BrandKey,{name:string;logo:string}>={
  startek:{name:"Startek (PVT) LTD",logo:"/brand/startek.png"},
  digital:{name:"Startek Digital",logo:"/brand/startek-digital.png"},
  "web-hub":{name:"Startek Web Hub",logo:"/brand/startek-web-hub.jpeg"},
  "print-hub":{name:"Startek Print Hub",logo:"/brand/startek-print-hub.png"},
};

export const socialLinks:SocialLink[]=[
  {label:"Facebook",href:"https://web.facebook.com/profile.php?id=61583304190681"},
  {label:"Instagram",href:"https://www.instagram.com/startek101/"},
  {label:"LinkedIn",href:"https://www.linkedin.com/company/startek101/"},
  {label:"YouTube",href:"https://www.youtube.com/@Startek101"},
  {label:"TikTok",href:"https://www.tiktok.com/@startek_101"},
];

export const divisionSocialLinks:Record<Exclude<BrandKey,"startek">,SocialLink[]>={
  digital:[
    {label:"Facebook",href:"https://web.facebook.com/profile.php?id=61585721325328"},
    {label:"Instagram",href:"https://www.instagram.com/startek.digital/"},
    {label:"YouTube",href:"https://www.youtube.com/@StartekDigital"},
    {label:"TikTok",href:"https://www.tiktok.com/@startek.digital"},
    {label:"LinkedIn",href:"https://www.linkedin.com/company/startek-digital/"},
  ],
  "web-hub":[
    {label:"Facebook",href:"https://web.facebook.com/profile.php?id=61578507905844"},
    {label:"Instagram",href:"https://www.instagram.com/startekwebhub/"},
    {label:"YouTube",href:"https://www.youtube.com/@StartekWebHub"},
    {label:"TikTok",href:"https://www.tiktok.com/@startek_webhub"},
    {label:"LinkedIn",href:"https://www.linkedin.com/company/startek-web-hub/"},
  ],
  "print-hub":[
    {label:"Facebook",href:"https://web.facebook.com/profile.php?id=61592500328766"},
    {label:"Instagram",href:"https://www.instagram.com/startekprinthub/"},
    {label:"YouTube",href:"https://www.youtube.com/@StartekPrintHub"},
    {label:"TikTok",href:"https://www.tiktok.com/@startekprinthub"},
  ],
};

export const companyValues=[
  {title:"Innovation",text:"We continuously explore better technologies, tools and ideas."},
  {title:"Quality",text:"We prioritize professional execution and attention to detail."},
  {title:"Reliability",text:"We aim to deliver solutions businesses can depend on."},
  {title:"Collaboration",text:"Strong outcomes come from understanding and working closely with clients."},
  {title:"Growth",text:"Our solutions should create long-term value, not only short-term output."},
];
