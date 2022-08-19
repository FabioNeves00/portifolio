type ListProps = {
  children: any;
  className?: string;
  collumn?: boolean
}

export function List({children, className, collumn}: ListProps) {
  return (
      <ul className={`flex gap-16 ${className} ` + (!collumn ? "flex-row" : "flex-col")}>
        {children}
      </ul>
  )
}