import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Zm3-13h-.196l-.786-1.223c-.311-.484-.847-.777-1.422-.777h-1.19c-.575,0-1.111.293-1.422.777l-.786,1.223h-.196c-1.105,0-2,.895-2,2v4c0,1.105.895,2,2,2h6c1.105,0,2-.895,2-2v-4c0-1.105-.895-2-2-2Zm-3,6c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/>
</svg>

);
