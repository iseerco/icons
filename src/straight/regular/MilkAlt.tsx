import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MilkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.111,9.227l-1.633-4.188c-.317-.814-.479-1.67-.479-2.544v-.495h1V0H6v2h1v.495c0,.874-.161,1.729-.479,2.544l-1.633,4.188c-.59,1.512-.889,3.101-.889,4.723v10.051h16v-10.051c0-1.622-.299-3.211-.889-4.723Zm-5.111,4.773v3H6v-3h8Zm4,8H6v-3h10v-7H6.177c.125-.696.315-1.381.575-2.047l1.633-4.188c.408-1.047.615-2.147.615-3.271v-.495h6v.495c0,1.123.207,2.224.615,3.271l1.633,4.188c.499,1.279.752,2.624.752,3.996v8.051Z"/>
</svg>

);
