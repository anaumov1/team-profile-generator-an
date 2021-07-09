const writeFile = require('../utils/generate-site');

const generateEmployee = templateArray => {
     let textString = ''
    console.log(templateArray)
    for (let i = 0; i < templateArray.length; i++) { 
        
        if(templateArray[i].role === "Intern") {
            var varIcon = '<i class="fas fa-user-graduate"></i>';
            var varData = 'School';
            var elementVar = templateArray[i].intern
        } else if(templateArray[i].role === "Manager") {
            var varIcon = '<i class="fas fa-mug-hot"></i>';
            var varData = 'Office Number';
            var elementVar = templateArray[i].number
        } else {
            var varIcon = '<i class="fas fa-glasses"></i>';
            var varData = 'GitHub';
            var elementVar = templateArray[i].github
        }
        
        
        textString += `
        <div class="card m-2 shadow-sm rounded" style ='width: 18rem;'>  
            <div class= "card-header text-white bg-primary">
                <h5>${templateArray[i].name}</h5>
                <div>${varIcon} ${templateArray[i].role}</div>
            </div>
            <div class = "card-body">
                <p class = "card-body border" >ID: ${templateArray[i].id}</p>
                <p class = "card-body border" >Email: ${templateArray[i].email}</p>
                <p class = "card-body border" >${varData}: ${elementVar}</p>
            </div>
        </div>`
    }
    return textString;
};


//card templates
const generateIndex = (templateArray) => {
    

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
    />
    <title>Team Profile Generator</title>
    </head>
    <body> 
    <h1 class = "row bg-danger text-light justify-content-center">My Team</h1>    
    <section class ="col col-9 d-flex justify-content-center">
    ${generateEmployee(templateArray)}
    </section>
    </body>
    </html>
    `
    
};


const handler = (templateArray) => {
    
    const file = generateIndex(templateArray)
    writeFile(file);
    console.log('success!')
    
}

module.exports = handler;
