import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SubtitlesSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,11v2h-3v-2h3ZM2,20V6.243L.083,4.326c-.05,.218-.083,.442-.083,.674V22H17.757l-2-2H2Zm2-2H13.757l-2-2H4v2Zm20.007,4.593l-1.414,1.414L-.007,1.407,1.407-.007,3.414,2H21c1.654,0,3,1.346,3,3V22h-.586l.593,.593ZM5.414,4l7,7h7.586v2h-5.586l3,3h2.586v2h-.586l2,2h.586V5c0-.551-.449-1-1-1H5.414Z"/>
</svg>

);
