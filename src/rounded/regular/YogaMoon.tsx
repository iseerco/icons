import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const YogaMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM18,2V21c0,.553-.448,1-1,1s-1-.447-1-1v-7h-5.382l3.276,6.553c.247,.494,.047,1.095-.447,1.342-.484,.244-1.094,.052-1.342-.447l-3.724-7.447h-2.764l-3.724,7.447c-.248,.499-.858,.691-1.342,.447-.494-.247-.694-.848-.447-1.342L5,10.764c.783-1.593,2.32-2.561,4.03-2.764h6.97V2c0-.552,.448-1,1-1s1,.448,1,1Zm-2,10v-2h-6.528c-1.144,0-2.172,.635-2.683,1.658l-.171,.342h9.382Z"/>
</svg>

);
