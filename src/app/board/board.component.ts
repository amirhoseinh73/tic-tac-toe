import { Component } from "@angular/core"

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  squares!: (Players | null)[]
  xIsNext!: boolean
  winner!: string | null

  constructor() {
    this.newGame()
  }

  public newGame() {
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xIsNext = true
  }

  public get player(): Players {
    return this.xIsNext ? "X" : "O"
  }

  public makeMove(idx: number) {
    if (this.winner) return
    if (this.squares[idx]) return

    this.squares.splice(idx, 1, this.player)
    this.xIsNext = !this.xIsNext

    this.winner = this.calculateWinner()
  }

  public calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      )
        return this.squares[a]
    }

    return null
  }
}
