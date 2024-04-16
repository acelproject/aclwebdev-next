"use client"

import { Button } from "./ui/button";
import {Input } from "./ui/input";
import {Textarea } from "./ui/textarea";
import { User,MailIcon,ArrowRightIcon,MessageSquare } from "lucide-react";

const Form = ({handleSubmit,setName,setEmail,setMessage,name,email,message}) => {
  return (
    <form action="" className="flex flex-col gap-y-4">
        {/* input */}
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Your Name, Example: Marchel" value={name} onChange={(e)=>setName(e.target.value)} />
            <User className="absolute right-6 " size={20}/>
        </div>
        {/* input */}
        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Your Email, Example: john@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <MailIcon className="absolute right-6 " size={20}/>
        </div>
        {/* textarea */}
        <div className="relative flex items-center">
            <Textarea placeholder="Your Message, Example: Hey, I Wanna Collaborate Because I Have A Project" value={message}  onChange={(e)=>setMessage(e.target.value)} />
            <MessageSquare className="absolute top-4 right-6 " size={20}/>
        </div>

        <Button className="flex items-center max-w-[166px] gap-x-1" onClick={handleSubmit}>Let's talk <ArrowRightIcon size={20}/> </Button>
    </form>
  )
}

export default Form