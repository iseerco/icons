import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAperture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm1.856,3.193c1.906.401,3.592,1.407,4.847,2.807h-6.558l1.711-2.807Zm-3.487-.044l-3.511,5.759-1.607-2.855c1.308-1.483,3.096-2.532,5.118-2.904ZM3,12c0-1.032.175-2.024.496-2.948l3.347,5.948h-3.329c-.333-.939-.515-1.948-.515-3Zm7.144,8.807c-1.906-.401-3.592-1.407-4.847-2.807h6.558l-1.711,2.807Zm.142-5.807l-1.742-3.095,1.771-2.905h3.372l1.824,3.003-1.827,2.997h-3.398Zm3.345,5.852l3.634-5.961,1.701,2.802c-1.324,1.617-3.199,2.767-5.335,3.16Zm3.566-11.852h3.288c.333.939.515,1.948.515,3,0,.911-.136,1.791-.389,2.62l-3.413-5.62Z"/>
</svg>

);
