import { Heading, Container } from '@radix-ui/themes'
import UltimateTicTacToe from './UltimateTicTacToe'

function App() {
  return (
    <Container size="4">
      <Heading as="h1" size="8" align="center" mb="4">
        Ultimate Tic-Tac-Toe
      </Heading>
      <UltimateTicTacToe />
    </Container>
  )
}

export default App
