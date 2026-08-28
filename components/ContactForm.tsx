"use client";

import { FormEvent,useEffect,useMemo,useState } from "react";
import { ArrowLeft,ArrowUpRight,LoaderCircle,Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { officialEmail,whatsappNumber } from "@/data/company";

type FormState={fullName:string;email:string;phone:string;company:string;division:string;service:string;budget:string;details:string;contactMethod:string};
type Errors=Partial<Record<keyof FormState,string>>;
type Status="idle"|"submitting"|"review"|"error";

const initialForm:FormState={fullName:"",email:"",phone:"",company:"",division:"",service:"",budget:"",details:"",contactMethod:"Email"};
const divisions=["Startek Digital","Startek Web Hub","Startek Print Hub","Multiple Services","Not Sure Yet"];
const serviceGroups:Record<string,string[]>={"Startek Digital":["Digital Marketing","Social Media Management","Paid Advertising","Branding","Other"],"Startek Web Hub":["Website Development","E-Commerce","Web Application","Website Maintenance","Other"],"Startek Print Hub":["Printing","Signage","Packaging","Promotional Products","Other"]};
const allServices=["Digital Marketing","Social Media Management","Paid Advertising","Branding","Website Development","E-Commerce","Web Application","Website Maintenance","Printing","Signage","Packaging","Promotional Products","Other"];

export function ContactForm(){
  const [form,setForm]=useState<FormState>(initialForm);
  const [errors,setErrors]=useState<Errors>({});
  const [status,setStatus]=useState<Status>("idle");

  useEffect(()=>{
    const division=new URLSearchParams(window.location.search).get("division");
    const mapped=division==="digital"?"Startek Digital":division==="web-hub"?"Startek Web Hub":division==="print-hub"?"Startek Print Hub":"";
    const timer=window.setTimeout(()=>{if(mapped)setForm(current=>({...current,division:mapped}))},0);
    return()=>window.clearTimeout(timer);
  },[]);

  const services=useMemo(()=>serviceGroups[form.division]||allServices,[form.division]);
  const enquirySummary=useMemo(()=>[
    "Startek Project Enquiry",
    "",
    `Name: ${form.fullName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone||"Not provided"}`,
    `Company: ${form.company||"Not provided"}`,
    `Division: ${form.division}`,
    `Service: ${form.service||"Not specified"}`,
    `Estimated Budget: ${form.budget||"Not specified"}`,
    `Preferred Contact Method: ${form.contactMethod}`,
    "",
    "Project Details:",
    form.details,
  ].join("\n"),[form]);
  const whatsappHref=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquirySummary)}`;
  const emailHref=`mailto:${officialEmail}?subject=${encodeURIComponent(`Startek Project Enquiry — ${form.division}`)}&body=${encodeURIComponent(enquirySummary)}`;
  const reviewRows=[
    ["Name",form.fullName],["Email",form.email],["Phone",form.phone||"Not provided"],["Company",form.company||"Not provided"],
    ["Division",form.division],["Service",form.service||"Not specified"],["Budget",form.budget||"Not specified"],["Preferred contact",form.contactMethod],
  ];
  function update(field:keyof FormState,value:string){setForm(current=>({...current,[field]:value,...(field==="division"?{service:""}:{})}));setErrors(current=>({...current,[field]:undefined}));setStatus("idle")}
  function validate(){const next:Errors={};if(!form.fullName.trim())next.fullName="Please enter your full name.";if(!form.email.trim())next.email="Please enter your email address.";else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))next.email="Enter a valid email address.";if(!form.division)next.division="Select a service division.";if(!form.details.trim())next.details="Tell us a little about your project.";if(!form.contactMethod)next.contactMethod="Select a preferred contact method.";setErrors(next);return Object.keys(next).length===0}
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();if(!validate()){setStatus("error");return}setStatus("submitting");await new Promise(resolve=>setTimeout(resolve,250));setStatus("review")}

  if(status==="review")return <section className="enquiry-review" aria-labelledby="enquiry-review-title"><p className="eyebrow"><span>+</span>Review enquiry</p><h3 id="enquiry-review-title">Choose how to continue.</h3><p className="enquiry-unsent"><strong>Your enquiry has not been sent yet.</strong> Choose WhatsApp or Email to continue.</p><dl>{reviewRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}<div className="wide"><dt>Project details</dt><dd>{form.details}</dd></div></dl><div className="enquiry-handoff"><a className="button" href={whatsappHref} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} aria-hidden="true"/>Send via WhatsApp</a><a className="outline-button" href={emailHref}><Mail size={17} aria-hidden="true"/>Send via Email</a></div><button className="enquiry-edit" type="button" onClick={()=>setStatus("idle")}><ArrowLeft size={15} aria-hidden="true"/>Edit enquiry</button></section>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <Field id="fullName" label="Full Name" required error={errors.fullName}><input id="fullName" name="fullName" autoComplete="name" value={form.fullName} onChange={e=>update("fullName",e.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName?"fullName-error":undefined}/></Field>
      <Field id="email" label="Email Address" required error={errors.email}><input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={e=>update("email",e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email?"email-error":undefined}/></Field>
      <Field id="phone" label="Phone Number"><input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e=>update("phone",e.target.value)}/></Field>
      <Field id="company" label="Company"><input id="company" name="company" autoComplete="organization" value={form.company} onChange={e=>update("company",e.target.value)}/></Field>
      <Field id="division" label="Service Division" required error={errors.division}><select id="division" name="division" value={form.division} onChange={e=>update("division",e.target.value)} aria-invalid={Boolean(errors.division)} aria-describedby={errors.division?"division-error":undefined}><option value="">Select a division</option>{divisions.map(item=><option key={item}>{item}</option>)}</select></Field>
      <Field id="service" label="Service Required"><select id="service" name="service" value={form.service} onChange={e=>update("service",e.target.value)}><option value="">Select a service</option>{services.map(item=><option key={item}>{item}</option>)}</select></Field>
      <Field id="budget" label="Estimated Budget"><select id="budget" name="budget" value={form.budget} onChange={e=>update("budget",e.target.value)}><option value="">Select a range</option>{["Not Sure Yet","Under LKR 25,000","LKR 25,000–50,000","LKR 50,000–100,000","LKR 100,000–250,000","LKR 250,000+"].map(item=><option key={item}>{item}</option>)}</select></Field>
      <fieldset className="contact-method"><legend>Preferred Contact Method <span aria-hidden="true">*</span></legend><div>{["Email","Phone","WhatsApp"].map(method=><label key={method}><input type="radio" name="contactMethod" value={method} checked={form.contactMethod===method} onChange={e=>update("contactMethod",e.target.value)}/><span>{method}</span></label>)}</div>{errors.contactMethod&&<p className="field-error">{errors.contactMethod}</p>}</fieldset>
      <Field id="details" label="Project Details" required error={errors.details} wide><textarea id="details" name="details" rows={6} placeholder="Tell us what you're trying to build, promote or produce." value={form.details} onChange={e=>update("details",e.target.value)} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details?"details-error":undefined}/></Field>
    </div>
    <button className="button form-submit" type="submit" disabled={status==="submitting"}>{status==="submitting"?<><LoaderCircle className="spin" size={16} aria-hidden="true"/>Checking Enquiry</>:<>Continue Enquiry <ArrowUpRight size={16} aria-hidden="true"/></>}</button>
    <div className={`form-status ${status}`} aria-live="polite">{status==="error"&&Object.keys(errors).length>0&&<p>Please correct the highlighted fields before continuing.</p>}</div>
  </form>
}

function Field({id,label,required,error,wide,children}:{id:string;label:string;required?:boolean;error?:string;wide?:boolean;children:React.ReactNode}){return <div className={`form-field ${wide?"wide":""}`}><label htmlFor={id}>{label}{required&&<span aria-hidden="true"> *</span>}</label>{children}{error&&<p className="field-error" id={`${id}-error`}>{error}</p>}</div>}
