import { Link } from "@/navigation";

const FooterMenuList = ({
  list,
  title,
  href,
}: {
  list?: any[] | null;
  title: string;
  href: string;
}) => {
  return (
    <div>
      <h5 className="mb-4 font-serif text-brand md:mt-5">{title}</h5>
      {list && (
        <ul className="flex max-w-[300px] flex-wrap">
          {list?.map((item, i) => {
            return (
              <li className="mb-2 w-1/2 font-serif text-sm text-white" key={i}>
                <Link href={href + item?.value}>{item?.label}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FooterMenuList;
