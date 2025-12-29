import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,24h-1V1.888C2,1.038,2.526,.334,3.342,.095c.814-.238,1.64,.068,2.1,.782l13.96,21.71c.26,.404,.676,.453,.975,.364,.302-.089,.624-.354,.624-.834V0h1V22.117c0,.85-.527,1.554-1.343,1.793-.812,.243-1.639-.066-2.098-.782L4.6,1.418c-.258-.402-.672-.451-.976-.364-.302,.089-.624,.354-.624,.833V24Z"/></svg>

);
