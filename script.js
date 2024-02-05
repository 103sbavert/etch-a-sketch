const gridDimensions = 16
let grid = document.querySelector(".grid")

for (let i = 0; i < gridDimensions; i++) {
	let gridRow = document.createElement("div")
	gridRow.classList.add("grid-row")
	grid.appendChild(gridRow)
}

for (let i = 0; i < gridDimensions; i++) {
	for (let j = 0; j < gridDimensions; j++) {
		let gridCell = document.createElement("div")
		gridCell.classList.add("grid-cell")
		gridCell.style.opacity = "0.0"
		grid.childNodes[i].appendChild(gridCell)
	}
}

grid.addEventListener("mouseover", (e) => {
	let temp = Number.parseFloat(e.target.style.opacity) + 0.05
	console.log(temp)
	e.target.style.opacity = temp < 1.0 ? temp.toString() : 1.0.toString()
})

