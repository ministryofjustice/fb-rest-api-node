const app = require('./index')

// Start server
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`)
})
