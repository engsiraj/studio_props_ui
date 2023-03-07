import { Prism  } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components'

const Syntax = styled(Prism)`
  border-radius: 0.75rem !important;
`
export default function Code(p)  {
  return (
    <Syntax wrapLongLines  language={p.lang} style={vscDarkPlus}>{p.code}</Syntax>
  );
};

