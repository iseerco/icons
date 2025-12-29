import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.944 2.634-7.944-2.634-7.944 2.634a3 3 0 0 0 -2.056 2.848v6.509c0 7.524 9.2 11.679 9.594 11.852l.354.157.368-.122c.395-.131 9.684-3.31 9.684-11.887v-6.509a3 3 0 0 0 -2.056-2.848zm-6.944 16.418h-2v-2h2zm0-4.052h-2v-10h2z"/></svg>
);
