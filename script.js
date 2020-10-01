

/**
 
*@YouTube Below is YouTube video that show the demo

*https://www.youtube.com/watch?v=yWUkMV_I28c 

**/



/**
 * The function is a asynchronous (promise) function  
 * It initialize the extension api using initializeAsync() built in method. 
  */

tableau.extensions.initializeAsync().then(() => {
  console.log('test1')
  //Tableau have number of extension and dashboardContent is one of them
    let dashboard = tableau.extensions.dashboardContent.dashboard;

    //We are accessing the dashboard worksheet to find the worksheet with name kaiser
    let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'kaiser');

    //if kaiser worksheet is found, call updateFilterRange method else print no file found
    if(selectedWorksheet){
      let fieldName = 'Date';
      updateFilterRange(selectedWorksheet, fieldName);
    }else{
      console.log("No file found")
    }
    
  });
  


   
  /**
 * The function filter by date using 
  the applyRangeFilterAsync built-in function in tableau JavaScript library
 * @param {} The function takes two parameters such as worksheet and field name
 * @returns {file} file after applied filters
 */
  
  function updateFilterRange(worksheet, fieldName) {

  //use new Date built-in function to find date of today
    let today = new Date();
    let lastYear = new Date();
    console.log("test");

    //last year is calculated using today's year minuse one
    lastYear.setFullYear(today.getFullYear()-1);

    //applyRangeFilterAsync function is using to filter the worksheet based on the field requirement
    worksheet.applyRangeFilterAsync(fieldName, { min: lastYear, max: today});
  }