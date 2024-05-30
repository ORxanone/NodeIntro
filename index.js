process.stdin.on('data', (chunk)=>{
    const input = chunk.toString().trim()
    if(input === 'quit') {
        process.exit(0)
    }
    
    const value = eval(input)
    console.log(value)
})