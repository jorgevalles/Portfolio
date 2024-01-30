export default function DescriptionMap(props: {
  list: {
    name: string;
    content: string | string[];
    link?: string;
  }[];
  type: string;
}) {
  const { list, type } = props;

  const contentDisplay = {
    hobbies: (obj:{content:string | string[]}) => <p>{obj.content}</p>,
    work: (obj:{content:string | string[]}) => <p>{obj.content}</p>,
    skills: (obj:{content:string | string[]}) => <p>{(obj.content as string[]).join(", ")}</p>,
    technology: (obj:{content:string | string[]}) => <p>{(obj.content as string[]).join(", ")}</p>,
    links: (obj:{content:string | string[]; link?: string}) => (
      <a
        className="text-sky-400 cursor-pointer"
        target="_blank"
        href={obj.link}
      >
        {obj.content}
      </a>
    ),
  };
  return (
    <div className="flex flex-col gap-3">
      {list.map((listItem, listIndex) => {
        return (
          <div
            className="relative group overflow-hidden  flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            key={listIndex}
          >
            <div className="bg-purple-400 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
            <p>
              <b>{listItem.name}</b>
            </p>
            {contentDisplay[type as keyof typeof contentDisplay](listItem)}
          </div>
        );
      })}
    </div>
  );
}
