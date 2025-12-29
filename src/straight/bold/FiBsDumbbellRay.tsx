import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDumbbellRay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,16v3h-1v3h-2v2h-3v-5H6v5H3v-2H1v-3H0v-3H1v-3H3v-2h3v5h12v-5h3v2h2v3h1Zm-15.577-7h3.077l-1.41,5h1.199l5.058-7.594c.399-.602-.032-1.406-.754-1.406h-3.057L14.5,0h-4.303l-2.657,7.81c-.179,.592,.264,1.19,.883,1.19Z"/>
</svg>

);
