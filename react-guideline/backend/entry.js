import express from 'express';

const app = express();

app.use(routing.pages.main, express.static(__dirName + '/public'));
app.listen(routing.port);

const metaInfo = {
    [routing.pages.main] : 'Button',
    [routing.pages.button] : 'Button',
    [routing.pages.inputText] : 'Input text',
    [routing.pages.inputTextArea] : 'Input text area',
    [routing.pages.container] : 'Container',
    [routing.pages.table] : 'Table',
    [routing.pages.popover] : 'Popover',
    [routing.pages.dropdown] : 'Dropdown',
    [routing.pages.modalWindow] : 'Modal window',
};

app.get(Object.values(routing.pages), (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Гайдлайн - ${metaInfo[req.path]}</title>
        <script defer src="bundle.js" ></script>
    </head>
    <body>
        <div id="root" />
    </div>
    </body>
    </html>`);
});

console.log(`web server is running on port ${routing.port}`);