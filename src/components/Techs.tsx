import { SiMicrosoftazure, SiDotnet, SiMysql, SiMicrosoftsqlserver, SiThymeleaf, SiTypescript } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava, FaPhp, FaPython, FaReact, FaLaravel, FaCss3, FaHtml5, FaNodeJs, FaBootstrap, FaDharmachakra} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaAws } from "react-icons/fa6";
import { ReactNode } from "react";


interface Props {
    myTech: string,
    fontSize: string,
  }

const Techs = ({ myTech, fontSize }: Props) => {

    let iconMap = new Map<string, ReactNode>([
        ["Java", <FaJava size={fontSize}/>],
        ["JavaScript", <IoLogoJavascript size={fontSize}/>],
        ["C#", <SiDotnet size={fontSize}/>],
        ["PHP", <FaPhp size={fontSize}/>],
        ["Python", <FaPython size={fontSize}/>],
        ["MySql", <SiMysql size={fontSize}/>],
        ["SQL Server", <SiMicrosoftsqlserver size={fontSize}/>],
        ["React", <FaReact size={fontSize}/>],
        ["Spring Boot", <BiLogoSpringBoot size={fontSize}/>],
        ["Laravel", <FaLaravel size={fontSize}/>],
        ["CSS", <FaCss3 size={fontSize}/>],
        ["HTML", <FaHtml5 size={fontSize}/>],
        ["AWS", <FaAws size={fontSize}/>],
        ["Azure", <SiMicrosoftazure size={fontSize}/>],
        ["Thymeleaf", <SiThymeleaf size={fontSize}/>],
        ["Node.js", <FaNodeJs size={fontSize}/>],
        ["Chakra", <FaDharmachakra size={fontSize}/>],
        ["TypeScript", <SiTypescript size={fontSize}/>],
        ["Bootstrap", <FaBootstrap size={fontSize}/>],
      ]);
        let icon = iconMap.get(myTech);

  return (
    (icon !== undefined) &&
    <div>
        {icon}
        <span>{myTech}</span>
    </div>
  )
}

export default Techs