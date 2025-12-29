import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxTissue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11v7H0v-7c0-1.654,1.346-3,3-3h.153l1,6h15.693l1-6h.153c1.654,0,3,1.346,3,3Zm-18.153,1h3.067l-.493-5.917,1.992-.166,.507,6.083h2.161l.341-4.083,1.992,.166-.327,3.917h3.067L20.086,.011l-1.075-.011c-1.075-.009-1.82,.698-2.397,1.217-.295,.265-.871,.78-1.103,.783-.253-.003-.829-.519-1.124-.783-.573-.515-1.356-1.217-2.354-1.217-1.061-.009-1.843,.698-2.42,1.217-.295,.265-.871,.78-1.103,.783-.253-.003-.829-.519-1.124-.783C6.809,.698,6.019-.006,4.989,0l-1.075,.011,1.933,11.989ZM0,24H24v-4H0v4Z"/></svg>

);
