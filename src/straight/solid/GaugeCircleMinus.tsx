import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GaugeCircleMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm4,7h-8v-2h8v2Zm-10.003-6.276c-1.239,1.409-1.997,3.252-1.997,5.276h-3l-1.705,2.5-.588-.413C1.76,18.016,0,14.637,0,11.048,0,4.956,4.956,0,11.048,0s11.048,4.956,11.048,11.048c0,.029-.005.057-.005.086-1.198-.715-2.594-1.134-4.091-1.134-2.024,0-3.867.757-5.276,1.997.171-.294.276-.632.276-.997,0-.738-.405-1.376-1-1.723V3h-2v6.277c-.595.346-1,.984-1,1.723,0,1.105.895,2,2,2,.365,0,.702-.105.997-.276Z"/>
</svg>

);
