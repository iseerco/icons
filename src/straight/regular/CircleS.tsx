import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleS = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.091,14.812c0,1.758-1.431,3.188-3.188,3.188h-3.902c-1.654,0-3-1.346-3-3h2c0,.552.448,1,1,1h3.902c.655,0,1.188-.533,1.188-1.188,0-.526-.354-.996-.859-1.142l-5.008-1.421c-1.362-.387-2.314-1.646-2.314-3.064,0-1.756,1.429-3.185,3.185-3.185h3.906c1.654,0,3,1.346,3,3h-2c0-.552-.448-1-1-1h-3.906c-.653,0-1.185.531-1.185,1.185,0,.527.354.997.861,1.141l5.011,1.422c1.361.392,2.31,1.651,2.31,3.064Zm6.909-2.812c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
