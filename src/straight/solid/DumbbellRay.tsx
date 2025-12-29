import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellRay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10.09,14l1.41-5h-3.077c-.619,0-1.062-.597-.883-1.19L10.197,0h4.303l-1.963,5h3.057c.722,0,1.153,.804,.754,1.406l-5.058,7.594h-1.199Zm13.91,3h-1v-3h-2v8h2v-3h1v-2Zm-6,0H6v-5h-2v12h2v-5h12v5h2V12h-2v5Zm-17,0H0v2H1v3H3V14H1v3Z"/>
</svg>

);
