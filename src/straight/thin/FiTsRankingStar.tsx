import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRankingStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,17h-4.5c-.364,0-.706.098-1,.269v-5.269c0-1.103-.897-2-2-2h-5c-1.103,0-2,.897-2,2v2.269c-.294-.171-.636-.269-1-.269H2c-1.103,0-2,.897-2,2v8h24v-5c0-1.103-.897-2-2-2Zm-13.5-5c0-.551.448-1,1-1h5c.552,0,1,.449,1,1v11h-7v-11Zm-7.5,4c0-.551.448-1,1-1h4.5c.552,0,1,.449,1,1v7H1v-7Zm22,7h-6.5v-4c0-.551.448-1,1-1h4.5c.552,0,1,.449,1,1v4ZM9.15,7.669l.627.471,2.223-1.441,2.222,1.441.624-.482-.707-2.364,1.861-1.5v-.795h-2.683l-.921-2.626h-.793l-.921,2.626h-2.683v.795l1.861,1.5-.711,2.374Zm.697-3.669h1.544l.608-1.735.608,1.735h1.544l-1.164.938.449,1.502-1.437-.932-1.438.932.449-1.502-1.164-.938Z"/>
</svg>

);
