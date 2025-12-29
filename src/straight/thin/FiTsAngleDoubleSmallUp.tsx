import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleDoubleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.635,11.428l-5.281-5.281c-.189-.188-.518-.188-.707,0l-5.281,5.281-.707-.707,5.281-5.281c.566-.566,1.555-.566,2.121,0l5.281,5.281-.707,.707Zm.707,6.638l-5.87-5.869c-.25-.254-.694-.252-.942-.001l-5.871,5.871,.707,.707,5.635-5.634,5.635,5.634,.707-.707Z"/></svg>

);
