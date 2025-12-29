import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoVapingCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.727 17 2 2h-7.727v-7.727l2 2v3.727zm11.273-5c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-12-10c-2.398 0-4.6.85-6.324 2.262l3.036 3.036c.399-.19.837-.298 1.288-.298h3v-2h1v-1h2v1h1v10.586l2.738 2.738c1.412-1.725 2.262-3.927 2.262-6.324 0-5.514-4.486-10-10-10zm-1.586 7 4.586 4.586v-4.586zm1.586 13c2.398 0 4.6-.85 6.324-2.262l-14.062-14.062c-1.412 1.725-2.262 3.927-2.262 6.324 0 5.514 4.486 10 10 10z"/></svg>
);
