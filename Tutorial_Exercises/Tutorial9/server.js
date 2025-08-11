/*
<!--In this exercise, you will create a simple HTTP server using Node.js that serves different HTML pages based on the URL requested. 
Create three HTML files:
index.html: The homepage with a title and welcome message.
about.html: An "About Us" page with a title and short description.
contact.html: A "Contact Us" page with a title and contact message.

Add navigation links in each HTML file that allow users to navigate to:
Home (/)
About (/about)
Contact (/contact)

*/

//importing the modules
const http=require('http'); //this creates the http server
const fs= require('fs'); // this is for file searching in the file system
const path=require('path'); //this is for handling file paths
const hostname= '127.0.0.1';
const PORT= 3000;

//create the server
const server= http.createServer((req,res)=>{
    
    //based on the file path, different commnds will be executed
    const filePath= '';

    // now we gotta determine which file has been clicked on
    switch(req.url){
        case '/':
            filePath= 'index.html';
            break;
        case '/about':
            filePath='about.html';
            break;
        case '/contact':
            filePath= 'contact.html';
            break;
        default:
            filePath='404.html' //this is optional error page
    }

    //build full path to html file
    const fullPath= path.join(__dirname, filePath);

    //read file async
    fs.readFile(fullPath, (err, data)=>{
        if(err){
            
        }
    })



});

server.listen(PORT, hostname, ()=>{
    console.log('Server running at http://${hostname}:${PORT}/');
});
