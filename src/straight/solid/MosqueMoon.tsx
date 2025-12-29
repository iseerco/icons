import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MosqueMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,17.61c0-4.285-3.708-6.157-6.415-7.523-.731-.369-1.718-.87-2.234-1.287-.033-.081-.232-.635-.314-1.832,1.359-.155,2.486-1.057,2.963-2.291-.405.157-.842.251-1.303.251-2.002,0-3.626-1.623-3.626-3.626,0-.461.095-.897.251-1.303-1.357.524-2.323,1.833-2.323,3.374,0,1.409.813,2.617,1.987,3.217-.058,1.57-.308,2.172-.308,2.172l.008.007c-.505.422-1.524.939-2.272,1.316-2.707,1.367-6.415,3.239-6.415,7.523,0,1.48.721,3.036,1.949,4.39h-1.949v2h20v-2h-1.949c1.228-1.354,1.949-2.91,1.949-4.39Z"/>
</svg>

);
