import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlashlight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.205.088l-3.205,3.205v4.92L.732,18.48c-.975.975-.975,2.561,0,3.535l1.252,1.252c.472.473,1.1.732,1.768.732s1.296-.26,1.768-.732l10.268-10.268h4.92l3.205-3.205L14.205.088ZM4.812,22.561c-.566.566-1.555.566-2.121,0l-1.252-1.252c-.585-.585-.585-1.536,0-2.121l10.021-10.021,3.373,3.373-10.021,10.021Zm15.48-10.561h-4.586l-3.707-3.707V3.707l2.205-2.205,8.293,8.293-2.205,2.205Zm-9.646.646l.707.707-2,2-.707-.707,2-2Z"/>
</svg>

);
