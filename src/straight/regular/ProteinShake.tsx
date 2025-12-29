import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ProteinShake = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.938 3.817c-.474-1.104-1.556-1.817-2.757-1.817h-6.182v-2h-2v2h-.182c-1.201 0-2.283.714-2.757 1.818l-1.062 2.477.002 1.771 1.062 15.934h13.871l1.064-16v-1.705l-1.062-2.478zm-11.12.183h8.363c.4 0 .761.238.919.605l.597 1.395h-11.395l.597-1.394c.158-.368.519-.606.919-.606zm-.883 18-.134-2h3.198v-2h-3.332l-.134-2h3.465v-2h-3.599l-.134-2h3.733v-2h-3.866l-.134-2h11.997l-.933 14h-10.126z"/></svg>
);
