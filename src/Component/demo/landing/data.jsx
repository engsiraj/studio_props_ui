export const colCode = `import {color} from 'studio-props-system';`
export const colUsage = "const Card = styled.div`\n${color}`\n\nconst Component = () => {\nreturn (\n<Card \n backgroundColor='Gray200'  \n color='Gray700'  \n borderColor='Yellow500'  \n>studio props system</Card>\n)}"

export const typoCode = `import {typography} from 'studio-props-system';`
export const typoUsage = "const Text = styled.p`\n${typography}`\n\nconst Component = () => {\nreturn (\n<Text \n fontSize='mdHeading'\n fontWeight='600' \n textAlign='center' \n fontStyle='italic' \n textDecoration='none' \n display='inline-block' \n // for code block \n code\n // for shortcut block \n keyboard\n>studio props system</Text>\n)}"


export const layCode = `import {layout} from 'studio-props-system';`
export const layUsage = "const Card = styled.div`\n${layout}`\n\nconst Component = () => {\nreturn (\n<Card \n width='4px' \n height='2px' \n minWidth='2px' \n minHeight='1' \n maxWidth='2' \n maxHeight='center' \n overflow='hidden' \n overflowX='hidden' \n overflowY='hidden' \n>studio props system</Card>\n)}"