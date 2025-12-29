import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTabFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.803,3.163l-.213-.795c-.272-.817-1.037-1.368-1.897-1.368h-2.648l.667,2h-2.064l-.211-.632c-.272-.817-1.037-1.368-1.897-1.368h-2.642l.667,2h-2.079l-.211-.632c-.272-.817-1.036-1.368-1.897-1.368h-1.376C1.791,1,0,2.791,0,5v12.5c0,3.032,2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5v-9c0-2.583-1.792-4.75-4.197-5.337Zm1.197,14.337c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5v-9.5h17.949c.033.162.051.329.051.5v9Z"/>
</svg>

);
