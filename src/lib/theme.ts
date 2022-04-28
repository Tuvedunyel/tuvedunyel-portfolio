import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#EDF2F7', '#1A202C')(props)
    }
  })
}

const components = {
  Link: {
    baseStyle: (props: any) => ({
      colorScheme: mode('#322659', '#FAF5FF')(props),
      size: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px'
        }
      }
    })
  }
}

const theme = extendTheme({ styles, components })
export default theme