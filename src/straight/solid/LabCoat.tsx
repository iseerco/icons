import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LabCoat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,0h6l-3,7L9,0Zm13.316,2.333c-1.229-1.064-3.235-2.333-5.816-2.333h-1.5l3,3.5-5,5.5v15h6v-7h-3v-2h3v-7h2v13h3V6.076c0-1.453-.613-2.817-1.684-3.743ZM1.684,2.333c-1.07.926-1.684,2.291-1.684,3.743v14.924h3v-13h2v7h3v2h-3v7h6v-15L6,3.5l3-3.5h-1.5C4.919,0,2.912,1.269,1.684,2.333Z"/>
</svg>

);
