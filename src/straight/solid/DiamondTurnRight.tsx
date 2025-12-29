import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiamondTurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.833,8.872L13.839,.877c-1.171-1.171-3.071-1.171-4.242,0L1.651,8.823c-.345,.345-.638,.753-.782,1.22-.35,1.136-.054,2.285,.733,3.071l10.115,10.116,10.062-10.062c.345-.345,.638-.751,.783-1.217,.355-1.137,.059-2.29-.73-3.08Zm-4.369,2.42l-2.757,2.758-1.414-1.414,1.635-1.636h-3.928c-.552,0-1,.448-1,1v5.586l-2-2v-3.585c0-1.657,1.343-3,3-3h3.928l-1.635-1.636,1.414-1.414,2.758,2.759c.345,.344,.535,.803,.535,1.291s-.19,.947-.536,1.292Z"/></svg>

);
