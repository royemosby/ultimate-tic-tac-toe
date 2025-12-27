import { Grid, Box } from '@radix-ui/themes';
import { Cross1Icon, CircleIcon } from '@radix-ui/react-icons';
import './UltimateTicTacToe.css';

// Ultimate Tic-Tac-Toe is a 3x3 grid of 3x3 tic-tac-toe boards
// Each small board is a standard tic-tac-toe game
// The large board determines which small board to play in

type CellValue = 'X' | 'O' | null;

interface CellProps {
  value: CellValue;
}

const Cell = ({ value }: CellProps) => {
  return (
    <Box className="cell">
      {value === 'X' && <Cross1Icon className="cell-icon" />}
      {value === 'O' && <CircleIcon className="cell-icon" />}
    </Box>
  );
};

interface SmallBoardProps {
  cells: CellValue[];
}

const SmallBoard = ({ cells }: SmallBoardProps) => {
  return (
    <Box className="small-board">
      <Grid columns="3" gap="1" className="small-board-grid">
        {cells.map((cell, index) => (
          <Cell key={index} value={cell} />
        ))}
      </Grid>
    </Box>
  );
};

const UltimateTicTacToe = () => {
  // Example game state with some moves placed
  // Each small board has 9 cells (3x3)
  const boards: CellValue[][] = [
    // Top-left board with some moves
    ['X', 'O', null, 'O', 'X', null, null, null, 'X'],
    // Top-center board with some moves
    [null, 'X', null, 'O', null, null, null, 'O', 'X'],
    // Top-right board
    ['O', null, 'X', null, null, null, null, 'X', 'O'],
    // Middle-left board
    ['X', null, 'O', null, 'X', null, 'O', null, null],
    // Middle-center board with more moves
    ['X', 'O', 'X', 'O', 'O', 'X', null, 'X', 'O'],
    // Middle-right board
    [null, null, 'X', 'O', null, null, null, null, 'O'],
    // Bottom-left board
    ['O', 'X', null, null, null, null, 'X', 'O', null],
    // Bottom-center board
    [null, null, null, 'X', 'O', null, null, null, 'X'],
    // Bottom-right board
    ['X', null, 'O', null, null, 'X', 'O', null, null],
  ];

  return (
    <Box className="ultimate-board-container">
      <Grid columns="3" gap="3" className="ultimate-board">
        {boards.map((board, index) => (
          <SmallBoard key={index} cells={board} />
        ))}
      </Grid>
    </Box>
  );
};

export default UltimateTicTacToe;
