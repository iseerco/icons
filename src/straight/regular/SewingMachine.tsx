import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SewingMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,17.78V5c0-1.654-1.346-3-3-3h-1V0h-2V2H6V0h-2V2c-1.654,0-3,1.346-3,3V13.062h3v1.938h2v-1.938h3v-3.062h4v7H3c-1.654,0-3,1.346-3,3v4H24v-4c0-.883-.391-1.67-1-2.22ZM7,8v3.062H3V5c0-.552,.449-1,1-1H20c.551,0,1,.448,1,1v12h-6V8H7Zm15,14H2v-2c0-.552,.449-1,1-1H21c.551,0,1,.448,1,1v2Zm-5.5-8.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm0-4c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/>
</svg>

);
