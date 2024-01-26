import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { useEffect, useState } from "react";
const Home = () => {
    let [darkMode, setDarkMode] = useState(false)
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])
    return (
        <section className="flex items-center justify-center h-fit mt-20 w-[25rem] flex-col gap-4 ml-3 mr-4 dark:bg-[#121214] p-6 rounded-sm shadow-shadow_ shadow-black text-black border border-black dark:shadow-shadowDark'">
                <div className="flex items-center justify-center flex-col gap-4">
                    <Avatar>
                    <AvatarImage src="https://github.com/pedrinvits.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-xl dark:text-gray-400  dark:hover:text-roxo">@pedrinvits</p>
                    <Switch  onClick={()=>{setDarkMode(!darkMode)}}/>
                </div>
                <div className="flex items-center justify-center w-full flex-col gap-10 p-4">
                    <div className=" w-full flex items-center justify-center p-2 rounded-sm  dark:hover:bg-[#202024] dark:text-gray-400  border-black shadow-shadow_divs border"><a href="https://pedrinvits.vercel.app/">Inscrever-se NLW</a></div>
                    <div className=" w-full flex items-center justify-center p-2 rounded-sm  dark:hover:bg-[#202024] dark:text-gray-400  border-black shadow-shadow_divs border"><a href="https://pedrinvits.vercel.app/">Baixar meu e-book</a></div>
                    <div className=" w-full flex items-center justify-center p-2 rounded-sm  dark:hover:bg-[#202024] dark:text-gray-400  border-black shadow-shadow_divs border"><a href="https://pedrinvits.vercel.app/">Ver meu portfólio</a></div>
                    <div className=" w-full flex items-center justify-center p-2 rounded-sm  dark:hover:bg-[#202024] dark:text-gray-400 border-black shadow-shadow_divs border"><a href="https://www.linkedin.com/in/pedro-vitor-mantovani/">Ver meu Linkedin</a></div>
                </div>
                <div className="flex gap-2 ">
                    <a href="https://github.com/pedrinvits" className="dark:hover:text-roxo"><Github /></a><a href="" className="dark:hover:text-roxo"><Instagram /></a>
                </div>
        </section>
     );
}
 
export default Home;