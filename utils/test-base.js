const base = require('@playwright/test');

exports.cumstomtest = base.test.extend(

    {
      testDataSeriesTable: {
        Name     : "seriestestname",
        Describtion     : "newseries",
        IsCalculation   : "false",
        Alisa    : "automationseries",
        Formular : "",
        SeriesType : "Copper Production"
    }

 }
)
