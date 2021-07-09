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
        
        
    
