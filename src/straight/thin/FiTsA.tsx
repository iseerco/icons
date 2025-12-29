import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.076,24h1.078L13.851,.928c-.289-.563-.926-.928-1.622-.928-.722,0-1.345,.386-1.681,1.063L.981,24h1.083l3.337-8h13.45l3.225,8ZM5.818,15L11.458,1.479c.151-.304,.433-.479,.773-.479,.367,0,.636,.199,.711,.343l5.506,13.657H5.818Z"/></svg>

);
