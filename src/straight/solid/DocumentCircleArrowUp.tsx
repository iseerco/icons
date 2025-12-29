import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentCircleArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm1,6v3h-2v-3h-2.454l2.687-2.687c.417-.417,1.093-.417,1.51,0l2.688,2.687h-2.431Zm.414-13h-4.414V.586l4.414,4.414Zm-6.693,19H0V3C0,1.343,1.343,0,3,0H13V7h7v3.262c-.64-.165-1.308-.262-2-.262-4.418,0-8,3.582-8,8,0,2.393,1.056,4.534,2.721,6Z"/>
</svg>

);
