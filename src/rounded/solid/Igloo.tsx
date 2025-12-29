import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Igloo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,.057c4.402,.366,8.136,3.105,9.903,6.943H13V.057ZM7,9H.456c-.296,1.074-.456,2.199-.456,3.351v3.649H7v-7Zm17,3c0-1.038-.147-2.039-.396-3h-6.604v7h7v-4ZM11,7V.048c-.052,.004-.103,.001-.156,.006C6.512,.462,2.959,3.241,1.198,7H11Zm5,11v4c0,1.105,.895,2,2,2h1.5c2.485,0,4.5-2.015,4.5-4.5v-1.5h-8ZM0,19.5c0,2.485,2.015,4.5,4.5,4.5h1.5c1.105,0,2-.895,2-2v-4H0v1.5Zm15-4.12v-6.38h-6v6.38c.733-.839,1.798-1.38,3-1.38s2.267,.541,3,1.38Z"/></svg>

);
