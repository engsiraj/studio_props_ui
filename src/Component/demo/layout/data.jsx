// code snipes
export const spaceCode = `import {space} from 'studio-props-system';`
export const spaceUsage = "const Text = styled.p`\n${space}`\n\nconst Component = () => {\nreturn (\n<Text mt='100px' pb='18px' >studio props system</Text>\n)}"

export const typoCode = `import {typography} from 'studio-props-system';`
export const typoUsage = "const Text = styled.p`\n${typography}`\n\nconst Component = () => {\nreturn (\n<Text \n fontSize='mdHeading'\n fontWeight='600' \n textAlign='center' \n fontStyle='italic' \n textDecoration='none' \n display='inline-block' \n // for code block \n code\n // for shortcut block \n keyboard\n>studio props system</Text>\n)}"

export const flexCode = `import {flexbox} from 'studio-props-system';`
export const flexUsage = "const Card = styled.div`\n${flexbox}`\n\nconst Component = () => {\nreturn (\n<Card \n // display:flex; pre defined\n flexDirection='column' \n alignItems='center' \n justifyContent='center' \n alignContent='base-line' \n flexWrap='no-wrap' \n flexBasis='auto' \n flex='0 0 auto' \n>studio props system</Card>\n)}"

export const gridCode = `import {grid} from 'studio-props-system';`
export const gridUsage = "const Card = styled.div`\n${grid}`\n\nconst Component = () => {\nreturn (\n<Card \n // display:grid; pre defined\n gridGap='4px' \n gridColumnGap='2px' \n gridRowGap='2px' \n gridColumn='1' \n gridRow='2' \n placeItems='center' \n templateColumn='1fr' \n templateRow='1fr' \n gridAutoflow='2fr' \n>studio props system</Card>\n)}"

export const bgCode = `import {background} from 'studio-props-system';`
export const bgUsage = "const Card = styled.div`\n${background}`\n\nconst Component = () => {\nreturn (\n<Card \n backgroundImage='url(`${coverImg}`)' \n backgroundSize='cover' \n backgroundPosition='fixed' \n backgroundRepeat='no-repeat'  \n>studio props system</Card>\n)}"

export const borderCode = `import {border} from 'studio-props-system';`
export const borderUsage = "const Card = styled.div`\n${border}`\n\nconst Component = () => {\nreturn (\n<Card \n border='1px solid blue' \n borderTop='2px solid blue' \n borderLeft='2px solid blue' \n borderRight='2px solid blue' \n borderBottom='2px solid blue' \n borderWidth='2px' \n borderStyle='solid' \n borderColor='#333' \n corner='2px' \n>studio props system</Card>\n)}"

export const shCode = `import {shadow} from 'studio-props-system';`
export const shUsage = "const Card = styled.div`\n${shadow}`\n\nconst Component = () => {\nreturn (\n<Card \n boxShadow=''  \n textShadow=''  \n>studio props system</Card>\n)}"

export const layCode = `import {layout} from 'studio-props-system';`
export const layUsage = "const Card = styled.div`\n${layout}`\n\nconst Component = () => {\nreturn (\n<Card \n width='4px' \n height='2px' \n minWidth='2px' \n minHeight='1' \n maxWidth='2' \n maxHeight='center' \n overflow='hidden' \n overflowX='hidden' \n overflowY='hidden' \n>studio props system</Card>\n)}"

