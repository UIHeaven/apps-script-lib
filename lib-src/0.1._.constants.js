//CONSTANTS needs to be available where spreadsheet is not accessible (yet)
//cannot be moved to sheet-based parameters
var CONSTANTS = {
    
    configurator: {
        ADMIN_SPREADSHEET_ID: "",  //empty string means to get active Spreadsheet, good for bounded scripts

        PARAMETERS_SHEET_NAME: 'SCRIPT',

        //========================== Rather internal parameters below =======================================
        //Indexes below counting from 1
        PARAM_NAME_POSITION: 1,
        PARAM_TYPE_POSITION: 2,
        ITEMS_SPLITTER_POSITION: 3,
        PARAM_VALUE_POSITION: 5,
        PARAM_ROWS_STARTS_FROM: 5
    }
};

