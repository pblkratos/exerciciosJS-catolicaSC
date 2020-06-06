let grid = "";

for(let i=0;i<8;i++){
    grid += i%2 == 0 ? " " : "";
    for(let j=0;j<8;j++){ 
        grid += "# ";
    }
    grid += "\n";
}
