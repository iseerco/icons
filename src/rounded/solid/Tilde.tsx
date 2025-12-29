import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tilde = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.474,20c-2.77,0-5.125-1.918-6.462-5.263l-1.832-4.801c-.47-1.173-1.873-3.937-4.626-3.937-1.993,0-3.553,1.631-3.553,3.714v5.286c0,.552-.448,1-1,1s-1-.448-1-1v-5.286c0-3.204,2.439-5.714,5.553-5.714,2.799,0,5.165,1.898,6.489,5.208l1.832,4.801c.593,1.481,1.986,3.99,4.6,3.99,2.011,0,3.526-1.597,3.526-3.714v-5.286c0-.552.447-1,1-1s1,.448,1,1v5.286c0,3.204-2.428,5.714-5.526,5.714Z"/></svg>

);
