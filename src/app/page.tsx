"use client";
import DescriptionMap from "@/components/DescriptionMap";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { format } from "date-fns";

function SectionHeaderText(props: { children: ReactNode }) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

export default function Home() {
  const links = [
    {
      name: "Email",
      link: "mailto:1jorgevalles@gmail.com",
      content: "1jorgevalles@gmail.com",
    },
    {
      name: "GitHub",
      link: "https://github.com/jorgevalles",
      content: "jorgevalles",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jorgeluisvalles/",
      content: "jorgeluisvalles",
    },
  ];

  const skills = [
    {
      name: "Wed",
      content: [
        "API Rest",
        "WebPack",
        "Babel",
        "Bootstrap",
        "Google Analitics",
        "Google Tag Manager",
        "Tailwind",
        "CSS",
        "Sass",
        "AWS",
        "GIT",
        "GitHub",
        "Material UI",
        "Docker",
      ],
    },
    {
      name: "Design",
      content: [
        "SSR",
        "SSG",
        "ISR",
        "SEO on Page",
        "Responsitive",
        "Atomic",
        "Thinking",
        "Canvas",
        "pixlr",
        "figma",
      ],
    },
  ];

  const technology = [
    { name: "Javascript", content: ["React", "Node JS", "Next JS", "Redux"] },
    { name: "Tests", content: ["Jest"] },
  ];
  const workHistory = [
    {
      name: "Trainig Escalab Academy",
      content: "Desarrollador de Aplicaciones en React. y Node.",
    },
  ];

  const hobbies = [
    { name: "Making coding app", content: "I really enjoy programing" },
    {
      name: "Practice sports",
      content: "I love playing sports with my children",
    },
    {
      name: "Travel to the beach",
      content: "I really enjoy being on the beach and sailing.",
    },
  ];
  const now = new Date();

  const [dataTime, setDataTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDataTime(date);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      <h3 className="text-end " suppressHydrationWarning>
        {" "}
        {format(dataTime, "h:mm:ss b EEEE d 'de' MMMM yyyy", {})}{" "}
      </h3>
      <h2 className="font-bold sm:py-4 md:py-8 text-4xl sm:text-5xl md:text-6xl">
        Digital Résumé
      </h2>
      <section>
        <div></div>
      </section>
      <section>
        <SectionHeaderText>Jorge Valles - Web Developer</SectionHeaderText>
        <DescriptionMap list={links} type={"links"} />
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>

        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText>Technology</SectionHeaderText>

        <DescriptionMap list={technology} type={"technology"} />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>

        <p className="text-xs sm:text-sm">
          Check out my latest{" "}
          <Link href={"/projects"} className="text-sky-400">
            projects
          </Link>
        </p>
      </section>

      <section>
        <SectionHeaderText>Certificates</SectionHeaderText>

        <p className="text-xs sm:text-sm">
          Check out my latest{" "}
          <Link href={"/certificates"} className="text-sky-400">
            Certificates
          </Link>
        </p>
      </section>

      <section>
        <SectionHeaderText>Work History</SectionHeaderText>

        <DescriptionMap list={workHistory} type={"work"} />
      </section>
      <section>
        <SectionHeaderText>Just For Fun</SectionHeaderText>

        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  );
}
