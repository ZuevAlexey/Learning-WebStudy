import express from 'express';

const app = express();

app.use(routing.pages.main, express.static(__dirName + '/public'));
app.listen(routing.port);

app.get('*', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Калькулятор</title>
        <script defer src="bundle.js" ></script>
    </head>
    <body>
        <div id="root" />
    </div>
    </body>
    </html>`);
});

console.log(`web server is running on port ${routing.port}`);