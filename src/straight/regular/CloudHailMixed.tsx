import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudHailMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,15a1,1,0,1,1-1-1A1,1,0,0,1,13,15ZM6,22a1,1,0,1,0,1,1A1,1,0,0,0,6,22ZM17.441,5.059A8,8,0,0,0,2.265,10.05,5.5,5.5,0,0,0,4,19.792v-2.13a3.5,3.5,0,0,1-.089-6.282l.8-.408-.319-.838A6,6,0,0,1,10,2a6.035,6.035,0,0,1,5.752,4.289l.206.691L16.679,7A5.5,5.5,0,0,1,18,17.792v2.057a7.5,7.5,0,0,0-.559-14.79ZM9.22,14.242l-1.94-.484-1.5,6,1.94.484ZM14,22a1,1,0,1,0,1,1A1,1,0,0,0,14,22Zm3.22-7.758-1.94-.484-1.5,6,1.94.484Zm-4.934,3.77-1.94-.485-1.5,6,1.94.485Z"/></svg>

);
