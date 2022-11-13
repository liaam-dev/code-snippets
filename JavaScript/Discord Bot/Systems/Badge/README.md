# Badge System
Discord bot Badge System ( Profile Command ) With Discord.js Using Mongodb Database.

## Get Started

Lets get started by installing some dependencies, open your favourite terminal.
Run the following Commands in your Terminal.

```shell
npm install discord.js@latest
npm install mongoose
```

## Instructions

1. Install all the dependencies.
2. Copy the command files into your command folder.
3. Create a folder called `Schema` and copy the schema files into it.
4. Correct all the paths to the schemas folder.
5. Make some changes on codes to work with your handler.
6. Try the commands!

## MongoDB Code

```
    // Add this to the top of the file
    const { connect } = require('mongoose')
    
    // Add this to your ready.js file
    await connect("your mongodb url")
      .then(() => {
        console.log(`✅ >>> Successfully connected to MongoDB!`);
      })
      .catch((err) => {
        console.log(err);
      });
```
