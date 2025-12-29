import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD10 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.807,11.645l-2.8,2.105L9.194,11.645l2.889-7.8Zm1.935-.531L24,12.308,14.238.845,14.163.762A2.877,2.877,0,0,0,12.825.03ZM11.008,15.5,7.75,13.062.625,14.42l9.243,8.9a2.96,2.96,0,0,0,1.14.695Zm5.247-2.441L13.008,15.5V24a3.006,3.006,0,0,0,1.09-.688l9.393-9.063Zm-9-1.941L11.353.011A2.9,2.9,0,0,0,9.945.762L0,12.5Z"/></svg>

);
