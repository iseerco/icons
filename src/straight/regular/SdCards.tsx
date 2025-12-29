import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SdCards = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0h-7.171c-.801,0-1.555.312-2.122.879l-2.828,2.828c-.567.566-.879,1.32-.879,2.121v14.172h16V3c0-1.654-1.346-3-3-3Zm1,18h-12V5.828c0-.263.107-.521.293-.707l2.828-2.828c.189-.188.44-.293.708-.293h7.171c.551,0,1,.448,1,1v15Zm-16,4h14v2H2v-14.172c0-.801.312-1.555.879-2.121l1.121-1.121v15.414Zm6-15.758l2-2v2.758h-2v-.758Zm6-2.242h2v3h-2v-3Zm-3,0h2v3h-2v-3Z"/>
</svg>

);
