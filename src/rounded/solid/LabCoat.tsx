import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LabCoat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,0h6l-3,7L9,0Zm13.316,2.333c-1.229-1.064-3.235-2.333-5.816-2.333h-1.5l1.805,2.106c.682.796.665,1.976-.04,2.752l-3.765,4.142v15h3c1.657,0,3-1.343,3-3v-4h-2c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h2v-6c0-.552.448-1,1-1h0c.552,0,1,.448,1,1v12h0c1.657,0,3-1.343,3-3V6.076c0-1.453-.613-2.817-1.684-3.743ZM1.684,2.333c-1.07.926-1.684,2.291-1.684,3.743v11.924c0,1.657,1.343,3,3,3h0v-12c0-.552.448-1,1-1h0c.552,0,1,.448,1,1v6h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1h-2v4c0,1.657,1.343,3,3,3h3v-15l-3.765-4.142c-.705-.776-.723-1.956-.04-2.752l1.805-2.106h-1.5C4.919,0,2.912,1.269,1.684,2.333Z"/>
</svg>

);
