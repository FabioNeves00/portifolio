type ListItemProps = {
  children: any;
  className?: string;
  href?: string;
  animate?: boolean;
};

export function ListItem({
  children,
  className,
  href,
  animate,
}: ListItemProps) {
  return (
    <li className={"group flex flex-col justify-center items-center " + { className }}>
      <a href={href} className="dark:text-brand-white text-brand-light-black flex justify-center items-center text-lg">
        {children}
      </a>
      {animate && (
        <span className="w-0 h-[2px] rounded dark:bg-brand-white bg-brand-purple group-hover:w-full"></span>
      )}
    </li>
  );
}