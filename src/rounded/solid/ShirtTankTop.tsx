import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShirtTankTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.649,8.472c-1.033-.645-1.649-1.756-1.649-2.972V1c0-.552-.447-1-1-1s-1,.448-1,1v3c0,2.206-1.794,4-4,4s-4-1.794-4-4V1c0-.552-.447-1-1-1s-1,.448-1,1v4.5c0,1.216-.616,2.327-1.65,2.972-.832.521-1.35,1.479-1.35,2.502v8.026c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-8.026c0-1.023-.518-1.981-1.351-2.502Z"/>
</svg>

);
