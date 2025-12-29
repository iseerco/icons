import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceIcicles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.142,.053C6.015-.609,.018,5.008,.015,12h-.015v7c0,.552,.448,1,1,1s1-.448,1-1v-6c0-.552,.448-1,1-1s1,.448,1,1v7.484c0,.296,.126,.582,.353,.771,1.521,1.262,3.354,2.156,5.359,2.531,2.232,.418,4.368,.19,6.288-.497v-2.288c0-.552,.448-1,1-1s1,.448,1,1v2c0,.552,.448,1,1,1s1-.448,1-1V13c0-.552,.448-1,1-1s1,.448,1,1v8c0,.552,.448,1,1,1s1-.448,1-1V12.355C24,6.104,19.367,.632,13.142,.053Zm-4.142,17.947h-1c-1.105,0-2-.895-2-2s.895-2,2-2h1v4Zm-.5-7c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm4.5,7h-2v-4h2v4Zm1-8.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm2,8.5h-1v-4h1c1.105,0,2,.895,2,2s-.897,2-2,2Z"/></svg>

);
