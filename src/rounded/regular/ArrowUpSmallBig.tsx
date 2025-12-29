import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpSmallBig = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1h-2c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3h2c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm1,5c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v2Zm-1,7h-4c-1.65,0-3,1.35-3,3v4c0,1.65,1.35,3,3,3h4c1.65,0,3-1.35,3-3v-4c0-1.65-1.35-3-3-3Zm1,7c0,.55-.45,1-1,1h-4c-.55,0-1-.45-1-1v-4c0-.55,.45-1,1-1h4c.55,0,1,.45,1,1v4ZM11.69,4.28c.4,.38,.42,1.01,.04,1.41-.2,.21-.46,.31-.72,.31-.25,0-.5-.09-.69-.28l-3.31-3.15V23c0,.55-.45,1-1,1s-1-.45-1-1V2.57L1.69,5.72c-.4,.38-1.03,.37-1.41-.04-.38-.4-.37-1.03,.04-1.41L3.9,.86c1.15-1.15,3.05-1.15,4.22,.02l3.57,3.4Z"/></svg>

);
