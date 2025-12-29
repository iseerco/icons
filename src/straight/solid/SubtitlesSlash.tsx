import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SubtitlesSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.757,18l4,4H0V5c0-.233,.033-.457,.083-.674l6.674,6.674h-2.757v2h3v-1.757l4.757,4.757H4v2H13.757Zm10.25,4.593l-1.414,1.414L-.007,1.407,1.407-.007,3.414,2H21c1.654,0,3,1.346,3,3V22h-.586l.593,.593Zm-4.007-4.593v-2h-2.586l2,2h.586Zm0-7h-7.586l2,2h5.586v-2Z"/>
</svg>

);
