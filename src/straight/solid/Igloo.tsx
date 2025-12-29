import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Igloo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.105,7C2.873,3.164,6.599,.416,11,.051V7H1.105Zm15.895,9h7v-4c0-1.037-.146-2.039-.395-3h-6.605v7ZM13,7h9.895C21.127,3.164,17.401,.416,13,.051V7ZM.395,9c-.249,.961-.395,1.963-.395,3v4H7v-7H.395Zm15.605,9v6h8v-6h-8ZM0,18v6H8v-6H0ZM9,9v6.39c.73-.845,1.795-1.39,3-1.39s2.27,.544,3,1.39v-6.39h-6Z"/></svg>

);
