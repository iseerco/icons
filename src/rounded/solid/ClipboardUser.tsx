import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,7v12c0,2.757-2.243,5-5,5h-8c-2.757,0-5-2.243-5-5V7c0-2.757,2.243-5,5-5h.171c.413-1.164,1.525-2,2.829-2h2c1.304,0,2.416.836,2.829,2h.171c2.757,0,5,2.243,5,5Zm-11.5,3.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm7.468,7.251c-.559-2.173-2.648-3.751-4.968-3.751s-4.409,1.578-4.968,3.751c-.138.535.184,1.08.719,1.217.537.141,1.08-.184,1.217-.719.33-1.282,1.633-2.249,3.032-2.249s2.702.967,3.032,2.249c.116.452.522.751.968.751.082,0,.166-.01.25-.032.535-.137.857-.683.719-1.217Z"/></svg>

);
